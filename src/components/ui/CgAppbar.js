import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link as BrowserLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardContext from '../context/dashboardContext';

import Tooltip from '@mui/material/Tooltip';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const handleReset = () => {
  localStorage.removeItem('grid-layout')
  window.location.reload();
}

const CgAppbar = ({data, handleDrawerOpen}) => {
  
  const { editMode, handleEditToggle } = useContext(DashboardContext);
  
  return (
      <AppBar 
        position="fixed" 
        className= 'h-16'
        style={{ background: `${!editMode ? '#1d4354' : 'black'}`  }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar>
            { !editMode ? 
                <>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleDrawerOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: 1}}>
                  {data.map(item => 
                    <BrowserLink to={item.link}  key={item.name}>
                      <Button color='inherit' sx={{ flexGrow: 1, display: 'inline'}} className='pr-3 tracking-wide'>
                          {item.name}
                      </Button>  
                    </BrowserLink>
                  )}
                  </Box>
                </> : <Box sx={{flexGrow: 1}}> You are in edit mode. Drag and resize the cards for your preferred layout. </Box> }
            <Box sx={{ flexGrow: 0, }} className='toggleFlex'>
              {editMode ? <Tooltip title='Reset Layout'><IconButton onClick={handleReset}><RestartAltIcon className='mr-4 text-white' /></IconButton></Tooltip>: ''}
              <FormControl className='bg-inherit text-white rounded p-2 toggleFlex'>
                <Switch onClick={handleEditToggle} />
                <span>{`${editMode ? 'Disable' : 'Enable '} Edit Mode`}</span>
              </FormControl>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    
  );
}

CgAppbar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default CgAppbar;
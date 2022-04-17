import { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardContext from '../context/dashboardContext';

const CgAppbar = ({data, handleDrawerOpen}) => {
  
  const { editMode, handleEditToggle } = useContext(DashboardContext);
  
  return (
      <AppBar position="fixed" color={!editMode ? 'inherit' : 'primary'} className= 'h-16'>
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
                    <Button color='inherit' sx={{ flexGrow: 1, display: 'inline'}} className='pr-3 tracking-wide' key={item.name}>
                        {item.name}
                    </Button>  
                  )}
                  </Box>
                </> : <Box sx={{flexGrow: 1}}> You are in edit mode. Drag and resize the cards for your preferred layout. </Box> }
            <Box sx={{ flexGrow: 0 }}>
              <FormControl onClick={handleEditToggle} className='bg-white text-black rounded p-2'>
                <FormControlLabel control={<Switch defaultChecked={false} />} label={`${editMode ? `Disable` : `Enable`} Edit Mode`} />
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
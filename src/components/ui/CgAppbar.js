import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const CgAppbar = ({data, open, handleDrawerOpen}) => {
  
  return (
      <AppBar position="fixed" color='inherit' className={`${open ? 'selected' : ''} h-16`}>
        <Container maxWidth="xl" disableGutters>
          <Toolbar>
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
            {!open ? data.map(item => 
              <Button color='inherit' sx={{ flexGrow: 1, display: 'inline' }} className='pr-3 tracking-wide' key={item.name}>
                  {item.name}
              </Button>  
            ) : ''}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit">Login</Button>
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
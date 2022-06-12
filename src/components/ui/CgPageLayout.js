import { useState } from 'react';
import PropTypes from 'prop-types';
import CgAppbar from './CgAppbar';
import CgSidebar from './CgSidebar';
import CgContent from './CgContent';
//material
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const CgPageLayout = ({appbar, sidebar, content , occupiesViewPort}) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <Box sx={{ display: 'flex'}} style={{display: 'flex', height: `${occupiesViewPort  ? '100vh' : ''}`}}>
        <CssBaseline />
          {open ? 
          <Drawer variant="permanent" PaperProps={{
            sx: {
            backgroundColor: "#1d4354",
            color: "white",
              }
          }}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon  />
              </IconButton>
            </DrawerHeader>
            <Divider/>
                <CgSidebar options={sidebar}/>
            <Divider />            
          </Drawer> : <CgAppbar data={appbar} handleDrawerOpen={handleDrawerOpen}/>}
          <CgContent content={content} open={open}  />
      </Box>
    );
}

CgPageLayout.propTypes = {
    appbar: PropTypes.arrayOf(PropTypes.object),
    sidebar: PropTypes.arrayOf(PropTypes.object),
    content: PropTypes.element,
}
export default CgPageLayout;
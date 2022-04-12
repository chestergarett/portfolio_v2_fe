import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

const CgContent = ({content, open}) => {

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100vw'}}>
          <DrawerHeader/>
              {content}
        </Box>
    )
}

export default CgContent;


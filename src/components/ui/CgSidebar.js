import PropTypes from 'prop-types';
import { Link as BrowserLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const CgSidebar = ({options}) => {

    return (
      <>
        <List>
          {options.map((option) => (
              <BrowserLink to={option.link} key={option.key}>
                <ListItem button>
                  <ListItemIcon>
                    {option.icon}
                  </ListItemIcon>
                  <ListItemText primary={option.text} />
                </ListItem>
            </BrowserLink>
          ))}
        </List>
      </>
    )
}

CgSidebar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
}

export default CgSidebar;
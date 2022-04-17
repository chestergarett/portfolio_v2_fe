import PropTypes from 'prop-types';
import { Link as BrowserLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const CgSidebar = ({options}) => {
  console.log(options)
    return (
      <>
        <List>
          {options.map((option) => {
      
            return (<div key={option.key}>
                {!option.link ? 
                    <ListItem>
                      <ListItemIcon>
                        {option.icon}
                      </ListItemIcon>
                      <ListItemText primary={option.text} primaryTypographyProps={{fontWeight: '700'}} />
                    </ListItem>
                : 
                  option.type=='app' ? 
                    <a href={option.link} target="_blank">
                      <ListItem button><ListItemText primary={option.text} className="ml-14"/></ListItem>
                    </a> : <BrowserLink to={option.link}><ListItem button><ListItemText primary={option.text} className="ml-14"/></ListItem></BrowserLink>
                }
            </div> )
          })}
        </List>
      </>
    )
}

CgSidebar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
}

export default CgSidebar;
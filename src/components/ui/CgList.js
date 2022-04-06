import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const CgList = ({data, type}) => {
    
    switch(type){
        case 'workExperience':
            return (
                <List>
                    {data.map( item => 
                        <>
                        <ListItem alignItems='flex-start'>
                            <ListItemAvatar>
                                <Avatar alt={item.img} src={item.img} />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant='h3' component='div'>
                                    {item.company}
                                </Typography>
                                <Typography variant='subtitle1' component='div'>
                                    {item.fullDate}
                                </Typography>
                                {
                                    item.subExperience.map(subItem => 
                                        <>
                                            <Typography variant='h3'>{subItem.position}</Typography>
                                            <Typography variant='subtitle1'>{subItem.fullDate}</Typography>
                                            {subItem.description.map(subDesc => 
                                                <Typography variant='body2' component='div'>{subDesc.subDesc}</Typography>
                                            )}
                                        </>
                                    )
                                }
                            </ListItemText>
                        </ListItem>
                        <Divider />    
                        </>
                    )}
                </List>
            )
        case 'education':
            return (
                <List>
                    {data.map(item => 
                        <>
                        <ListItem alignItems='flex-start'>
                            <ListItemAvatar>
                                <Avatar alt={item.img} src={item.img} />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant='h3' component='div'>
                                    {item.school}
                                </Typography>
                                <Typography variant='subtitle1' component='div'>
                                    {item.course}
                                </Typography>
                                <Typography variant='subtitle2' component='div'>
                                    {item.fullDate}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <Divider />
                        </>    
                    )}
                </List>
            )
        case 'licenses':
            return (
                <List>
                    {data.map(item => 
                        <>
                        <ListItem alignItems='flex-start'>
                            <ListItemAvatar>
                                <Avatar alt={item.img} src={item.img} />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant='h3' component='div'>
                                    {item.license}
                                </Typography>
                                <Typography variant='subtitle1' component='div'>
                                    {item.company}
                                </Typography>
                                <Typography variant='subtitle2' component='div'>
                                    {`Issued ${item.fullDate}`}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <Divider />
                        </>    
                    )}
                </List>
            )
        case 'skills':
            return (
                <List>
                    {data.map(item => 
                        <>
                        <ListItem alignItems='flex-start'>
                            <ListItemText>
                                <Typography variant='h6' component='div'>
                                    {item.skill}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <Divider />
                        </>    
                    )}
                </List>
            )
        default:
            <List></List>
    }
}

CgList.propTypes = {
    data: PropTypes.obj,
    type: PropTypes.string
}

export default CgList;
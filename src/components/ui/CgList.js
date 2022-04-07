import PropTypes from 'prop-types';
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
                                <Typography variant='body1' component='div' sx={{fontWeight: 'bold'}}>
                                    {item.company}
                                </Typography>
                                <Typography variant='caption' component='div' className='text-gray-500' paragraph>
                                    {item.fullDate}
                                </Typography>
                                {
                                    item.subExperience.map( (subItem,i) => 
                                        <>
                                            <Typography variant='h6' className='pt-0.5'>{subItem.position}</Typography>
                                            <Typography variant='caption' className='text-gray-500' gutterBottom>{subItem.fullDate}</Typography>
                                            {subItem.description.map(subDesc => 
                                                <Typography variant='body2' component='div' className='pt-1'>{subDesc}</Typography>
                                            )}
                                            {(i === item.subExperience.length-1) ? '' : <Divider component="li" className='pb-1'/>}
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
                                <Typography variant='body1' component='div' sx={{fontWeight: 'bold'}}>
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
                                <Typography variant='body1' component='div' sx={{fontWeight: 'bold'}}>
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
    data: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.oneOf(['workExperience','education','licenses','skills'])
}

export default CgList;
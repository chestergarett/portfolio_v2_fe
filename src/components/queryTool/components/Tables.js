import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TableViewIcon from '@mui/icons-material/TableView';
import LoadingSpinner from '../../ui/CgLoadingSpinner';

const Tables = ({data, isLoading}) => {
    return (
        <Grid item xs={12} md={6} className="h-5/6 bg-slate-100">
            { isLoading ? <LoadingSpinner dark/> : <List dense={true}>
                {data[0]?.portfolio.map( item => 
                  <ListItem key={item}>
                  <ListItemIcon>
                    <TableViewIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                  />
                </ListItem>
                )}
            </List>}
        </Grid>
    )
}

export default Tables;
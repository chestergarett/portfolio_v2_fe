import { useState, useEffect } from 'react';
import { db } from '../../../../firebase/config';
import { getPortfolioInfo } from '../../../data/api/portfolio/portfolio';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import CgAvatar from '../../../ui/CgAvatar';

const Project = () => {
    const [portfolio, setPortfolio] = useState(null);
    
    useEffect(() => {
        getPortfolioInfo(db)
            .then(res => setPortfolio(res))
            .catch(err => console.log(err));
    }, []);
    
    return (
        <div class='flex flex-col w-screen'>
            <ListSubheader component="div">Portfolio</ListSubheader>
            <div className="flex flex-row p-2">
                {portfolio ? portfolio.map((item) => (
                    <Card sx={{ marginRight: '0.5rem', marginTop: '0.5rem' }}>
                        <CardMedia
                        component="img"
                        alt={item.title}
                        height="140"
                        image={item.image}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" href={item.project_url} target="_blank">Project Link</Button>
                        <Button size="small" href={item.github_url} target="_blank">Github</Button>
                        </CardActions>
                    </Card>
            )) : ''}
          </div>
        </div>
      );
};

export default Project;

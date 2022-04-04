import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Header from './Header';
import { Link } from '@mui/material';
import { useParams } from 'react-router-dom';

export const BeerCard = (props) => {

    const {beer} = props;
    const { beerId } = useParams();
    
    return (
        <>
        <Link href={"/beers/" + beer._id}>
            <Card sx={{ maxWidth: '100%' }} key={beer._id}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={beer.image_url}
                    alt="Beer Pic"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {beer.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>Tagline: {beer.tagline}</p>
                            
                            <p>Contributed by: {beer.contributed_by}</p>
                            
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
        </>
    )
}
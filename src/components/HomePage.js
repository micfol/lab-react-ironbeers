import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from '@mui/material';
import beersPic from "../assets/beers.png";
import newBeerPic from "../assets/new-beer.png";
import randomBeerPic from "../assets/random-beer.png";

// {href: "/beers", image: beersPic, title: "All Beers"}
function HomePage() {
  return (
    <>
        <Link href="/beers">
          <Card>
          <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={beersPic}
                alt="All Beers"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                All Beers
                </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </Link>

          <Link href="/random-beer">
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={randomBeerPic}
                    alt="Random Beer"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    Random Beer
                    </Typography>
                </CardContent>
            </Card>
          </Link>

          <Link href="/new-beer">
            <Card>
              <CardMedia
                  component="img"
                  height="140"
                  image={newBeerPic}
                  alt="New Beer"
              />
              <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                  New Beer
                  </Typography>
              </CardContent>
            </Card>
          </Link>
    </>
  )
}

export default HomePage
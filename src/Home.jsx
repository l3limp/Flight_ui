import React from "react";
import { Typography, AppBar, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, CardActions } from '@material-ui/core';
import useStyles from './styles';
import FlightIcon from '@material-ui/icons/Flight';
  
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  export default function Home() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative" style = {{backgroundColor: 'coral'}}>
          <Toolbar >
            <FlightIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              SkyStreak
            </Typography>
          </Toolbar>
        </AppBar>
        <main style =  {{backgroundColor: 'burlywood'}}>
          <div className={classes.heroContent}>            
            <Container maxWidth="sm">            
              <Typography component="h1" variant="h2" align="center" style = {{color: '#cd5c5c'}} gutterBottom>
                <FlightIcon style = {{fontSize: '50px', color: '#cd5c5c'}} /> <br/>
                Welome to SkyStreak
              </Typography>
              <Typography variant="h5" align="center" style = {{color: '#2f4f4f'}} paragraph>
                The universe's best site for booking flights and related nonsense
              </Typography>          
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="outlined" style = {{color: '#cd5c5c'}} >
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" style = {{color: '#cd5c5c'}}>
                      Check available seats
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
            {
              cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardHeader}>
                      <Typography gutterBottom variant="h6" component="h2">
                        Mr. Utkarsh Bhardwaj
                      </Typography>
                      <div className = {classes.cardContent}>
                        <Typography style = {{fontSize: '12px', justifyContent: 'flex-start', flex: '1'}}>
                          Flight No: 6E-619
                        </Typography>
                        <Typography style = {{fontSize: '12px', justifyContent: 'flex-end'}}>
                          Gate no: 69
                        </Typography>
                      </div>    
                      <div className = {classes.cardContent} style = {{paddingTop: '3px'}}>
                        <Typography style = {{fontSize: '12px', justifyContent: 'flex-start', flex: '1'}}>
                          From: Delhi
                        </Typography>
                        <Typography style = {{fontSize: '12px', justifyContent: 'flex-end'}}>
                          To: Goa                        
                        </Typography>
                      </div> 
                      <div className = {classes.cardContent} style = {{paddingTop: '20px'}}>
                        <Typography style = {{fontSize: '12px', justifyContent: 'flex-start', flex: '1'}}>
                          Departure: 1210 hrs
                        </Typography>
                        <Typography style = {{fontSize: '12px', justifyContent: 'flex-end' }}>
                          Arrival: 1430 hrs 
                        </Typography>
                      </div>                    
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" style = {{ justifyContent: 'flex-start', flex: '1', paddingLeft: '15px' }}>
                        View
                      </Button>
                      <Button size="small" color="primary" style = {{ justifyContent: 'flex-start', paddingRight: '15px' }}>
                        Choose seat
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
        </Grid>
        </Container>
    </main>
    </React.Fragment>
);
}
import React from "react";
import { Avatar, Button, CssBaseline, TextField, Paper, Link, Grid, Typography} from '@material-ui/core';
import FlightIcon from '@material-ui/icons/Flight';
import useStyles from './styles';

  
  export default function SignInSide() {
    const classes = useStyles();   
  
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style = {{backgroundColor : 'bisque'}}>
          <div className={classes.paper} >
            <Avatar className={classes.avatar} style = {{backgroundColor: 'coral'}}>
              <FlightIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style = {{color: 'coral'}}>
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style = {{backgroundColor: 'indianred', color: 'white'}}
                className={classes.submit}
                >                  
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" style = {{color: 'indianred'}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" style = {{color: 'indianred'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
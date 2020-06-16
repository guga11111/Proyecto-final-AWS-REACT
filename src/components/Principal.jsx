import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body1" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        CookBook
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#ffa040',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const url =  `https://37tpbz4ba8.execute-api.us-east-1.amazonaws.com/prop/api/${username}/${password}`; 

  let history = useHistory();

  const Validacion = async () => {
    axios.get(url).then((response) => {
      // handle success
      console.log('succes',response);
      if (response.data ==='1') {
        alert("Login successful!"); 
        setPassword("");
        setUsername(""); 
        // TODO: limpiar cajas de texto :v
        history.push("/buscarreceta")
       } else {
         alert("Credentials are wrong!"); 
        }
    })
    .catch((error) => {
      // handle error
      alert("Error:", error); 
      console.log('error',error);
    });
  };
  const logo = {
    height:67
  };

  const onChangep = e => setPassword(e.target.value);
  const onChangeu = e => setUsername(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    Validacion();
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <img  style={logo} src="https://i.ibb.co/nbP4Tj9/looogoo.png" alt=""/>
       
          <form onSubmit={onSubmit}>
            <TextField
              value={username} 
              onChange={onChangeu}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="Username"
              name="user"
              autoComplete="user"
              autoFocus
              color="secondary"
            />
            <TextField
              value={password}
              variant="outlined"
              onChange={onChangep}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background: '#ffa040' }}
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
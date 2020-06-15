import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppNavbar from './AppNavbar';
import Footer from './Footer';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    color: theme.palette.text.secondary,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


export default function ComplexGrid() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://5ee6cc4452bb0500161fcff4.mockapi.io/Api').then((response) => {
    console.log('succes ',response.data);
    setData(response.data);
  }).catch((error) => {
    // handle error
    alert("Error:", error); 
    console.log('error',error);
  });
  },[])

  return (
    <div>
      <AppNavbar />
      <div className={classes.root}>
        <React.Fragment>
          <CssBaseline />
          <Grid item>
            <Container maxWidth="sm">
              <img
                className={classes.img}
                alt="complex"
                src="https://previews.123rf.com/images/vaskinamat/vaskinamat1702/vaskinamat170200022/72494424-sport-banner-portada-de-facebook-conjunto-de-bolas-de-deporte-y-art%C3%ADculos-de-juego-en-un-fondo-azul-fo.jpg"
              />
            </Container>
          </Grid>
        </React.Fragment>
        <br />
        <br />
        <div>

     <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>userkey</TableCell>
            <TableCell align="right">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.Userkey }>
              <TableCell component="th" scope="row">
                {row.Userkey }
              </TableCell>
              <TableCell align="right">{row.Url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

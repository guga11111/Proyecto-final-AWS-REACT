  
import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import Paper from '@material-ui/core/Paper';
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
  table: {
    maxWidth: 1500,
    margin: 'auto',
  },
  paper: {
    padding: theme.spacing(5),
    margin: 'auto',
    minWidth: 500,
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

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#AC845B',
    fontSize: 18,
    color: 'white',
    align: 'center'
  },
  body: {
    fontSize: 18
  }
}))(TableCell);


export default function ComplexGrid() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://927fp4oqr0.execute-api.us-east-1.amazonaws.com/prop/api').then((response) => {
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
      <div className={classes.root} class="wrapperfav"> 
      <React.Fragment>
      <CssBaseline />
      <br></br><br></br> 
      <Grid> 
      <Container maxWidth="xl" > 
        <img className={classes.img} alt="complex" src="https://i.ibb.co/3pmvRrp/favoritas.png" /> 
      </Container>
      </Grid>
    </React.Fragment>
      <br/><br/>
      <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow className={classes.row}>
            <StyledTableCell>Receta</StyledTableCell>
            <StyledTableCell align="left">Si quieres ver la receta completa accede al respectivo link</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.NombreReceta }>
              <StyledTableCell fontSize="20"scope="row" width='700px'>{row.NombreReceta} </StyledTableCell>
              <StyledTableCell align="left"> {row.Url}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </TableContainer>
      <div class="push"></div> 
    </div>
    <div>
      <Footer/> 
    </div>
    </div>
  );
}
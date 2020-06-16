import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//import axios from "axios";


export default function NewUser() {
  const logo = {
    height:85
  };
  const textfield = {
    width:190
  }
  const theme = { 
    backgroundColor: "#AC845B", 
    color: "white", 
    width: 300, 
    height: 48, 
  }; 
  

  return (
    <div>
  <AppBar style={{ background: '#ffa040' }} position="static">
  <center>
  <img src="https://i.ibb.co/6vvK7XG/loogoo.png" style={logo} alt=""/> 

  </center>
  </AppBar>
  <center>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  <TextField id="filled-basic" style={textfield}  variant="filled" label="NuevoUsuario" />
  <br/>
  <br/>
  <TextField id="standard-basic" style={textfield}  variant="filled" label="Nombre" />
  <br/> 
  <br/>
  <TextField id="standard-basic" style={textfield}  variant="filled" label="Contraseña"/>

  <br/>
<br/>
<br/>
  <Button variant="contained" size="large" type="submit" value="Search" style={theme}>Crear nuevo usuario</Button>
  </center>
  </div>
 )}

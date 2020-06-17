import React, { useState }  from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';





export default function NewUser() {
  const logo = {
    height:85
  };
  const textfield = {
    width:300
  }
  const theme = { 
    backgroundColor: "#AC845B", 
    color: "white", 
    width: 300, 
    height: 48, 
  }; 

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
  

  const classes = useStyles();


  const [name, setNameUsername] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


    const url =  `https://nwfchqyrce.execute-api.us-east-1.amazonaws.com/prop/api/${username}/${password}/${name}`; 
    let history = useHistory();


    const Validacion = async () => {
      axios.post(url).then((response) => {
        // handle success
        console.log('succes',response);
        if (response.data !== null) {
          alert("Se ha creado con exito la cuenta"); 
          setPassword("");
          setUsername("");
          setNameUsername("");  
          // TODO: limpiar cajas de texto :v
          history.push("/principal")
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

    const onChangep = e => setPassword(e.target.value);
    const onChangeu = e => setUsername(e.target.value);
    const onChangen = e => setNameUsername(e.target.value);
    const onSubmit = e => {
      e.preventDefault();
      Validacion();
    };

  return (
    <div>
  <AppBar style={{ background: '#ffa040' }} position="static">
  <center>
  <Button href="principal"  ><img  style={logo} src="https://i.ibb.co/6vvK7XG/loogoo.png" alt=""/></Button>
  </center>
  </AppBar>
  <br/>
  <Container maxWidth="xl" > 
        <img className={classes.img} alt="complex" src="https://i.ibb.co/Vtqx8Nz/banneruser.png" /> 
      </Container>
  <center>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <form onSubmit={onSubmit}>
  <TextField id="filled-basic" style={textfield} onChange={onChangeu} value={username}  variant="filled" label="NuevoUsuario" />
  <br/>
  <br/>
  <TextField id="standard-basic" style={textfield} value={name} onChange={onChangen}  variant="filled" label="Nombre" />
  <br/> 
  <br/>
  <TextField id="standard-basic" style={textfield} value={password} onChange={onChangep}  variant="filled" label="Contraseña"/>

  <br/>
<br/>
<br/>
<br/>
    <br/>
    <br/>
  <Button variant="contained" size="large" type="submit" value="Search" style={theme}>Crear nuevo usuario</Button>
  </form>

  </center>
  </div>
 )}

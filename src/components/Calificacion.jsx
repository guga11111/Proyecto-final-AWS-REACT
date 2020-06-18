import React from 'react';
import { Provider } from "react-redux"
import store from "./store"
import Estrellas from './Estrellas';
import Seleccion from './Seleccion';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import Container from '@material-ui/core/Container'; 
import "./styles.scss"
  
const img = {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    }

const App = () => (

      <Provider store={store}>
        <center>
        <AppNavbar/>
        <Container maxWidth="xl" >
          <br/>
        <img style={img} alt="complex" src="https://i.ibb.co/ykYzmTS/bannerscore.png" />
      </Container>
        <br></br>
        <br></br>
        <main>
          <h1>¡Califica tu experiencia!</h1>
          <br></br>
          <Estrellas />     
          <Seleccion />
        </main>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       
       
        <div class="pushscore"></div> 
        <Footer/> 
        </center>
      </Provider>
  );
  export default App;

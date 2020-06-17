import React from 'react';
import { Provider } from "react-redux"
import store from "./store"
import Estrellas from './Estrellas';
import Seleccion from './Seleccion';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import Container from '@material-ui/core/Container'; 


import "./styles.scss"



const width = {
  width: 1470
}

const App = () => (
  
       
      <Provider store={store}>
        <center>
        <AppNavbar/>
        <Container maxWidth="xl" >
          <br/>
        <img style={width} alt="complex" src="https://i.ibb.co/ykYzmTS/bannerscore.png" />
      </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <main>
          <h1>¡Califícanos!</h1>
          <Estrellas />
          
          <Seleccion />
        </main>
       
        <div class="push"></div> 
        <Footer/> 
        </center>
      </Provider>

    
  );
  export default App;

       
    

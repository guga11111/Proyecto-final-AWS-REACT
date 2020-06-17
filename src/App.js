import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Principal from './components/Principal';
import BuscarReceta from './components/BuscarReceta';
import RecetaRandom from './components/RecetaRandom';
import RecetaFav from './components/RecetaFav';
import Videos from './components/Videos';
import Health from './components/Health';
import NewUser from './components/NewUser';
import Calificacion from './components/Calificacion';


function App() {

  return (
  <div>
 <Router>
 
   <Switch>
     {/* when user accesses /posts, load PostsList */}
     <Route path="/buscarreceta">
       <BuscarReceta/>
     </Route>
     <Route path="/recetafav">
       <RecetaFav/>
     </Route>
     <Route path="/recetarandom">
       <RecetaRandom/>
     </Route>
     <Route path="/videos">
       <Videos/>
     </Route>
     <Route path="/health">
       <Health/>
     </Route>
     <Route path="/newuser">
       <NewUser/>
     </Route>
     <Route path="/calificacion">
       <Calificacion/>
     </Route>

     {/* when user accesses /principal, load principal */}
     <Route path='/principal'>
       <Principal />
       
     </Route>
     {/* when user accesses EXACTLY /, redirect to /dashboard */}
     <Route exact path='/'>
       <Redirect to='/principal' />
     </Route>
   </Switch>
 
</Router>
</div>

  );
}

export default App;

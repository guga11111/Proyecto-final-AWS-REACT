import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'; 
import { makeStyles } from '@material-ui/core/styles'; 
import Container from '@material-ui/core/Container'; 

const useStyles = makeStyles((theme) => ({ 
  img: { 
    margin: 'auto', 
    display: 'block', 
    maxWidth: '100%', 
    maxHeight: '100%', 
}})); 

const theme = { 
  backgroundColor: "#AC845B", 
  color: "white", 
  width: 80, 
  height: 48, 
}; 
const tamaño = { 
  coloroutlined: "AC845B", 
  color: "AC845B", 
  width: 400, 
  textAlign: "center", 
  fontSize: "h6.fontSize", 
}; 

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No se encontraron recetas con ese nombre");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Se debe llenar el campo para buscar su receta");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };
  const classes = useStyles(); 

  return (
    <div>
      <AppNavbar />
    <div className="App" class="wrapper"> 
    <center> <br></br>
    <Grid> 
      <Container maxWidth="xl" > 
        <img className={classes.img} alt="complex" src="https://i.ibb.co/SJcDdD6/bannerbuscar.png" /> 
      </Container> 
      </Grid> 
    <form onSubmit={onSubmit} className="search-form">
      {alert !== "" && <Alert alert={alert} />} 
      <br></br> 
      <TextField onChange={onChange} style={tamaño} value={query} borderColor="secondary.main" id="filled-basic" label="Buscar platillo" variant="outlined" />  
      <Button variant="contained" size="large" type="submit" value="Search" style={theme}>Buscar</Button> 
        </form>
        <br></br>
    <div className="recipes">
      {recipes !== [] &&
        recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        <div class="push"></div> 
    </div>
    </center>
  </div>
  <div>
      <Footer/> 
    </div>
  </div>
  );
          }
          export default App;

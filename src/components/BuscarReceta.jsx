import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
    const tamaño = {
      width: 80,
      height: 48,
    }

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div>
      <AppNavbar />
    <div className="App">
    <center> <br></br>
        <h1>
          <span>Buscador de recetas</span>
        </h1>
    <form onSubmit={onSubmit} className="search-form">
      {alert !== "" && <Alert alert={alert} />} 
      <TextField  onChange={onChange}  value={query} id="filled-basic" label="Buscar comida" variant="filled" /> 
      <Button variant="contained" size="large" color="primary"  type="submit" value="Search" style={tamaño}>
          Buscar
        </Button>
        </form>
    <div className="recipes">
      {recipes !== [] &&
        recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
    </div>
    </center>
  </div>
  <br></br>
  <br></br>
  <div>
      <Footer/> 
    </div>
  </div>
  );
          }
          export default App;

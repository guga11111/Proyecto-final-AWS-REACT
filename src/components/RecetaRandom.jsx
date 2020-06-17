import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'; 
import Grid from '@material-ui/core/Grid'; 
import { makeStyles } from '@material-ui/core/styles'; 
import Typography from '@material-ui/core/Typography'; 

const useStyles = makeStyles((theme) => ({ 
  img: { 
    margin: 'auto', 
    display: 'block', 
    maxWidth: '100%', 
    maxHeight: '100%', 
}})); 
 

function App() {
  var n = Math.floor((Math.random() * 37) + 1)
  var n2 = Math.floor((Math.random() * 10) + 1)
  var numbers = ["","tacos","tortas","pasta","pizza","manzana","aguacate","pollo","cerdo","arrachera","queso","pie","chocolate","arroz","salchicha","paella","tapas","nachos","cream","arepa","tamales","gorditas","burritos","enchiladas","chilaquiles","chile","caldo","cake","hamburger","japan","nude","fish","potatoes","steak","sushi","rise","red","sandwich","eggs","mole","atun","salad"];
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  var random = numbers[n];

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${random}&from=${n2-1}&to=${n2}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (random !== "") {
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
  const theme = { 
    backgroundColor: "#AC845B", 
    color: "white", 
    width: 300, 
    height: 48, 
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
    <div className="App" class="wrapper2">
    <center> <br></br>
    <Grid> 
      <Container maxWidth="xl" > 
        <img className={classes.img} alt="complex" src="https://i.ibb.co/gMCX2Ny/aleatorio.png" /> 
      </Container> 
      </Grid>
      <Typography class="a" component="h2" gutterBottom> 
      ¿Qué cocino hoy? 
      </Typography> 
      <br></br> 
      <Typography variant="h3" omponent="h2" gutterBottom> 
      Si no sabes qué hacer de comer prueba con esta opción 
      </Typography> 
    <form onSubmit={onSubmit} className="search-form">
      {alert !== "" && <Alert alert={alert} />} 
       <label>
       </label>
       <br></br>
      <Button variant="contained" size="large" color="primary"  type="submit" value="Search" style={theme}>
          Generar
        </Button>
        </form>
        <br></br>
    <div className="recipes2">
      {recipes !== [] &&
        recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
    </div>
    </center>
    <div class="push3"></div> 
  </div>
  <div>
      <Footer/> 
    </div>
  </div>
  );
          }
          export default App;

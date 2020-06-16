import React from "react";
import RecipeDetails from "./RecipeDetails";
import { makeStyles } from '@material-ui/core/styles'
import Popup from "reactjs-popup";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Recipe = ({ recipe }) => {
  const { label, image, url, ingredients } = recipe.recipe;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    media: {
      height: 160,
      width: 350,
      padding: theme.spacing(2),
    },
    blanco: {
      height: 20,
      width: 20,
    },
    espacio: {
    }
  }));
  
   
  const classes = useStyles();

  return (
    
    <div>
&nbsp;
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={20}>
        <Card  className={classes.espacio}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={label}
        />
        <CardContent>
          <Typography variant="h4" component="h3">
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>      
      <a class="button" href={url}>Receta</a>
      <Popup trigger={<button className="buttoning">Ingredientes</button>}  position="right center" size="small">
    <div>
    {<RecipeDetails ingredients={ingredients} />}
    </div>
  </Popup>
  </CardActions>
        </Card>
        </Grid>
        &nbsp;
      </Grid>
    </div>
    &nbsp;
   </div>
  );
};

export default Recipe;

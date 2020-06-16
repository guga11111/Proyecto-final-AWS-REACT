import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import RepeatIcon from '@material-ui/icons/Repeat';
import MovieIcon from '@material-ui/icons/Movie';
import FavoriteIcon from '@material-ui/icons/Favorite'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const logo = {
  height:67
};


export default function AppNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#ffa040' }} position="static">
      
        <Toolbar>
        <Button href="buscarreceta"  ><img  style={logo} src="https://i.ibb.co/6vvK7XG/loogoo.png" alt=""/></Button>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <ButtonGroup size="large" color="secondary" aria-label="large outlined primary button group">
          <IconButton href="recetafav" color="inherit" aria-label="star">
        <StarIcon style={{ fontSize: 30 }}/>
      </IconButton>
      <IconButton href="recetarandom" color="inherit" aria-label="repeat">
        <RepeatIcon style={{ fontSize: 30 }}/>
      </IconButton>
      <IconButton href="videos" color="inherit" aria-label="movie">
        <MovieIcon style={{ fontSize: 30 }}/>
      </IconButton>
      <IconButton href="health" color="inherit" aria-label="favorite"> 
        <FavoriteIcon style={{ fontSize: 30 }}/> 
      </IconButton> 
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}
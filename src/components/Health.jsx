import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { purple } from '@material-ui/core/colors';
import { indigo } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { cyan } from '@material-ui/core/colors';
import { teal } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
import { lime } from '@material-ui/core/colors';
import LinkIcon from '@material-ui/icons/Link';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  avatar2: {
    backgroundColor: pink[500],
  },
  avatar3: {
    backgroundColor: purple[500],
  },
  avatar4: {
    backgroundColor: indigo[500],
  },
  avatar5: {
    backgroundColor: blue[500],
  },
  avatar6: {
    backgroundColor: cyan[500],
  },
  avatar7: {
    backgroundColor: teal[500],
  },
  avatar8: {
    backgroundColor: green[500],
  },
  avatar9: {
    backgroundColor: lime[500],
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <div class="wrapper3">
      <AppNavbar />
      <center>
      <br></br>
      <Grid>
      <Container maxWidth="xl" >
        <img className={classes.img} alt="complex" src="https://i.ibb.co/d5LQ0jX/bannerhealth.png" />
      </Container>
      </Grid>
      <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4">
              <br></br>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}> M </Avatar>
        }
        title="Mascarilla Avena" 
        subheader="Septiembre 14, 2016"/>
      <CardMedia
        className={classes.media}
        image="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/11/mascarillas-de-avena.jpg"
        title="Mascarilla"/>
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
        MASCARILLAS DE AVENA PARA UN CUTIS DE ENSUEÑO
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="link" href="https://www.cocinafacil.com.mx/tips-de-cocina/mascarillas-de-avena/">
          <LinkIcon style={{ fontSize: 30 }} /> Vea más
        </IconButton>   
      </CardActions>  
    </Card>
    </div>
    <div class="col-lg-4">
    <br></br>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar2}> I </Avatar>
        }
        title="Insomnio"
        subheader="Septiembre 10, 2020"/>
      <CardMedia
        className={classes.media}
        image="https://dam.cocinafacil.com.mx/wp-content/uploads/2019/03/insomnio-provoca-sobrepeso4.png"
        title="Insomnio"/>
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
        INSOMNIO PROVOCA SOBREPESO, CONOCE EL ESTUDIO
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="link" href="https://www.cocinafacil.com.mx/tips-de-cocina/salud-y-nutricion/insomnio-provoca-sobrepeso/">
          <LinkIcon style={{ fontSize: 30 }} />  Vea más
        </IconButton>   
      </CardActions>  
    </Card>
    </div>
    <div class="col-lg-4">
    <br></br>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar3}> V </Avatar>
        }
        title="Beneficios Vitamina A"
        subheader="Julio 04, 2018"/>
      <CardMedia
        className={classes.media}
        image="https://dam.cocinafacil.com.mx/wp-content/uploads/2020/06/vitamina-A.jpg"
        title="Vitamina A"/>
      <CardContent>
        <Typography variant="h5" color='textPrimary' component="p">
        BENEFICIOS DE LA VITAMINA A Y EN QUÉ ALIMENTOS LA ENCUENTRAS
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="link" href="https://www.cocinafacil.com.mx/tips-de-cocina/salud-y-nutricion/vitamina-a/">
          <LinkIcon style={{ fontSize: 30 }} />  Vea más
        </IconButton>   
      </CardActions>  
    </Card>
    </div> 
    <br></br>
    <div class="col-lg-4">
      <br/><br/> <br></br>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar4}> B </Avatar>
        }
        title="Beneficios Helado"
        subheader="Dicimebre 29, 2020"/>
      <CardMedia
        className={classes.media}
        image="https://dam.cocinafacil.com.mx/wp-content/uploads/2020/05/beneficios-helado.jpg"
        title="Beneficios"/>
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
        ¿SABÍAS QUE COMER HELADO TIENE SUS BENEFICIOS?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="link" href="https://www.cocinafacil.com.mx/tips-de-cocina/salud-y-nutricion/sabias-que-comer-helado-tiene-sus-beneficios/">
          <LinkIcon style={{ fontSize: 30 }} />  Vea más
        </IconButton>   
      </CardActions>  
    </Card>
    </div>
    <div class="col-lg-4">
      <br/><br/> <br></br>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar5}> C </Avatar>
        }
        title="Contagio Coronavirus"
        subheader="Mayo 05, 2019"/>
      <CardMedia
        className={classes.media}
        image="https://dam.cocinafacil.com.mx/wp-content/uploads/2020/05/coronavirus-comida.jpg"
        title="COVID"/>
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
        ¿EL CORONAVIRUS SE PUEDE CONTAGIAR A TRAVÉS DE LA COMIDA?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="link" href="https://www.cocinafacil.com.mx/tips-de-cocina/salud-y-nutricion/el-coronavirus-se-puede-contagiar-a-traves-de-la-comida/">
          <LinkIcon style={{ fontSize: 30 }} />  Vea más
        </IconButton>   
      </CardActions>  
    </Card>
    </div>
    <div class="col-lg-4">
      <br/><br/> <br></br>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar6}> C </Avatar>
        }
        title="Consumo de carne"
        subheader="Abril 15, 2018"/>
      <CardMedia
        className={classes.media}
        image="https://dam.cocinafacil.com.mx/wp-content/uploads/2020/01/tipos-de-carnes.jpg"
        title="Consumo Carne"/>
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
        EL CONSUMO DE CARNE FORTALECE NUESTRAS DEFENSAS
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="link" href="https://www.cocinafacil.com.mx/tips-de-cocina/salud-y-nutricion/carne-fortalece-nuestras-defensas/">
          <LinkIcon style={{ fontSize: 30 }} />  Vea más
        </IconButton>   
      </CardActions>  
    </Card>
    </div>
    <div class="col-lg-4">
      <br/><br/> <br></br>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar7}> A </Avatar>
        }
        title="Alimentos"
        subheader="Febrero 28, 2020"/>
      <CardMedia
        className={classes.media}
        image="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/09/alimentos-sistema-inmunologico1.jpg"
        title="Alimentos"/>
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
        8 ALIMENTOS QUE REFUERZAN TU SISTEMA INMUNOLÓGICO
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="link" href="https://www.cocinafacil.com.mx/tips-de-cocina/salud-y-nutricion/carne-fortalece-nuestras-defensas/">
          <LinkIcon style={{ fontSize: 30 }} />  Vea más
        </IconButton>   
      </CardActions>  
    </Card>
    </div>
    <div class="col-lg-4">
      <br/><br/> <br></br>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar8}> E </Avatar>
        }
        title="Etiquetado de alimentos"
        subheader="Octubre 02, 2019"/>
      <CardMedia
        className={classes.media}
        image="https://dam.cocinafacil.com.mx/wp-content/uploads/2019/10/etiquetado-frontal.jpg"
        title="Etiquetado de Alimentos"/>
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
        LO QUE TIENES QUE SABER SOBRE EL ETIQUETADO FRONTAL DE ALIMENTOS
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="link" href="https://www.cocinafacil.com.mx/tips-de-cocina/salud-y-nutricion/etiquetado-frontal/">
          <LinkIcon style={{ fontSize: 30 }} />  Vea más
        </IconButton>   
      </CardActions>  
    </Card>
    </div>
    <div class="col-lg-4">
      <br/><br/> <br></br>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar9}> P </Avatar>
        }
        title="Prebióticos y Probióticos"
        subheader="Septiembre 24, 2020"/>
      <CardMedia
        className={classes.media}
        image="https://dam.cocinafacil.com.mx/wp-content/uploads/2019/09/probioticos-prebioticos.jpg"
        title="Prebióticos y Probióticos"/>
      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
        PREBIÓTICOS Y PROBIÓTICOS: ¿QUÉ SON Y CUÁLES SON SUS DIFERENCIAS?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="link" href="https://www.cocinafacil.com.mx/tips-de-cocina/salud-y-nutricion/prebioticos-y-probioticos/">
          <LinkIcon style={{ fontSize: 30 }} />  Vea más
        </IconButton>   
      </CardActions>  
    </Card>
    </div>
      </div>
      </div>
    </center>
    <div class="push2"></div>
    <div>
      <Footer/> 
      </div>
      </div>
  );
        }
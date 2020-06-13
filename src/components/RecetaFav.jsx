import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import AppNavbar from './AppNavbar';
import Footer from './Footer';


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


export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div>
      <AppNavbar />
    <div className={classes.root}>
      <React.Fragment>
      <CssBaseline />
      <Grid item  >
      <Container maxWidth="sm" >
        <img className={classes.img} alt="complex" src="https://previews.123rf.com/images/vaskinamat/vaskinamat1702/vaskinamat170200022/72494424-sport-banner-portada-de-facebook-conjunto-de-bolas-de-deporte-y-art%C3%ADculos-de-juego-en-un-fondo-azul-fo.jpg" />
      </Container>
      </Grid>
    </React.Fragment>
      <br/><br/>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://hazejercicio.com/wp-content/uploads/2018/07/Bolsa-impermeable-deportiva.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Mochila impermeable
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ChibaoMouse
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Negra
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$899.00</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={1}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.tuexperto.com/wp-content/uploads/2015/04/tucano_wristband_01.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Porta Celular Deportivo
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Tucano
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Amarillo/Negro
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$391.00</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/2983835.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Gorra
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Azul
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$550.00</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://blog.linio.com.mx/wp-content/uploads/2019/06/4.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Reloj Deportivo
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Android
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Morado
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1890.00</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://http2.mlstatic.com/guantes-de-arquero-adidas-ace-training-original-talla-9-D_NQ_NP_830494-MPE31255369516_062019-F.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Guantes Portero
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Amarillos
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$499.00</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://i.linio.com/p/d4b9a77cd59e885ab87b15ce4c72befa-catalog.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Cuerdas para saltar
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Rosa
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$200.00</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF5e569HFMQFM5ZBiXR2aWBDya_4R3viPSZoafKQsUEZLRw-w_&usqp=CAU" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Tapete Yoga
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Rosa
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$600.00</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs> 
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://m.media-amazon.com/images/I/51poQPe5u6L.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Toalla Deportiva
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Proworks
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Varios
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$470.00</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.promocionalesexpertos.mx/408-large_default/Cilindro-o-anfora-con-tapa-rosca-de-un-giro-valvula-de-seguridad-Bismark-ANF046.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Bote para Agua
                </Typography>
                <Typography variant="body2" gutterBottom>
                  TupperWare
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Azul
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$119.00</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
        </Grid>
    </div>
    <div>
      <Footer/> 
    </div>
    </div>
  );
}


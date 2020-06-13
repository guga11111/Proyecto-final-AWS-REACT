import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
      <br/>
      <Grid container spacing={1}>
      <Grid item xs={12} >
          <Paper className={classes.paper}>
          <img className={classes.img} alt="complex" src="https://www.crecenegocios.com/wp-content/uploads/2016/03/la-promocion-de-ventas.jpg" />
          </Paper>
        </Grid>
        </Grid>
        <br></br> 
        <br></br> 
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/812655-503-1.jpg?context=bWFzdGVyfGltYWdlc3wzNjgzN3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaDU4Lzg4ODIyMjUzMTU4NzAuanBnfGVkNWNlYzk1OGQ0ZTU2MGQ0OGJlOWNmNjk5MjI0ZWNlOWU3YjcyOTliYzJjNzNjOGMxYTcwNjI2NzliMTMwNGM" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Rosas Tanjun
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Nike
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Mujer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1300</Typography>
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
              <img className={classes.img} alt="complex" src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/449c838942da409f8ba9a97f00d3cffe_9366/Tenis_Runfalcon_Negro_F36199_01_standard.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Negro Runfalcon
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Unisex
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1400</Typography>
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
              <img className={classes.img} alt="complex" src="https://static.netshoes.com.mx/produtos/tenis-puma-retaliate/11/003-6112-111/003-6112-111_zoom1.jpg?" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                 Negros Retaliate
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Puma
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Hombre
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1600</Typography>
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
              <img className={classes.img} alt="complex" src="https://ss203.liverpool.com.mx/xl/1068086176.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Negros Viale
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Nike
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Mujer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1000</Typography>
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
              <img className={classes.img} alt="complex" src="https://www.innvictus.com/medias/IN-AR9293-102-1.jpg?context=bWFzdGVyfGltYWdlc3wzMzc4NHxpbWFnZS9qcGVnfGltYWdlcy9oYjQvaGRmLzkwNDEwMDM0MTM1MzQuanBnfDdhYTQ1OGQwMjk3OWJlN2U2YWM1ZmQ5OWQ5MTg2YmZiMjlhODJkYzhmMjhjOTYyYzI2NzQ5MjViMGQxMTkxZWU" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Rosas Air max 360
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Nike
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Mujer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$3599</Typography>
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
              <img className={classes.img} alt="complex" src="https://static.netshoes.com.mx/produtos/tenis-puma-jaab-xt/53/003-6115-253/003-6115-253_zoom1.jpg?" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                Negro y Turquesa Jaab
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Puma
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Unisex
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$2199</Typography>
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
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/AW4287-1.jpg?context=bWFzdGVyfGltYWdlc3wzNzE5NnxpbWFnZS9qcGVnfGltYWdlcy9oNjcvaDY1Lzg4Nzg0NDIxODQ3MzQuanBnfGExNjBiYTFjYWEyYzNmZGE3OTBiOGFlMWE5YjgzYmMzYjc1ZTFkMzIxZTY0NzhmMDA5ODZkYWU1MTA3MWE2ZDg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Blancos CloudFoam
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Unisex
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1119</Typography>
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
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/IS-EG3667-1.png?context=bWFzdGVyfGltYWdlc3wxMjU1OTV8aW1hZ2UvcG5nfGltYWdlcy9oZWMvaGRmLzkyNTE3NjI3MDAzMTgucG5nfGJjYTkwMWFjNzgyMmFkNjAyMjQ4OGM2YTEzM2EwZmIzZWYxOWI3NTE4MDBkN2ZlOTBmN2NiMTJiOGZlYWQyZTM" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Gris Fluidflow
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 Hombre
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1799</Typography>
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
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/3021225-401-1.jpg?context=bWFzdGVyfGltYWdlc3w0MTIwNnxpbWFnZS9qcGVnfGltYWdlcy9oNDUvaDcyLzg5NzI0MjM0NjI5NDIuanBnfGQ4NDdlMTVjZjBmZmJiODlmNWE1MDUyNTUwOThiMDY2ZGRkY2U5N2Q5MjY2YjAyM2I4YjFlY2NmMWRkZjQ1ODM" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Azul Charged Rogue
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Under Armour
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Unisex
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1999</Typography>
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
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/IS-DV9501-1.jpg?context=bWFzdGVyfGltYWdlc3wzMDkyMnxpbWFnZS9qcGVnfGltYWdlcy9oYTUvaGYyLzkwNTUzMDczMDA4OTQuanBnfGI4NjUyNTNjZmI1NjhjZjcwY2IwZTUyY2IzNWNmMWUzNzZkZTU1ZTBjYjI3MmUzZjdhZDZlMzJhMThlMzc3Y2I" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Negro y verde Interrupted
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Reebok
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Unisex
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$2334</Typography>
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
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/IS-CK6357-700-1.png?context=bWFzdGVyfGltYWdlc3wxNDM0Mjl8aW1hZ2UvcG5nfGltYWdlcy9oZjAvaDQ1LzkyMDA0NjE3NDIxMTAucG5nfGY2ZTk1NTc1YTU4NWY3ZWM4N2FiZGJmMjNlNDE5ZjBjMzMyYjk3NmM3YWI0MWQyM2YzYzc3OWJiOTIwOGE3NjU" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Rosa y verde Renew
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Nike
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 Mujer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1545</Typography>
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
              <img className={classes.img} alt="complex" src="https://www.innovasport.com/medias/IS-EG3670-1.png?context=bWFzdGVyfGltYWdlc3wxMjAzNTl8aW1hZ2UvcG5nfGltYWdlcy9oYTkvaDNjLzkyNTMzNDc2NTU3MTAucG5nfDE0MDY4NDg1MzFjZmY4MmMwZTM0MmZkYzRlY2ZhNzExZDQ1ZDFhYmQ5YTAxMjU4NzQzZWIyZWI0NjZmZmRkNDE" />
            
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Rosa FluidFlow
                </Typography>
                <Typography variant="body2" gutterBottom>
                 Adidas
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Mujer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Añadir al carrito
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$1799</Typography>
            </Grid>
          </Grid>
        </Grid>
          </Paper>
        </Grid>
      </Grid>
      <br></br>  
      <br></br> 
    </div>
    <div>
      <Footer/> 
    </div>
    </div>
  ); 
}
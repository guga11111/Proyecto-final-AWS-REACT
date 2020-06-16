import React from 'react';
import ReactPlayer from 'react-player'
import Toolbar from '@material-ui/core/Toolbar';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import Container from '@material-ui/core/Container'; 
import Grid from '@material-ui/core/Grid'; 
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({ 
  img: { 
    margin: 'auto', 
    display: 'block', 
    maxWidth: '100%', 
    maxHeight: '100%', 
}})); 

export default function Dashboard() {
  const classes = useStyles(); 
    return (
      <div>
      <AppNavbar />
      <div>
        <br/>
        <center>
          <Grid>
            <Container maxWidth="xl" > 
            <img className={classes.img} alt="complex" src="https://i.ibb.co/S6BG09F/video.png" /> 
            </Container> 
          </Grid> 
          <br/>
          <br/>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4">
              <Toolbar> 
              <ReactPlayer url='https://www.youtube.com/watch?v=iII-V7KfIm8' className='react-player'/> 
              </Toolbar>
            </div>

            <div class="col-lg-4">
              <Toolbar>
              <ReactPlayer url='https://www.youtube.com/watch?v=oQgDCsPDoG0' className='react-player'/> 
              </Toolbar>
            </div>

            <div class="col-lg-4">
              <Toolbar>
              <ReactPlayer url='https://youtu.be/Npb0C_DHEo4' className='react-player'/> 
              </Toolbar> 
            </div>
            
            <div class="col-lg-4">
            <br/><br/> <br></br>
              <Toolbar>
              <ReactPlayer url='https://www.youtube.com/watch?v=sRmmQBBln9Q' className='react-player'/> 
              </Toolbar> 
            </div>

            <div class="col-lg-4">
            <br/><br/> <br></br>
              <Toolbar>
              <ReactPlayer url='https://www.youtube.com/watch?v=KkflNZ2qwLg' className='react-player'/> 
              </Toolbar> 
            </div>

            <div class="col-lg-4">
            <br/><br/> <br></br>
              <Toolbar>
              <ReactPlayer url='https://www.youtube.com/watch?v=fX5SI-kncOA' className='react-player'/> 
              </Toolbar> 
            </div>

          </div>
        </div> 
        <br/> <br/>
        </center> 
      </div>
      <br/><br/>
      <div>
      <Footer/> 
      </div>
      </div>
    );
}
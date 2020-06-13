import React from 'react';
import ReactPlayer from 'react-player'
import Toolbar from '@material-ui/core/Toolbar';
import AppNavbar from './AppNavbar';
import Footer from './Footer';

const player = {
  width:'100%',
  height:'350px'
};

const imagen1 = {
  height:74
};

export default function Dashboard() {
    return (
      <div>
      <AppNavbar />
      <div>
        <br/>
        <center>
          <img style={imagen1} src="https://i.ibb.co/S6BG09F/video.png" alt=""/>
        <br/>
        <br/>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4">
              <Toolbar> 
              <ReactPlayer style={player} url='https://www.youtube.com/watch?v=iII-V7KfIm8' className='react-player'/>
              </Toolbar>
            </div>

            <div class="col-lg-4">
              <Toolbar>
              <ReactPlayer style={player} url='https://www.youtube.com/watch?v=sRmmQBBln9Q' className='react-player'/>
              </Toolbar>
            </div>

            <div class="col-lg-4">
              <Toolbar>
              <ReactPlayer url='https://www.youtube.com/watch?v=KkflNZ2qwLg' className='react-player'/>
              </Toolbar> 
            </div>
            
            <div class="col-lg-4">
            <br/><br/> <br></br>
              <Toolbar>
              <ReactPlayer url='https://www.youtube.com/watch?v=E_qLMOf9lDs' className='react-player'/>
              </Toolbar> 
            </div>

            <div class="col-lg-4">
            <br/><br/> <br></br>
              <Toolbar>
              <ReactPlayer url='https://www.youtube.com/watch?v=fX5SI-kncOA' className='react-player'/>
              </Toolbar> 
            </div>

            <div class="col-lg-4">
            <br/><br/> <br></br>
              <Toolbar>
              <ReactPlayer url='https://www.youtube.com/watch?v=oQgDCsPDoG0 ' className='react-player'/>
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
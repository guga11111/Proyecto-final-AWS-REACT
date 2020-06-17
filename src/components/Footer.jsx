import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
      flexGrow: 1,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    appBar: {
      position:'sticky',
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
    stile: {
  
    }
  }));
  const logo = {
    height:100
  };
  
  const abajo = {
    height:70
  }
  
  const avatar = {
    height:50,
    width:50
  };

  export default function AppNavbarFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
<AppBar style={{ background: '#ffa040' }}  className={classes.appBar}>
  <Toolbar>
  <img  style={logo} src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.15752-9/92830141_446428632833448_8294136053976006656_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=tDgy9ZRSagMAX-hRBbX&_nc_ht=scontent.fcvj1-1.fna&oh=e7a9e3cc014de1a481aa7201b555eb75&oe=5EBFF458" alt=""/>
  <h1>Integrantes </h1>
  <img style={abajo} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>
  <List dense className={classes.root}>{
          <ListItem  >
            <ListItemAvatar>
              <Avatar
                alt="Andrea"
                style={avatar}
                src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/83197193_1460563444100375_2963617834711646208_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeG72v7hUYbhpLo6gbTWoUnMSlH_wJnhSs1KUf_AmeFKzd-xdofEZTttZsl9FEDhxS4h2HI0Qk5Upu0ipkZ3kHsE&_nc_ohc=-nfd1aFeklwAX8wDNf3&_nc_ht=scontent-qro1-1.xx&oh=d8da65a11c97bf3513c8fdb5534e8b1f&oe=5F000C76"
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">Andrea Pérez</Typography>
              <Typography variant="h5">67901</Typography>
              </ListItemText>
            <img style={abajo} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>

            <ListItemAvatar>
              <Avatar
                alt="Diego"
                style={avatar}
                src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/44778780_387215638775836_2251339771148238848_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeGy18OtcsOS-pBRYKeI2nqIa9ASWclncWBr0BJZyWdxYPqdtyC4d5b407dsVefHaJnEfpe_bUYfgDNLweYwEr8R&_nc_ohc=X7oheYK3zhoAX-lUDDp&_nc_ht=scontent-qro1-1.xx&oh=4aa568a99b4a82b0b4b18f561f20f35a&oe=5F0315F3"
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">Diego Cacho</Typography>
              <Typography variant="h5">69553</Typography>
              </ListItemText>
            <img style={abajo} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>
           
            <ListItemAvatar>
              <Avatar
                alt="Felix"
                style={avatar}
                src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/97399801_2967737799971675_1078071868293906432_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeHH8cdp283dhtV9-LZiViuOqj7qSRzWk_CqPupJHNaT8M37zhyg-5g-0ecSpb6J4SU2FOA7u4Bj0PVYRG0GamhT&_nc_ohc=FsCHHW9MFRQAX-w1Mgy&_nc_ht=scontent-qro1-1.xx&oh=c73c8f847b56044e666fe545830c7e4f&oe=5EFFF3A8"
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">Félix Cárdenas</Typography>
              <Typography variant="h5">68247</Typography>
              </ListItemText>
            <img style={abajo} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""
              />

            <ListItemAvatar>
              <Avatar
                alt="Guga"
                style={avatar}
                src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/69365165_2598924916839240_3961075735250075648_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeFcFtMa6trC7UWOhqDJb6dQYjzRy4HFqphiPNHLgcWqmAAvT1IGjILVs-_u3UdgKhVGA1ThN-erraFOco3-D-_Y&_nc_ohc=0dcmueyY40MAX__nVEx&_nc_ht=scontent-qro1-1.xx&oh=85c7b429325649b335a57aad56aba974&oe=5F0083B4"
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">Gustavo Núñez</Typography>
              <Typography variant="h5">68643</Typography>
              </ListItemText>
            <img style={abajo} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljNjRjZmUzLWJiM2ItNGFlOC1iNWE2LWQyZjM5ZDIxZmY4N1wvZDNqbWU2aS04YzcwMmFkNC00YjdhLTQ3NjMtOTkwMS05OWY4YjRmMDM4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oQC1FIUxsmeyLHm6qNdoRb8wzoMdKI1p49kNBstoU-w" alt=""/>


            <ListItemAvatar>
              <Avatar
                alt="Yose"
                style={avatar}
                src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/92339598_2876036915766502_4305684180001357824_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeHTyXdB4AKz1oVSMOiyylJLuI-36g4CIry4j7fqDgIivHailwlImBdV81nBUbpdyCSefxJzwIWTbzsRY9ENEkty&_nc_ohc=kdn5HM2xvt8AX9HSeQv&_nc_ht=scontent-qro1-1.xx&oh=0274b0375fc4344050f71d70654605f9&oe=5F006727"
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">Yoseline Pérez</Typography>
              <Typography variant="h5">69167</Typography>
              </ListItemText>
            </ListItem>
      }
    </List>
  </Toolbar>
</AppBar>
</div>

  );
}

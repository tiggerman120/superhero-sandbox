import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import picture from './assets/lotrPic.jpg'
// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Favorites from './components/favorites';
// import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Characters from './components/characters/characters';
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import classes from '*.module.css';

console.log(picture);
function App() {

  return (
    <Router>
      <Route path='/'>
        <div className="App">
          {/* //THE HEADER IS HERE */}

          <Container maxWidth='md'>
            <Header />
          </Container>

          <Container maxWidth='md'>
            <Grid spacing={5} alignItems="stretch">
              <Grid xs={12}>
                <Card>
                  <CardHeader />
                  <CardContent>
                    <Nav />

                    <Route exact path='/'> 
                    <Main />
                    <Characters />
                    </Route>
                    
                    <Switch>
                      <Route exact path='/favorites' component={Favorites}> 
                    </Route>
                    </Switch>
                    <Favorites />

                    <Route exact path='/characters'>
                      <Characters />
                    </Route>

                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
            {/* <img src={picture} alt="lotr-picture"></img> */}
          <Footer />
        </div>
      </Route>
    </Router>
  );
}

export default App;

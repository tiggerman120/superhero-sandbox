import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Favorites from './components/favorites';
import logo from './logo.svg';
import './App.css';
import Main from './components/main';
<<<<<<< HEAD
import Test from './components/test';
=======
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> ace4e406123ea68209864c64da9b4da3122b88ba

function App() {

  return (
<<<<<<< HEAD
    <>
    <Main />
    <Test/>
    </>
=======
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
                    </Route>
                    
                    <Route exact path='/favorites'> 
                    <Favorites />
                    </Route>

                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </div>
      </Route>
    </Router>
>>>>>>> ace4e406123ea68209864c64da9b4da3122b88ba
  );
}

export default App;

import React from 'react'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

function Nav() {

    return (
<Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6">
          <Button href="/" color="inherit">HOME</Button>
          <Button href="/race" color="inherit">race</Button>
          <Button href="/gender" color="inherit">gender</Button>
          <Button href="/favorites" color="inherit">favorites</Button>
  </Typography>
        </Toolbar>
      </AppBar>
      {/* <button onClick={() => { */}
        {/* // clickHandler() */}
      {/* }}>characters</button> */}
      </Container>
    )}

export default Nav; 
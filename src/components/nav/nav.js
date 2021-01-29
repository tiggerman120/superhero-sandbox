import React from 'react'
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { changeCategory } from '../../store/actions/the-one-actions';
const mapDispatchToProps = { changeCategory }


function Nav(props) {
  const clickHandler= (e) => {
    console.log(e)
    props.changeCategory(e.currentTarget.value)
  }

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6">
            <Button href="/" color="inherit">HOME</Button>

            <Button onClick={(e) => {clickHandler(e)}}  value="Male" color="inherit">Male</Button>
            <Button onClick={(e) => {clickHandler(e)}}  value="Female" color="inherit">Female</Button>
            <Button href="/favorites" color="inherit">favorites</Button>

          </Typography>
        </Toolbar>
      </AppBar>
      {/* <button onClick={() => { */}
      {/* // clickHandler() */}
      {/* }}>characters</button> */}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.characters.category,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
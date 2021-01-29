import React from 'react'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

function Main(props) {
  //   function clickhandler() {

  // }
  return (
    <Container>
      <Typography variant="p">
        click on the navigation buttons to filter your selection by the corresponding{<br />}
        you will navigate to the corresponding component and see your results{<br />}
        you can add your selection to your favorites{<br />}
        on the favorites page you can add notes or additional info to your selections{<br />}
        you can also remove a favorite with the remove button{<br />}

    </Typography>
    </Container>

  )
}

export default Main;
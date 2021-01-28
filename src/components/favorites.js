import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Switchboard, { addToFavorites } from '../store/actions/the-one-actions'

const mapDispatchToProps = { addToFavorites };


const Favorites = (props) => {
  console.log(props)

  let clickHandler = (character) => {
    props.addToFavorites(character)
  }
    return (
        <Container>
          {props.characters ? props.characters.map((character, idx) => {
            <Container key={idx}>

              {character.name}
              <Button onClick={() => {
                clickHandler(character)
              }}>Add to Favorites</Button>
            </Container>

          })
        :
        null
        }
            <Typography variant="h5">
                
        </Typography>

        </Container>
    );
} 

const mapStateToProps = state => {
  return {
    characters: state.Switchboard.characters,
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
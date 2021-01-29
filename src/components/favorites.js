import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { addToFavorites } from '../store/actions/the-one-actions';
import { addCharacter, deleteCharacter, getAction, showAll } from '../store/actions/fav-actions';


const Favorites = (props) => {

  let clickHandler = (character) => {
    props.addToFavorites(character)
  }
  console.log(props.favorites)
    return (
        <Container>
          {props.favorites.favorites ? props.favorites.favorites.map((character, idx) => {
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
    // characters: state.characters.all,
    favorites: state.favorites,
    
  }
}

const mapDispatchToProps = dispatch => ({
  addCharacter: (name) => {
    dispatch(addCharacter(name))
  },
  showAll: (character) => {
    dispatch(showAll(character))
  },
  deleteCharacter: (gender) => {
    dispatch(deleteCharacter(gender))
  },
  getAction: (race) => {
    dispatch(getAction(race))
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
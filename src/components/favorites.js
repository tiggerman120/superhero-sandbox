import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


import { addToFavorites } from '../store/actions/the-one-actions';
import { addCharacter, deleteCharacter, getAction, showAll } from '../store/actions/fav-actions';



const Favorites = (props) => {

  let clickHandler = (character) => {
    console.log(character);
    props.addToFavorites(character)
  }

  const load = () => {
    props.getAction()
  }

  useEffect(load, [])
  
  console.log(props.favorites)
    return (
        <Container>
          {props.favorites.favorites ? props.favorites.favorites.map((character, idx) => (
            <Container key={idx}>
              {character.name}
              <Button onClick={() => {
                clickHandler(character)
              }}>Remove From Favorites</Button>
            </Container>

          ))
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
  deleteCharacter: (name) => {
    dispatch(deleteCharacter(name))
  },
  getAction: () => {
    dispatch(getAction())
  },
  addToFavorites: (name) => {
    dispatch(addToFavorites(name))
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
import { useEffect } from "react";
import { connect } from "react-redux";
import { getAction, showAll } from '../../store/actions/the-one-actions';
import { addCharacter } from '../../store/actions/fav-actions';
import { get } from '../../store/reducers/the-one';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const mapDispatchToProps = { getAction, showAll, get, addCharacter }

function Characters(props) {
  
 
  const clickHandler = (character) => {
    console.log(character)
    props.addCharacter(character);
  }
  const fn = () => {
    props.get()
  }

  useEffect(() => {
    fn()
  }, [])
  
  return (
    
    <Container className={'class'}>
      {props.characters ? (
        props.characters
        .filter(character => {
          return props.active ? character.gender === props.active : character
        })
        .map((character, idx) => (
          <Container key={idx}>
            {character.name}<br />
            {character.race}<br />
            {character.gender}<br />
            <a href={character.wikiUrl}>{character.name} wiki page</a><br />
            <Button onClick={() => {
              clickHandler(character)
              console.log(`click event happening`)
            }}>add to favorites</Button><br /><br />

            {console.log(props)}
          </Container>
        ))
      )
    ://theres a colon here
    null
    }
      {
      }

    </Container >
  )
  }


const mapStateToProps = state => {
  return {
    characters: state.characters.all,
    active: state.characters.category,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Characters);
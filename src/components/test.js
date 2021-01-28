import { useEffect } from 'react';
import {get} from '../store/reducers/the-one';
import {connect} from 'react-redux';

const mapDispatchToProps = {get};

const mapStateToProps = state => ({
    characters: state.characters.lotr
})


const Test = props => {


    const loadChars = () => {
        props.get();
    }

    useEffect(loadChars,[]);


    return (
        <p>Proof of Life!!!</p>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Test);
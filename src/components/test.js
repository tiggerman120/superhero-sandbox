import { useEffect, useState } from 'react';
import {get} from '../store/reducers/the-one';
// import {nextPage} from '../store/reducers/paginate'
import {connect} from 'react-redux';

const mapDispatchToProps = {get};

const mapStateToProps = state => ({
    characters: state.characters
    // paginate: state.paginate
})


const Test = props => {


    const loadChars = async () => {
        await props.get();
    }

    // const forward = (payload) => {
    //     nextPage(payload)
    // }

    useEffect(loadChars,[]);


    return (
        <div>
            <p>Proof of Life!!!</p>
            {/* {console.log('on page', props.paginate.page)} */}
            {console.log('charaacters', props.characters.all)}        
            {/* <button onClick={() => forward(props.characters.all)}>Next</button> */}
        </div>
        
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Test);
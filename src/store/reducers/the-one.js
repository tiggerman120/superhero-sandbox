import superagent from 'superagent';
let initialState = {"lotr": []};

require('dotenv').config();

let url = 'https://the-one-api.dev/v2/character';
const AUTH = process.env.REACT_APP_AUTH;

// import actions
// import {getAction} from '../actions/the-one-actions.js';


export const get = () => dispatch => {
    console.log('auth', AUTH);
    return superagent
      .get(url)
      .set('Authorization', 'Bearer ' + AUTH)
      .then(response => {
          let data = response.body.docs;
          console.log(data)
        // dispatch(getAction(JSON.parse(response.text)))
      })
    }


    export default (state=initialState, action) => {
        let {type, payload} = action;
        switch(type) { 
            case 'GET':
                return{...state, lotr: payload}

            default: 
                return state;
        }
    }
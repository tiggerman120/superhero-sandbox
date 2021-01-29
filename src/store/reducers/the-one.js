import superagent from 'superagent';

// import actions
import { getAction } from '../actions/the-one-actions.js';
import { nextPage } from '../reducers/paginate' 

require('dotenv').config();

let initialState = {
  "all": [],
  "category": '',
};

let url = 'https://the-one-api.dev/v2/character?limit=20';
const AUTH = process.env.REACT_APP_AUTH;



export const get = () => dispatch => {
    return superagent
      .get(url)
      .set('Authorization', 'Bearer ' + AUTH)
      .then(response => {
        let data = response.body.docs;
        dispatch(getAction(data))
      })
    }


    // eslint-disable-next-line import/no-anonymous-default-export
    export default (state=initialState, action) => {
        let {type, payload} = action;
        switch(type) { 
            case 'GET':
                console.log('GET payload to nextPage', payload);
                nextPage(payload);
                return{...state, all: payload}

                case 'CHANGE-CATEGORY':
                  console.log(payload);
                  return{...state, category:payload}
            default: 
                return state;
        }
    }
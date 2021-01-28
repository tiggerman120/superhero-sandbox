import {createStore, combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// middleware
import thunk from 'redux-thunk';

// reducers 
import characters from './reducers/the-one'


// combine reducers
let reducers = combineReducers({characters});


// store
const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();
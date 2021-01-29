import {createStore, combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import favorites from './reducers/favorites';

// middleware
import thunk from 'redux-thunk';

// reducers 
import characters from './reducers/the-one'
// import paginate from './reducers/paginate'


// combine reducers
let reducers = combineReducers({characters, favorites});


// store
const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();
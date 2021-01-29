import {createStore, combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// middleware
import thunk from 'redux-thunk';

// reducers 
import favs from './reducers/favorites';
import characters from './reducers/the-one'
// import paginate from './reducers/paginate'


// combine reducers
let reducers = combineReducers({characters, favs});


// store
const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();
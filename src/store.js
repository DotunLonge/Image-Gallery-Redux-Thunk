import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = (initialState)=>{
    return createStore(reducers, initialState, applyMiddleware(thunk))
}

export default store;
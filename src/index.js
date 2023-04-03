import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'

// const logger = function({dispatch, getState}){
//     return function(next){
//         return function(action){
//             next(action)
//         }
//     }
// }

const logger = ({ dispatch, getState}) => (next) => (action) => {
    if(typeof action !== 'function') {
        console.log("function")
    }
    next(action);
}

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//     if(typeof action === 'function'){
//         action(dispatch);
//         return;
//     }
//     next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);

// console.log('before', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman '}]
// });

// console.log('after', store.getState());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';

// const logger = function({dispatch, getState}){
//     return function(next){
//         return function(action){
//             next(action)
//         }
//     }
// }

const logger = ({ dispatch, getState}) => (next) => (action) => {
    next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('store', store);

// console.log('before', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman '}]
// });

// console.log('after', store.getState());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
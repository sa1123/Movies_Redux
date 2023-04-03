import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log('store', store);
// console.log('before', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman '}]
// });

// console.log('after', store.getState());

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
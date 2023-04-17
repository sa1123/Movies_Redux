import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// const logger = function({dispatch, getState}){
//     return function(next){
//         return function(action){
//             next(action)
//         }
//     }
// }

const logger = ({ dispatch, getState}) => (next) => (action) => {
    // if(typeof action !== 'function') {
    //     console.log("function")
    // }
    next(action);
};

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//     if(typeof action === 'function'){
//         action(dispatch);
//         return;
//     }
//     next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log('store', store);

// export const StoreContext = createContext();

// console.log('before', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman '}]
// });

// console.log('after', store.getState());

// class Provider extends React.Component{
//     render(){
//         const {store} = this.props;
//         return (
//             <StoreContext.Provider value={store}>
//                 {this.props.children}
//             </StoreContext.Provider>
//         )
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
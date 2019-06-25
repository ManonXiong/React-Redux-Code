import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));


//Notes about Redux-Thunk:
//Point 1: Redux Cycle
//If a middleware is applied, the cycle is: Action Creator -> Actions -> Dispatch -> Middleware -> Reducer -> State
//From calling an action creator to be dispatched in a reducer, just a millisecond is consumed.
//So even dropping 'async..await' syntax, the error message disappeared, but it's not what we want. We get no data.

//Point 2: Middleware
//Middleware is a function that gets called with every action we dispatch
//It has the ability to STOP, MODIFY, or otherwise mess around with actions
//Tons of open source middleware exist. One popular use of middleware is for dealing with async actions

//Point 3: What does Redux-Thunk do?
//Rules of Thunk: action creators can return either action objects or functions.
//If a function is returned, Thunk will invoke that function automatically. --> with Thunk, action creator can return a function
//Thunk accepts something from the dispatch and decides what to do: actions? pass to reduers: invoke this function
//If it's a function, Thunk pass 'dispatch' and 'getState' s params to this returned function.
//Wait the request returned from API, and we can dispatch action MANUALLY. A new action is returned and thrown to Dispatch.
//Dispatch passses this new action to Thunk, and Thunk(middleware) checks again.
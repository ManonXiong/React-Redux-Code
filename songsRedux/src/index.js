import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    //The store data and state are passed as props to Provider component.
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>, 
    document.querySelector('#root'));
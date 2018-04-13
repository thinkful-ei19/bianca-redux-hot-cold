import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store';

import {submitGuess, restart, auralUpdate} from './actions';

store.dispatch(submitGuess(80))
console.log(store.getState());
store.dispatch(submitGuess('hi'))
console.log(store.getState());
store.dispatch(restart());
console.log(store.getState());
store.dispatch(auralUpdate());
console.log(store.getState());


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);



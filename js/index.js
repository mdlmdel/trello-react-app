require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';
import Board from './components/Board';

const lists = ['Title 1', 'Title 2', 'Title 3', 'Title 4']
// This is the starting point of React
render(
  <Board title="Trello App" listsTitle={lists} />, 
  document.getElementById('app')
);
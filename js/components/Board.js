import React from 'react';
import List from './List';

// {Title} is an example of destructuring in ES6
export default function Board({ title, listsTitle }) {
  return (
    <div>
    <h3>{title}</h3>
      {listsTitle.map((listTitle, i) => (
        <List title={listTitle} key={i} />
      ))} 
    </div>
  )
}
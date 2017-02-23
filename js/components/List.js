import React from 'react';
import Card from './Card';

export default function List({title}) {
  return (
    <div>
    <h4>{title}</h4>
      <Card /> 
      <Card /> 
      <Card /> 
    </div>
  )
}
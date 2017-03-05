// All of this is a container (i.e., not a dumb component)
import React, { Component } from 'react';
import Card from './Card';

// Take the class component coming from React and 
// extend it --> OOP
// Everything with a class needs to be uppercase
// Keep every component uppercase to prepare for this
// Everything else in JS should be lowercase
class List extends Component {
  constructor(){
    super();
    this.state = {
      text: "", 
      cards: []
    }
  }

  _onChangeText = e => {
    this.setState({
      text: e.target.value
    })
  }
  _onSubmitForm = e => {
    e.preventDefault();
    this.setState({
      cards: [...this.state.cards, this.state.text], 
      text: ""
    })
  }
  render() {
    console.log(this.props);
    return (
    <div>
      <h4>{this.props.title}</h4>
      {this.state.cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
      <form onSubmit={this._onSubmitForm}>
        <input 
          placeholder="Add a new card" 
          value={this.state.text}
          onChange={this._onChangeText}
        />
      </form>
    </div>
  )
  }
}

export default List;
import React, { Component } from 'react';
import './App.css';
import Snacks from "./Components/Snacks/Snacks";
import SnacksMenu from "./Components/SnacksMenu/SnacksMenu";

import hamburger from './Images/hamburger.png'
import cheeseburger from './Images/cheeseburger.png'
import fries from './Images/fries.png'
import coffee from './Images/coffee.png'
import tea from './Images/tea.png'
import cola from './Images/cola.png'

export const SnacksList = [
  {name: 'Hamburger', price: 80, image: hamburger},
  {name: 'Cheeseburger', price: 90, image: cheeseburger},
  {name: 'Fries', price: 45, image: fries},
  {name: 'Coffee', price: 70, image: coffee},
  {name: 'Tea', price: 50, image: tea},
  {name: 'Cola', price: 40, image: cola}
];

class App extends Component {
  state = {
    snacks: [
      {name: 'Hamburger', count: 0},
      {name: 'Cheeseburger', count: 0},
      {name: 'Fries', count: 0},
      {name: 'Coffee', count: 0},
      {name: 'Tea', count: 0},
      {name: 'Cola', count: 0}
    ]
  };

  decrease = index => {
    let snacks = [...this.state.snacks];
    let snack = {...snacks[index]};
    snack.count = 0;
    snacks[index] = snack;
    this.setState({snacks});
  };

  addClick = index => {
    let snacks = [...this.state.snacks];
    let snack = {...snacks[index]};
    snack.count ++;
    snacks[index] = snack;
    this.setState({snacks});
  };



  render() {
    let total = 0;
    for (let i = 0; i < this.state.snacks.length; i++) {
      total = total + (SnacksList[i].price * this.state.snacks[i].count) * 1.05;
    }
    return (
        <div className='App'>
          <Snacks
              snacks={this.state.snacks}
              remove={this.decrease}
              total={total}
          />
          <SnacksMenu
              snacks={this.state.snacks}
              addClick={this.addClick}
          />
        </div>
    )
  }
}

export default App;

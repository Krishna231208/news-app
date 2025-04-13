import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './component/navbar'; // Corrected
import News from './component/News';

export default class App extends Component {
  state = {
    category: 'general'
  };

  changeCategory = (newCategory) => {
    this.setState({ category: newCategory });
  };

  render() {
    return (
      <div>
        <Navbar changeCategory={this.changeCategory} />
        <News category={this.state.category} pageSize="6" />
      </div>
    );
  }
}
 

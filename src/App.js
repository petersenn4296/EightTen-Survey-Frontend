import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import 'react-materialize'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <LoginForm/>
      </div>
    );
  }
}

export default App;

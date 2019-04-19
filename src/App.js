import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Dashboard/>
          <Form/>
          <Header/>
        </header>
      </div>
    );
  }
}

export default App;

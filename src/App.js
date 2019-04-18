import React, { Component } from 'react';
import './App.css';
import MyNav from './MyNav';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
    <div className="App" >
      
      <Header />
      <Footer />
      <MyNav />
      </div>
    );
  }
}

export default App;

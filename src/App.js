import './App.css';
import React, { Component } from 'react'
import LogoutButton from './component/Logout';
import Profile from './component/Profile';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';



export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LogoutButton />
        <Profile />
       
      </div>
    )
  }
}

export default App
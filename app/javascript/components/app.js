"use strict"

import React, { Component, useState, useEffect }  from "react";
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import { Router } from "@reach/router";
import UserList from "./UserList/user-list";
import './style.scss';
import Login from "./Login/login"
import Navbar from "./Navbar/navbar"
import left_backgroud from '../../assets/images/david-emrich-sOtX6xo0njE-unsplash.jpg'

/**
 * <Router>
          <UserList path="/" />
          <Login path="/login" />
        </Router>
 */
class App extends Component {
  constructor(){
    super()
    console.log("App js constructor")
    console.log(localStorage.getItem("token"), typeof localStorage.getItem("token"))
    if (localStorage.getItem("token") != "undefined" && localStorage.getItem("token") != undefined) {
      fetch(`api/login`, {
        headers: {"Authenticate": localStorage.token}
      })
      .then(res => res.json())
      .then(user =>{
        setUser(user)
      })
    }
    
  }

  componentDidMount() {   
    console.log("Component did mount appjs") 
    
    //document.title = `You clicked ${this.state.count} times`;
  }

  handleLogout(){
    setUser({})
    localStorage.removeItem("token")
  }
  render() {
    
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path="/">
              <UserList />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
        <div className="background">
          <img src={left_backgroud} />
          <div className="left-large ">
            
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}
/**
 * <div class="left-large">
            
          </div>
          <div class="right-large">
            
          </div>
 */
export default App;

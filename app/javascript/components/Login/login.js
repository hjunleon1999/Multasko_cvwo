import React, { useEffect, useState } from "react";
import './login.scss'
import {setUser} from '../../services/core-utils'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      user: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
    render() {
      //<!--<button className = "login-menu__submit confirm">Log In</button>
      return (
        <div className="login-section">
          <form id = "login-form" onSubmit = {(e) => this.handleLogin(e)}>
            <div className = "login-menu">
              <h1 className = "login-menu__title">
                Log in to Multasko           
              </h1>
              <div className = "login-menu__credentials">
                <div id = "user-entry">
                  <input value={this.state.email} onChange={this.handleInputChange} type="text" name="user" data-id="user" className="form-field" autoCorrect="off" spellCheck="false" autoCapitalize="off" autoFocus="autofocus" placeholder="Enter email"  autoComplete="username" inputMode="email" />
                </div>
                <div id = "password-entry">
                  <input value={this.state.password} onChange={this.handleInputChange} type="password" name="password" data-id="password" className="form-field" placeholder="Enter password" autoComplete="current-password" />
                </div>
                <input id="login" type="submit" className="button width-100-percent button-green" value="Log in"></input>
                
              </div>
            </div>
          </form>
        </div>
        
      );
    }

    handleInputChange(event) {
      const target = event.target;
      //console.log(target)
      const dataAttrs = target.dataset
      if ("id" in dataAttrs){
        const value = target.value//target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
          [name]: value
        });
      }
    }

    handleLogin(e){
      console.log(e)
      console.log(this)
      e.preventDefault()
      const {user, password} = this.state
      console.log(`${password} vs ${user}`)
      fetch(`api/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: user, password: password})
      }).then(res => res.json()).then(
        data => {
          console.log(data)
          if (data.token != undefined){
            console.log("SUCCESSLOGIN")
            localStorage.setItem("token", data.token)
            setUser(data.user)
          }
        }
      )
    }

    /*
    setUser(user){
      console.log(user)
      //to-add a redux state updater
    }*/
  }
  
  export default Login

import React, { useEffect, useState } from "react";
import './login.scss'

class Login extends React.Component {
  constructor(props) {
    super(props);
    //this.handleLogin = this.handleLogin.bind(this);
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
                  <input type="text" name="user" id="user" className="form-field" autoCorrect="off" spellCheck="false" autoCapitalize="off" autoFocus="autofocus" placeholder="Enter email" value={this.email} autoComplete="username" inputMode="email" />
                </div>
                <div id = "password-entry">
                  <input value={this.password} type="password" name="password" id="password" className="form-field" placeholder="Enter password" autoComplete="current-password" />
                </div>
                <input id="login" type="submit" className="button width-100-percent button-green" value="Log in"></input>
                
              </div>
            </div>
          </form>
        </div>
        
      );
    }

    handleLogin = (e) => {
      console.log(e)
      e.preventDefault()
      fetch(`api/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: this.email, password: this.password})
      }).then(res => res.json()).then(
        data => {
          console.log(data)
          if (data.token != undefined){
            console.log("SUCCESSLOGIN")
            localStorage.setItem("token", data.token)
          }
          
          this.setUser(data.user)
        }
      )
    }

    setUser(user){
      console.log(user)
      //to-add a redux state updater
    }
  }
  
  export default Login
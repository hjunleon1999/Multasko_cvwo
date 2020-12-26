import React, { useEffect, useState } from "react";
import './signup.scss'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      username:'',
      password: '',
      confirmPassword: '',
      email: ''
    };
    //this.handleSignup = this.handleSignup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
    render() {
      //<!--<button className = "login-menu__submit confirm">Log In</button>
      return (
        <div className="login-section">
          <form id = "login-form" onSubmit = {(e) => this.handleSignup(e)}>
            <div className = "login-menu">
              <h1 className = "login-menu__title">
                Sign up to Multasko           
              </h1>
              <div className = "login-menu__credentials">
                <div id = "user-name-entry">
                  <input value={this.props.username} onChange={this.handleInputChange} type="text" name="username" data-id="username" className="form-field" autoCorrect="off" spellCheck="false" autoCapitalize="off" autoFocus="autofocus" placeholder="Enter username" autoComplete="username" />
                </div>
                <div id = "user-email-entry">
                  <input value={this.props.email} onChange={this.handleInputChange} type="text" name="email" data-id="email" className="form-field" autoCorrect="off" spellCheck="false" autoCapitalize="off" autoFocus="autofocus" placeholder="Enter email" autoComplete="username" inputMode="email" />
                </div>
                <div id = "password-entry">
                  <input value={this.props.password } onChange={this.handleInputChange} type="password" name="password" data-id="password" className="form-field" placeholder="Enter password" autoComplete="current-password" />
                </div>
                <div id = "confirm-password-entry">
                  <input value={this.props.confirmPassword} onChange={this.handleInputChange} type="password" name="confirmPassword" data-id="confirmPassword" className="form-field" placeholder="Confirm password" autoComplete="current-password" />
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
        this.props[name] = value
        /*
        this.setState({
          [name]: value
        });*/
      }
    }

    handleSignup = (e) => {
      //this.props.signMeUp()
      console.log(e)
      e.preventDefault()
      const {username,email, password, confirmPassword} = this.state
      console.log(`${password} vs ${confirmPassword}`)
      if (password != confirmPassword){
        alert("Mismatched passwords")
        return
      }
      fetch(`api/signup`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({user_name: username, email: email, password: password})
      }).then(res => res.json()).then(
        data => {
          console.log(data)
          if (data.token != undefined){
            console.log("SUCCESSSINGUP")
            localStorage.setItem("token", data.token)
          }
          
          setUser(data.user)
        }
      )
    }

    /*
    setUser(user){
      console.log(user)
      //to-add a redux state updater
    }*/
  }
  
  export default Signup

  export function setUser(user){
    console.log(user)
  }
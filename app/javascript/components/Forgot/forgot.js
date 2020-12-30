import React, { useEffect, useState } from "react";
import './forgot.scss'

import { connect } from 'react-redux'
import { setUser } from '../../actions'
class Signup extends React.Component {
  constructor(props) {
    super(props);
    console.log(this)
    this.handleInputChange = this.handleInputChange.bind(this);
  }
    render() {
      return (
        <div className="login-section">
          <form id = "login-form" onSubmit = {this.handleForgot}>
            <div className = "login-menu">
              <h1 className = "login-menu__title">
                Can't log in?          
              </h1>
              <div className = "login-menu__credentials">
                <label id="email-label">We'll send a recovery link to</label>
                <div id = "user-email-entry">
                  <input value={this.props.email} onChange={this.handleInputChange} type="text" name="email" data-id="email" className="form-field" autoCorrect="off" spellCheck="false" autoCapitalize="off" autoFocus="autofocus" placeholder="Enter email" autoComplete="username" inputMode="email" />
                </div>
                <input id="login" type="submit" className="button width-100-percent button-green" value="Send recovery link"></input>
                
              </div>
            </div>
          </form>
        </div>
        
      );
    }

    handleInputChange(event) {
      //console.log(this.handleSignup)
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

    handleForgot = (e) => {
      e.preventDefault()
      const {email} = this.state
      //check is valid email
      fetch(`api/forgot_password`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: email})
      }).then(res => res.json()).then(
        data => {
          console.log(data)
          /*
          if (data.jwt != undefined){
            console.log("SUCCESSSINGUP")
            localStorage.setItem("token", data.jwt)
            console.log(this.props.setUser)
            this.props.setUser(username,email)
          }*/
          
        }
      )
    }
  
  }
  


const mapStateToProps = (state, ownProps) => {
  return {
      //active: ownProps.filter === state.visibilityFilter,
      username:state.username,
      password: state.password,
      confirmPassword: state.confirmPassword,
      email: state.email
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      setUser: (username,email)=>{
          dispatch(setUser(username,email))
      }
  }   
}



export default connect(
mapStateToProps,
mapDispatchToProps
)(Signup)

 // export default Signup

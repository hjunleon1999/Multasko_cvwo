
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Signup from '../components/Signup/signup'

const mapStateToProps = (state, ownProps) => ({
    //active: ownProps.filter === state.visibilityFilter,
    username:ownProps.username,
    password: ownProps.password,
    confirmPassword: ownProps.confirmPassword,
    email: ownProps.email
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSignup = (e) => {
        //this.props.signMeUp()
        console.log(e)
        e.preventDefault()
        const {username,email, password, confirmPassword} = ownProps
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)



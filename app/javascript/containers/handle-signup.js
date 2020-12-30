
import { connect } from 'react-redux'
import { setUser } from '../actions'
import Signup from '../components/Signup/signup'

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



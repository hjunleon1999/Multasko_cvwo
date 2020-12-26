import { CREATEUSER } from '../actions'

const visibilityFilter = (state, action) => {
  switch (action.type) {
    case CREATEUSER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
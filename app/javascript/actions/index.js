export const LOGGINGIN = "LOGGINGIN"
export const LOGGEDIN = "LOGGEDIN"
export const LOGGINGOUT = "LOGGINGOUT"
export const LOGGEDOUT = "LOGGEDOUT"

export const CREATEUSER = "CREATEUSER"
export const UPDATEUSER = "UPDATEUSER"
export const GETUSER = "GETUSER"
export const SETUSER = "SETUSER"

export const addUser = ({username,password}) => ({
    type: CREATEUSER,
    data: {
        username: username,
        password: password
    }
})

export const setUser = (username, email) => ({
    type: SETUSER,
    data: {
        username: username,
        email: email
    }
})

//export const unsetUser

export const ARCHIVEBOARD = "ARCHIVEBOARD"
export const DELETEBOARD = "DELETEBOARD"
export const CREATEBOARD = "CREATEBOARD"
export const UPDATEBOARD = "UPDATEBOARD"
export const GETBOARD = "GETBOARD"

export const GETLIST = "GETLIST"
export const DELETELIST = "DELETELIST"
export const CREATELIST = "CREATELIST"
export const CREATELISTCOMPLETE = "CREATELISTCOMPLETE"

export const CREATEITEM = "CREATEITEM"
export const CREATEITEMCOMPLETE = "CREATEITEMCOMPLETE"


let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

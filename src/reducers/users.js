

let userList =localStorage.getItem('students')
let initialData = userList ? JSON.parse(userList) : []

const GetUserList = (state= initialData, action)=>{
  function addUser(state, action){
      let arr = [...state,action.payload]
      state = arr
      let jsonArr = JSON.stringify(arr)
      localStorage.setItem('students', jsonArr)
      return arr
  }
  function removeUser(state, action){
      let arr = [...state]
      arr.splice(action.payload, 1)
      state = arr
      let jsonArr = JSON.stringify(arr)
      localStorage.setItem('students', jsonArr)
      return arr
  }
  function getUser(state, action){
      let arr = state[action.payload]
      return arr || {}
  }
  switch (action.type) {
    case 'GET_USER_LIST': return state
    case 'ADD_USER_LIST': return addUser(state, action)
    case 'REMOVE_USER_LIST': return removeUser(state, action)
    case 'USER_BY_ID': return getUser(state, action)
    default: return state
  }
}

export default GetUserList
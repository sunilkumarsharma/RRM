export const getUserList = (payload) => {
    return {
        type: 'GET_USER_LIST',
    }
}
export const addUserList = (payload) => {
    return {
        type: 'ADD_USER_LIST',
        payload:payload
    }
}
export const removeUserList = (payload) => {
    return {
        type: 'REMOVE_USER_LIST',
        payload:payload
    }
}
export const getUserById = (payload) => {
    return {
        type: 'USER_BY_ID',
        payload:payload
    }
}
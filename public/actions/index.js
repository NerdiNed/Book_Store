
// setting user action for redux
export const setUserAction = (user) => {
    return{
        type: 'CHANGE_USER',
        payload: user
    }
}
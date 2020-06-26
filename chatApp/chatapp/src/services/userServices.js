import axios from 'axios'


export function userLogin(data) {
    console.log("login controller",data)
    axios.post('http://localhost:4000/login', data)
        .then(res =>
            console.log(res))
        .catch(err =>
            console.log(err))
}
export function register(data) {
    console.log("registercomponent", data)
    axios.post('http://localhost:4000/registration', data)
        .then(res =>
            console.log(res))
        .catch(err =>
            console.log(err))
}
export function resetPassword(data) {
    console.log("reset password controller",data)
    axios.post('http://localhost:4000/resetpassword/:token', data)
        .then(res =>
            console.log(res))
        .catch(err =>
            console.log(err))
}
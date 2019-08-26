import axios from 'axios';
import { AsyncStorage } from 'react-native'
let url = ` http://192.168.6.112:4000`

export const getUsers = () => {
    return {
        type: 'GET_USER',
        payload: axios.get(`${url}/user`,
            {
                headers: {
                    "authorization": "semangat-team-faraday",
                    "x-access-token": `token: ${AsyncStorage.jwToken}`,
                    "x-control-user": AsyncStorage.userid
                }
            })
    }
}


export const register = (data) => {
    console.log(data)
    return {
        type: 'REGISTER',
        payload: axios.post(`${url}/user/register`, data, {
            headers: {
                "authorization": "semangat-team-faraday",
            }
        })
    }
}

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/user/login`, data, {
            headers: {
                "authorization": "semangat-team-faraday",
            }
        }).then(res => {
            console.log(res)
            const token = res.data.result.token
            const userid = res.data.result.id_user.toString()
            const name = res.data.result.name
            const address = res.data.result.address
            const email = res.data.result.email
            const latitude = res.data.result.latitude
            const longitude = res.data.result.longitude
            AsyncStorage.setItem('longitude', longitude)
            AsyncStorage.setItem('latitude', latitude)
            AsyncStorage.setItem('email', email)
            AsyncStorage.setItem('address', address)
            AsyncStorage.setItem('userid', userid)
            AsyncStorage.setItem('jwToken', token)
            AsyncStorage.setItem('name', name)

        })
    }
}

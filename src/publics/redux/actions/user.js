import axios from 'axios';
import { AsyncStorage } from 'react-native'
let url = ` http://pasarqita.muhammadrisano.online`

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
            const token = res.data.result.token
            const userid = res.data.result.id_user.toString()
            const name = res.data.result.name
            const address = res.data.result.address
            const email = res.data.result.email
            const latitude = res.data.result.latitude
            const longitude = res.data.result.longitude
            const telp = res.data.result.telp
            const role_id = res.data.result.role_id.toString()
            AsyncStorage.setItem('role_id', role_id)
            AsyncStorage.setItem('longitude', longitude)
            AsyncStorage.setItem('latitude', latitude)
            AsyncStorage.setItem('email', email)
            AsyncStorage.setItem('address', address)
            AsyncStorage.setItem('userid', userid)
            AsyncStorage.setItem('jwToken', token)
            AsyncStorage.setItem('name', name)
            AsyncStorage.setItem('telp', telp)

        })
    }
}

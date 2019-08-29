import axios from 'axios';
import { AsyncStorage } from 'react-native'
let url = ` http://pasarqita.muhammadrisano.online`

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(`${url}/category`,
            {
                headers: {
                    "authorization": "semangat-team-faraday",
                    "x-access-token": `token: ${AsyncStorage.jwToken}`,
                    "x-control-user": AsyncStorage.userid
                }
            })
    }
}

export const getCategoryId = (id_category) => {
    return {
        type: 'GET_CATEGORYID', id_category,
        payload: axios.get(`${url}/category/${id_category}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday",
                    "x-access-token": `token: ${AsyncStorage.jwToken}`,
                    "x-control-user": AsyncStorage.userid
                }
            })
    }
}

export const postCategory = () => {
    return {
        type: 'POST_CATEGORY',
        payload: axios.post(`${url}/category`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const editCategory = (data, id_category) => {
    return {
        type: 'PATCH_CATEGORY', id_category,
        payload: axios.patch(`${url}/category/${id_category}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const deleteCategory = (id_category) => {
    return {
        type: 'PATCH_CATEGORY', id_category,
        payload: axios.delete(`${url}/category/${id_category}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

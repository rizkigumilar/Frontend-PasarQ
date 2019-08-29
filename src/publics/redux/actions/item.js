import axios from 'axios';
import { AsyncStorage } from 'react-native'
let url = ` http://pasarqita.muhammadrisano.online`

export const getItem = () => {
    return {
        type: 'GET_ITEM',
        payload: axios.get(`${url}/item`,
            {
                headers: {
                    "authorization": "semangat-team-faraday",
                    "x-access-token": `token: ${AsyncStorage.jwToken}`,
                    "x-control-user": AsyncStorage.userid
                }
            })
    }
}

export const getItemId = (id_item) => {
    return {
        type: 'GET_ITEMID', id_item,
        payload: axios.get(`${url}/item/${id_item}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}
export const getItemBySubId = (id_subcategory) => {
    return {
        type: 'GET_ITEM_BY_SUBID', id_subcategory,
        payload: axios.get(`${url}/item/bysubcategory/${id_subcategory}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday",
                    "x-access-token": `token: ${AsyncStorage.jwToken}`,
                    "x-control-user": AsyncStorage.userid
                }
            })
    }
}

export const postItem = (data) => {
    return {
        type: 'POST_ITEM',
        payload: axios.post(`${url}/item`, data,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const editItem = (data, id_item) => {
    return {
        type: 'PATCH_ITEM', id_item,
        payload: axios.patch(`${url}/item/${id_item}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const deleteItem = (id_item) => {
    return {
        type: 'PATCH_ITEM', id_item,
        payload: axios.delete(`${url}/item/${id_item}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

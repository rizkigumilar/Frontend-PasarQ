import axios from 'axios';
import { AsyncStorage } from 'react-native'
let url = ` http://pasarqita.muhammadrisano.online`

export const getCart = () => {
    return {
        type: 'GET_CART',
        payload: axios.get(`${url}/cart`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const getCartId = (id_cart) => {
    return {
        type: 'GET_CARTID', id_cart,
        payload: axios.get(`${url}/cart/${id_cart}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const postCart = () => {
    return {
        type: 'POST_CART',
        payload: axios.post(`${url}/cart`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const editCart = (data, id_cart) => {
    return {
        type: 'PATCH_CART', id_cart,
        payload: axios.patch(`${url}/cart/${id_cart}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const deleteCart = (id_cart) => {
    return {
        type: 'PATCH_CART', id_cart,
        payload: axios.delete(`${url}/cart/${id_cart}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

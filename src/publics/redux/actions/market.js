import axios from 'axios';
import { AsyncStorage } from 'react-native'
let url = ` http://pasarqita.muhammadrisano.online`

export const getMarket = () => {
    return {
        type: 'GET_MARKET',
        payload: axios.get(`${url}/market`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const getMarketId = (id_market) => {
    return {
        type: 'GET_MARKETID', id_market,
        payload: axios.get(`${url}/market/${id_market}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const postMarket = () => {
    return {
        type: 'POST_MARKET',
        payload: axios.post(`${url}/market`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const editMarket = (data, id_market) => {
    return {
        type: 'PATCH_MARKET', id_market,
        payload: axios.patch(`${url}/market/${id_market}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const deleteMarket = (id_market) => {
    return {
        type: 'PATCH_MARKET', id_market,
        payload: axios.delete(`${url}/market/${id_market}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

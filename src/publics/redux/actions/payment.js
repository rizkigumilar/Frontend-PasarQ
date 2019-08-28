import axios from 'axios';
import { AsyncStorage } from 'react-native'
let url = ` http://pasarqita.muhammadrisano.online`

export const getPayment = () => {
    return {
        type: 'GET_PAYMENT',
        payload: axios.get(`${url}/payment`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const getPaymentId = (id_payment) => {
    return {
        type: 'GET_PAYMENTID', id_payment,
        payload: axios.get(`${url}/payment/${id_payment}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const postPayment = () => {
    return {
        type: 'POST_PAYMENT',
        payload: axios.post(`${url}/payment`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const editPayment = (data, id_payment) => {
    return {
        type: 'PATCH_PAYMENT', id_payment,
        payload: axios.patch(`${url}/payment/${id_payment}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const editPayment = (data, id_payment) => {
    return {
        type: 'PATCH_PAYMENT', id_payment,
        payload: axios.patch(`${url}/payment/${id_payment}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const deletePayment = (id_payment) => {
    return {
        type: 'PATCH_PAYMENT', id_payment,
        payload: axios.delete(`${url}/payment/${id_payment}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

import axios from 'axios';
import { AsyncStorage } from 'react-native'
let url = ` http://pasarqita.muhammadrisano.online`

export const getSubcategory = () => {
    return {
        type: 'GET_SUBCATEGORY',
        payload: axios.get(`${url}/subcategory`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const getSubcategoryId = (id_subcategory) => {
    return {
        type: 'GET_SUBCATEGORYID', id_subcategory,
        payload: axios.get(`${url}/subcategory/${id_subcategory}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}
export const getSubcategoryByCategory = (id_category) => {
    return {
        type: 'GET_SUBCATEGORYBYCATEGORY', id_category,
        payload: axios.get(`${url}/subcategory/bycategory/${id_category}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}
export const postSubcategory = () => {
    return {
        type: 'POST_SUBCATEGORY',
        payload: axios.post(`${url}/subcategory`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const editSubcategory = (data, id_subcategory) => {
    return {
        type: 'PATCH_SUBCATEGORY', id_subcategory,
        payload: axios.patch(`${url}/subcategory/${id_subcategory}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const deleteSubcategory = (id_subcategory) => {
    return {
        type: 'PATCH_SUBCATEGORY', id_subcategory,
        payload: axios.delete(`${url}/subcategory/${id_subcategory}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

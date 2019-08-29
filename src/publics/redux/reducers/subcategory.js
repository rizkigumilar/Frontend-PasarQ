const initialState = {
    subcategoryList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
}

const subcategory = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SUBCATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_SUBCATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_SUBCATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                subcategoryList: action.payload.data.result
            };
        case 'GET_SUBCATEGORYID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_SUBCATEGORYID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_SUBCATEGORYID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                subcategoryList: action.payload.data.result
            };
        case 'GET_SUBCATEGORYBYCATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_SUBCATEGORYBYCATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_SUBCATEGORYBYCATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                subcategoryList: action.payload.data.result
            };
        case 'POST_SUBCATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_SUBCATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_SUBCATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                subcategoryList: [state.subcategoryList, action.payload.data[0]]
            };
        case 'EDIT_SUBCATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'EDIT_SUBCATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'EDIT_SUBCATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                subcategoryList: [state.subcategoryList, action.payload.data[0]]
            };
        case 'DELETE_SUBCATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'DELETE_SUBCATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'DELETE_SUBCATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                subcategoryList: [state.subcategoryList, action.payload.data[0]]
            };
        default:
            return state;
    }
};

export default subcategory;
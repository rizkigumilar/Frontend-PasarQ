const initialState = {
    storeList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
}

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_STORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_STORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_STORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                storeList: action.payload.data.result
            };
        case 'GET_STOREID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_STOREID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_STOREID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                storeList: action.payload.data.result
            };
        case 'GET_BYIDUSER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_BYIDUSER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_BYIDUSER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                storeList: action.payload.data.result
            };
        case 'POST_STORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_STORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_STORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                storeList: [state.storeList, action.payload.data[0]]
            };
        case 'EDIT_STORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'EDIT_STORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'EDIT_STORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                storeList: [state.storeList, action.payload.data[0]]
            };
        case 'DELETE_STORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'DELETE_STORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'DELETE_STORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                storeList: [state.storeList, action.payload.data[0]]
            };
        default:
            return state;
    }
};

export default store;
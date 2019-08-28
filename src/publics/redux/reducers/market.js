const initialState = {
    marketList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
}

const market = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MARKET_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_MARKET_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_MARKET_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                marketList: action.payload.data.result
            };
        case 'GET_MARKETID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_MARKETID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_MARKETID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                marketList: action.payload.data.result
            };
        case 'POST_MARKET_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_MARKET_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_MARKET_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                marketList: [state.marketList, action.payload.data[0]]
            };
        case 'EDIT_MARKET_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'EDIT_MARKET_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'EDIT_MARKET_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                marketList: [state.marketList, action.payload.data[0]]
            };
        case 'DELETE_MARKET_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'DELETE_MARKET_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'DELETE_MARKET_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                marketList: [state.marketList, action.payload.data[0]]
            };
        default:
            return state;
    }
};

export default market;
const initialState = {
    paymentList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
}

const payment = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PAYMENT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_PAYMENT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_PAYMENT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                paymentList: action.payload.data.result
            };
        // buat pesanan
        case 'BUAT_PESANAN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'BUAT_PESANAN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'BUAT_PESANAN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                paymentList: action.payload.data.result
            };        
        case 'GET_PAYMENTID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_PAYMENTID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_PAYMENTID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                paymentList: action.payload.data.result
            };
        case 'POST_PAYMENT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_PAYMENT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_PAYMENT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                paymentList: [state.paymentList, action.payload.data[0]]
            };
        case 'EDIT_PAYMENT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'EDIT_PAYMENT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'EDIT_PAYMENT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                paymentList: [state.paymentList, action.payload.data[0]]
            };
        case 'DELETE_PAYMENT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'DELETE_PAYMENT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'DELETE_PAYMENT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                paymentList: [state.paymentList, action.payload.data[0]]
            };
        default:
            return state;
    }
};

export default payment;
const initialState = {
    cartList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                cartList: action.payload.data.result
            };
        case 'GET_CARTID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_CARTID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_CARTID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                cartList: action.payload.data.result
            };
        case 'POST_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                cartList: [state.cartList, action.payload.data[0]]
            };
        case 'EDIT_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'EDIT_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'EDIT_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                cartList: [state.cartList, action.payload.data[0]]
            };
        case 'DELETE_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'DELETE_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'DELETE_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                cartList: [state.cartList, action.payload.data[0]]
            };
        // get cart user
        case 'GET_CART_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_CART_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_CART_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                cartList: action.payload.data.result
            };
        // qty plus cart
        case 'QTY_PLUS_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'QTY_PLUS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'QTY_PLUS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                cartList: action.payload.data.result
            };
        // qty min cart
        case 'QTY_MIN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'QTY_MIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'QTY_MIN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                cartList: action.payload.data.result
            };
        // checkout cart
        case 'CHECKOUT_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'CHECKOUT_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'CHECKOUT_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                cartList: action.payload.data.result
            };
        default:
            return state;
    }
};

export default cart;
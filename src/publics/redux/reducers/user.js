const initialState = {
    userList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    listId: []
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_LOADING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'REGISTER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'REGISTER_FULFILLED':
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                userList: [state.userList, action.payload.data[0]]
            };
        case 'LOGIN_LOADING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'LOGIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                userList: [state.userList, action.payload]
            };
        case 'GET_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'GET_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'GET_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                userList: action.payload.data.result
            };
        default:
            return state;
    }
}

export default user;
const initialState = {
    categoryList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
}

const category = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categoryList: action.payload.data.result
            };
        case 'GET_CATEGORYID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_CATEGORYID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_CATEGORYID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categoryList: action.payload.data.result
            };
        case 'POST_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categoryList: [state.categoryList, action.payload.data[0]]
            };
        case 'EDIT_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'EDIT_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'EDIT_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categoryList: [state.categoryList, action.payload.data[0]]
            };
        case 'DELETE_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'DELETE_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'DELETE_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categoryList: [state.categoryList, action.payload.data[0]]
            };
        default:
            return state;
    }
};

export default category;
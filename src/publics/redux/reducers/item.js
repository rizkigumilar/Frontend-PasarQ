const initialState = {
    itemList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    itemDetail: null
}

const item = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITEM_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_ITEM_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_ITEM_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                itemList: action.payload.data.result
            };
        case 'GET_ITEM_BY_SUBID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_ITEM_BY_SUBID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_ITEM_BY_SUBID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                itemList: action.payload.data.result
            };
        case 'GET_ITEMID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_ITEMID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_ITEMID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                itemDetail: action.payload.data.result
            };
        case 'GET_ITEMID_BYSTORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_ITEMID_BYSTORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_ITEMID_BYSTORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                itemList: action.payload.data.result
            };
        case 'POST_ITEM_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_ITEM_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_ITEM_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                itemList: [state.itemList, action.payload.data[0]]
            };
        /////////////////////////////////////////////////////////            
        case 'EDIT_ITEM_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'EDIT_ITEM_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'EDIT_ITEM_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                itemList: [state.itemList, action.payload.data[0]]
            };
        /////////////////////////////////////////////////////////            
        case 'DELETE_ITEM_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'DELETE_ITEM_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'DELETE_ITEM_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                itemList: [state.itemList, action.payload.data[0]]
            };
        default:
            return state;
    }
};

export default item;
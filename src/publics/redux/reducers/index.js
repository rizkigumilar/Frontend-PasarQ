import { combineReducers } from 'redux';


import user from './user'
import category from './category'
import subcategory from './subcategory'
import item from './item'
import store from './store'
import market from './market'
import cart from './cart'
import payment from './payment'

const appReducer = combineReducers({

    user,
    category,
    subcategory,
    item,
    store,
    market,
    cart,
    payment
});

export default appReducer;

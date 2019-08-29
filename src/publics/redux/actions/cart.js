import axios from 'axios';
import { AsyncStorage } from 'react-native';
let url = ` http://pasarqita.muhammadrisano.online`;

export const quantityplus = id_cart => {
  return {
    type: ' QTY_PLUS',
    payload: axios.patch(
      `${url}/cart/quantityplus/${id_cart}`,
      {},
      {
        headers: {
          authorization: 'semangat-team-faraday',
        },
      },
    ),
  };
};

export const postCart = (data) => {
  return {
    type: 'POST_CART',
    payload: axios.post(`${url}/cart`, data,
      {
        headers: {
          "authorization": "semangat-team-faraday"
        }
      })
  }
}

export const quantitymin = id_cart => {
  return {
    type: ' QTY_MIN',
    payload: axios.patch(
      `${url}/cart/quantityminus/${id_cart}`,
      {},
      {
        headers: {
          authorization: 'semangat-team-faraday',
        },
      },
    ),
  };
};

export const deleteCart = id_cart => {
  return {
    type: 'DELETE_ITEM_CART',
    id_cart,
    payload: axios.delete(`${url}/cart/${id_cart}`, {
      headers: {
        authorization: 'semangat-team-faraday',
      },
    }),
  };
};

export const getCartUser = id_user => {
  return {
    type: 'GET_CART_USER',
    payload: axios.get(`${url}/cart/byuser/${id_user}`, {
      headers: {
        authorization: 'semangat-team-faraday',
      },
    }),
  };
};

export const checkoutCart = id_user => {
  return {
    type: 'CHECKOUT_CART',
    payload: axios.post(
      `${url}/payment/start/${id_user}`,
      {},
      {
        headers: {
          authorization: 'semangat-team-faraday',
        },
      },
    ),
  };
};

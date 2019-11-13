import { SET_CART, LOG_OUT_CART } from '../constants/index';
import axios from 'axios';

export const setCart = cart => ({
  type: SET_CART,
  cart
});

export const logOutCart = () => ({
  type: LOG_OUT_CART,
  cart: {}
});

export const userLogOutCart = () => dispatch => {
  dispatch(logOutCart());
};

export const fetchCart = (user, cart) => dispatch => {
  if (user.name) {
    axios
      .get('/api/cart/me')
      .then(res => res.data)
      .then(cart => dispatch(setCart(cart)));
  } else {
    let values = [];
    let keys = Object.keys(window.localStorage);
    let i = keys.length;
    while (i--) {
      values.push(JSON.parse(window.localStorage.getItem(keys[i])));
    }

    dispatch(setCart(values));
  }
};

export const fetchAndAddToCart = (product, user) => dispatch => {
  if (user.name) {
    return axios
      .post('/api/cart', product)
      .then(res => res.data)
      .then(cart => {
        console.log(cart);
        dispatch(setCart(cart));
      });
  }

  if (!window.localStorage.getItem(product.id)) {
    product.quantity = 0;
    window.localStorage.setItem(product.id, JSON.stringify(product));
  }

  let addToThis = JSON.parse(window.localStorage.getItem(product.id));
  addToThis.quantity = addToThis.quantity + 1;

  window.localStorage.setItem(addToThis.id, JSON.stringify(addToThis));

  dispatch(
    setCart(Object.values(window.localStorage).map(item => JSON.parse(item)))
  );
};

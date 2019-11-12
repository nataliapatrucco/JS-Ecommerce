import { SET_CART, LOG_OUT_CART } from "../constants/index";
import axios from "axios";

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
//TODO:
export const fetchAndRemoveFromCart = (product, user) => dispatch => {
  if (user.name) {
    axios
      .post("/api/cart/remove", product)
      .then(res => res.data)
      .then(cart => {
        dispatch(setCart(cart));
      });
  } else {
    let newCartObj = {};
    let windowCart = window.localStorage;

    Object.keys(windowCart).map(key => {
      if (key !== product.id) newCartObj[key] = JSON.parse(windowCart[key]);
    });

    window.localStorage.clear();

    Object.keys(newCartObj).map(key => {
      window.localStorage.setItem(key, newCartObj[key]);
    });

    dispatch(setCart(newCartObj));
  }
};

export const fetchAndSubstractFromCart = (product, user) => dispatch => {
  if (user.name) {
    axios
      .post("/api/cart/substract", product)
      .then(res => res.data)
      .then(cart => {
        dispatch(setCart(cart));
      });
  } else {
    if (window.localStorage.getItem(product.id)) {
      let productToSubFrom = JSON.parse(
        window.localStorage.getItem(product.id)
      );

      productToSubFrom.quantity = productToSubFrom.quantity - 1;

      window.localStorage.setItem(
        productToSubFrom.id,
        JSON.stringify(productToSubFrom)
      );
    }

    let values = [];
    let keys = Object.keys(window.localStorage);
    let i = keys.length;
    while (i--) {
      values.push(JSON.parse(window.localStorage.getItem(keys[i])));
    }

    dispatch(setCart(values));
  }
};

export const fetchCart = user => dispatch => {
  if (user.name) {
    axios
      .get("/api/cart/me")
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
  console.log("hwewewewewewewewewew");

  if (user.name) {
    axios
      .post("/api/cart", product)
      .then(res => res.data)
      .then(cart => {
        console.log(cart);
        dispatch(setCart(cart));
      });
  } else {
    if (window.localStorage.getItem(product.id)) {
      let addedProduct = JSON.parse(window.localStorage.getItem(product.id));
      addedProduct.quantity = addedProduct.quantity + 1;
      window.localStorage.setItem(
        addedProduct.id,
        JSON.stringify(addedProduct)
      );
    } else {
      product.quantity = 1;
      window.localStorage.setItem(product.id, JSON.stringify(product));
    }

    let values = [];
    let keys = Object.keys(window.localStorage);
    let i = keys.length;
    while (i--) {
      values.push(JSON.parse(window.localStorage.getItem(keys[i])));
    }

    dispatch(setCart(values));
  }
};

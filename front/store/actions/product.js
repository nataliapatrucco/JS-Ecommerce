import {
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
  SELECTED_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  CREATE_PRODUCT
} from "../constants/index";
import axios from "axios";

export const getProducts = products => ({
  type: GET_PRODUCTS,
  products
});

export const getSearchProducts = products => ({
  type: SEARCH_PRODUCTS,
  products
});

export const selectedProduct = product => ({
  type: SELECTED_PRODUCT,
  product
});

// export const deleteProduct = product => ({
//   type: DELETE_PRODUCT,
//   product
// });

// export const createProduct = product => ({
//   type: CREATE_PRODUCT,
//   product
// });

export const editProduct = product => ({
  type: EDIT_PRODUCT,
  product
});
export const fetchProduct = id => dispatch => {
  axios
    .get(`/api/product/${id}`)
    .then(res => res.data)
    .then(product => {
      dispatch(selectedProduct(product));
    });
};

export const fetchProducts = () => dispatch => {
  axios
    .get("/api/product/random/9")
    .then(res => dispatch(getProducts(res.data)))
    .catch(err => console.log(err));
};

export const searchProducts = search => dispatch => {
  axios
    .get(`/api/product/filtered/${search}`)
    .then(res => dispatch(getSearchProducts(res.data)))
    .catch(err => console.log(err));
};

export const adminEditProduct = product => dispatch => {
  axios
    .put(`/api/product/${product.id}`, product)
    .then(res => dispatch(editProduct(res.data)))
    .catch(err => console.log(err));
};

export const adminDeleteProduct = product => dispatch => {
  axios.delete(`/api/product/${product.id}`);
  // .then(res => dispatch(deleteProduct(res.data)))
  // .catch(err => console.log(err));
};

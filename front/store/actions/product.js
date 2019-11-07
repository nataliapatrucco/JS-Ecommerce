import { GET_PRODUCTS, SEARCH_PRODUCTS } from "../constants/index";
import axios from "axios";

export const getProducts = products => ({
  type: GET_PRODUCTS,
  products
});

export const getSearchProducts = products => ({
  type: SEARCH_PRODUCTS,
  products
});

//Para esta funcion necesito en el back una ruta a /products con un FindAll() que me traiga todos los productos que estan en la db (por ahora serian solo 9 que estan cargados)

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

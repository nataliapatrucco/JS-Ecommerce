import { CHECK_IS_HOME } from '../constants/index';

export const fetchProduct = id => dispatch => {
  axios
    .get(`/api/product/${id}`)
    .then(res => res.data)
    .then(product => dispatch(selectedProduct(product)));
};

export const checkIsHome = home => ({
  type: CHECK_IS_HOME,
  home
});

export const isHome = urlMatch => dispatch => dispatch(checkIsHome(urlMatch));

//this.props.match.location !== window.location.pathname

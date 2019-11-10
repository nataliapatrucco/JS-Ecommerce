import { CHECK_IS_HOME } from "../constants/index";

export const fetchProduct = id => dispatch => {
  axios
    .get(`/api/product/${id}`)
    .then(res => res.data)
    .then(product => dispatch(selectedProduct(product)));
};

export const checkIsHome = isHome => ({
  type: CHECK_IS_HOME,
  isHome
});

export const isHome = matchLocationVsLocationPathname => dispatch => {
  console.log("checkishome", checkIsHome);
  dispatch(checkIsHome(matchLocationVsLocationPathname));
};
//this.props.match.location !== window.location.pathname

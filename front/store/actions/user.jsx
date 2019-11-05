import { LOG_USER, REG_USER, LOG_OUT } from "../constants/index";
import axios from "axios";

export const logUser = user => ({
  type: LOG_USER,
  user
});

export const regUser = user => ({
  type: REG_USER,
  user
});

export const logOut = user => ({
  type: LOG_OUT
});

export const userLogOut = () => dispatch =>
  axios
    .get("/api/logout")
    .then(() => dispatch(logOut()))
    .catch(err => console.log(err));

export const userRegUser = (email, password) => dispatch =>
  axios
    .post("/api/register", { email, password })
    .then(res => res.data)
    .then(user => dispatch(regUser(user)))
    .catch(err => console.log(err));

export const userLogIn = (email, password) => dispatch =>
  axios
    .post("/api/login", { email, password })
    .then(res => res.data)
    .then(user => dispatch(logUser(user)))
    .catch(err => console.log(err));

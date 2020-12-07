import * as actions from "./actionTypes";
import {
  authLogin,
  authRegister,
  resetPassword,
  sendEmail,
} from "../../utils/reqData";

export const authLoginCreator = (data) => {
  return {
    type: actions.AUTH_LOGIN_USER,
    payload: authLogin(data),
  };
};

export const authRegisterCreator = (name, username, password, level_id) => {
  return {
    type: actions.AUTH_REGISTER_USER,
    payload: authRegister(name, username, password, level_id),
  };
};

export const authResetPassword = (data) => {
  return {
    type: actions.AUTH_RESET_PASSWORD,
    payload: sendEmail(data),
  };
};

export const authResetPasswordFullf = (data) => {
  return {
    type: actions.AUTH_RESET_FULLFILED,
    payload: resetPassword(data),
  };
};

export const authClearState = () => {
  return {
    type: actions.AUTH_CLEAR_STATE,
  };
};
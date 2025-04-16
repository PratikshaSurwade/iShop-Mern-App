import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_DETAILS_RESET,
} from "../constants/userContants";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
      return { ...state, loadingUser: true };
    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return { loadingUser: false, user: action.payload };
    case USER_LOGIN_FAIL:
    case USER_REGISTER_FAIL:
      return { loadingUser: false, error: action.payload };
    case USER_LOGOUT:
      return { user: null };
    default:
      return state;
  }
};


export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loadingUser: true };
    case USER_DETAILS_SUCCESS:
      return { loadingUser: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loadingUser: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loadingUser: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loadingUser: false, success: true, userInfo: action.payload };
    case USER_UPDATE_PROFILE_FAIL:
      return { loadingUser: false, error: action.payload };
    default:
      return state;
  }
};
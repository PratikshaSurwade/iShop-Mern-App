import axios from "axios";
import baseUrl from "../../pages/path/Baseurl";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
} from "../constants/orderConstant";

export const createOrder = (order) => async (dispatch, getState) => {
  console.log(order)

  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });
    const {
      user
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    const { data } = await axios.post(`${baseUrl}/api/orders`, order, config);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOrderDetails = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });
    const {
      user
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    const { data } = await axios.get(`${baseUrl}/api/orders/${orderId}`, config);
    console.log(data)
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const payOrder = (orderId) => async (dispatch, getState) => {
  console.log(orderId)
  try {
    dispatch({
      type: ORDER_PAY_REQUEST,
    });
    const {
      user
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    const { data } = await axios.put(
      `${baseUrl}/api/orders/${orderId}/pay`,
      config
    );
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    JSON.parse(localStorage.setItem("cart", []))
    // getState().cart
    const {
      cart: [],
    } = getState();
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_MY_REQUEST,
    });
    const {
      user
    } = getState();
    console.log("user:", user.userInfo._id);
    const config = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    console.log(user);
    const { data } = await axios.get(`${baseUrl}/api/orders/user/${user.userInfo._id}`, config);
    dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

import axios from "axios";
import { Dispatch } from "redux";

// Create Order
export function createOrder(order: string) {
  return (dispatch: Dispatch) => {
    try {
      dispatch({ type: "CREATE_ORDER_REQUEST" });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = axios.post(
        "http://localhost:5000/api/v1/order/new",
        order,
        config
      );
      dispatch({ type: "CREATE_ORDER_SUCCESS", payload: data });
    } catch (error: any) {
      dispatch({
        type: "CREATE_ORDER_FAIL",
        payload: error.response.data.message,
      });
    }
  };
}

// My Orders
export function myOrders(): any {
  return (dispatch: Dispatch) => {
    try {
      dispatch({ type: "MY_ORDERS_REQUEST" });

      const data = axios.get("http://localhost:5000/api/v1/order/");

      dispatch({ type: "MY_ORDERS_SUCCESS", payload: data });
    } catch (error: any) {
      dispatch({
        type: "MY_ORDERS_FAIL",
        payload: error.response.data.message,
      });
    }
  };
}

// Get All Orders (admin)
export function getAllOrders(): any {
  return (dispatch: Dispatch) => {
    try {
      dispatch({ type: "ALL_ORDERS_REQUEST" });
      const data = axios.get("http://localhost:5000/api/v1/admin/orders");
      dispatch({ type: "ALL_ORDERS_SUCCESS", payload: data });
    } catch (error: any) {
      dispatch({
        type: "ALL_ORDERS_FAIL",
        payload: error.response.data.message,
      });
    }
  };
}

// Update Order
export function updateOrder(id: number, order: string): any {
  return (dispatch: Dispatch) => {
    try {
      dispatch({ type: "UPDATE_ORDER_REQUEST" });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = axios.put(
        `http://localhost:5000/api/v1/admin/order/updatestatus/${id}`,
        order,
        config
      );
      dispatch({ type: "UPDATE_ORDER_SUCCESS", payload: data });
    } catch (error: any) {
      dispatch({
        type: "UPDATE_ORDER_FAIL",
        payload: error.response.data.message,
      });
    }
  };
}

// Delete Order
export function deleteOrder(id: number): any {
  return (dispatch: Dispatch) => {
    try {
      dispatch({ type: "DELETE_ORDER_REQUEST" });
      const data = axios.delete(
        `http://localhost:5000/api/v1/admin/order/delete/${id}`
      );
      dispatch({ type: "DELETE_ORDER_SUCCESS", payload: data });
    } catch (error: any) {
      dispatch({
        type: "DELETE_ORDER_FAIL",
        payload: error.response.data.message,
      });
    }
  };
}

// Get Order Details
export function getOrderDetails(id: number): any {
  return (dispatch: Dispatch) => {
    try {
      dispatch({ type: "ORDER_DETAILS_REQUEST" });
      const data = axios.get(`/api/v1/order/${id}`);
      dispatch({ type: "ORDER_DETAILS_SUCCESS", payload: data });
    } catch (error: any) {
      dispatch({
        type: "ORDER_DETAILS_FAIL",
        payload: error.response.data.message,
      });
    }
  };
}

// Clearing Errors
export function clearErrors(): any {
  return (dispatch: Dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" });
  };
}

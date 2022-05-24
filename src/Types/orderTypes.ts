export const UPDATE_ORDER_REQUEST = "UPDATE_ORDER_REQUEST";
export const DELETE_ORDER_REQUEST = "DELETE_ORDER_REQUEST";
export const UPDATE_ORDER_SUCCESS = "UPDATE_ORDER_SUCCESS";
export const DELETE_ORDER_SUCCESS = "DELETE_ORDER_SUCCESS";
export const UPDATE_ORDER_FAIL = "UPDATE_ORDER_FAIL";
export const DELETE_ORDER_FAIL = "DELETE_ORDER_FAIL";
export const UPDATE_ORDER_RESET = "UPDATE_ORDER_RESET";
export const DELETE_ORDER_RESET = "DELETE_ORDER_RESET";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export type updateOrderRequest = {
  type: "UPDATE_ORDER_REQUEST";
  payload: boolean;
};
export type deleteOrderRequest = {
  type: "DELETE_ORDER_REQUEST";
  payload: boolean;
};
export type updateOrderSuccess = {
  type: "UPDATE_ORDER_SUCCESS";
  payload: boolean;
};
export type deleteOrderSuccess = {
  type: "DELETE_ORDER_SUCCESS";
  payload: boolean;
};
export type updateOrderFail = {
  type: "UPDATE_ORDER_FAIL";
  payload: boolean;
};
export type deteteOrderFail = {
  type: "DELETE_ORDER_FAIL";
  payload: boolean;
};
export type updateOrderReset = {
  type: "UPDATE_ORDER_RESET";
  payload: boolean;
};
export type deleteOrderReset = {
  type: "DELETE_ORDER_RESET";
  payload: boolean;
};
export type clearErrors = {
  type: "CLEAR_ERRORS";
  payload: boolean;
};

export type OrderActions =
  | updateOrderRequest
  | deleteOrderRequest
  | updateOrderSuccess
  | deleteOrderSuccess
  | updateOrderReset
  | deleteOrderReset
  | updateOrderFail
  | deteteOrderFail
  | clearErrors;

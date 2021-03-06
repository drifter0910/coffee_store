// import * as actionTypes from "./shopping-types";
export const fetchData = (payload) => {
  return {
    type: "FETCH_DATA",
    payload,
  };
};

export const addToCart = (itemID, value) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
export const removeFromCart = (itemID) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id: itemID,
    },
  };
};
export const adjustQty = (itemID, value) => {
  return {
    type: "ADJUST_QTY",
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
export const plusQty = (itemID) => {
  return {
    type: "PLUS_QTY",
    payload: {
      id: itemID,
    },
  };
};
export const minusQty = (itemID) => {
  return {
    type: "MINUS_QTY",
    payload: {
      id: itemID,
    },
  };
};

// import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: itemID,
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

export const loadCurrentItem = (item) => {
  return {
    type: "LOAD_CURRENT_ITEM",
    payload: item,
  };
};

export const sortDescending = () => {
  return {
    type: "SORT_DESCENDING",
  };
};
export const sortAscending = () => {
  return {
    type: "SORT_ASCENDING",
  };
};

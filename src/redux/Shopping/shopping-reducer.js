// import * as actionTypes from "./shopping-types";
const INITIAL_STATE = {
  products: [],
  cart: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_TO_CART":
      //Check the items data from the products array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      //Check if item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + action.payload.qty }
                : item
            )
          : [...state.cart, { ...item, qty: action.payload.qty }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "ADJUST_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: parseInt(action.payload.qty) }
            : item
        ),
      };
    case "PLUS_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: (item.qty += 1) }
            : item
        ),
      };
    case "MINUS_QTY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            if (item.qty > 0) {
              return { ...item, qty: (item.qty -= 1) };
            }
            return item;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default shopReducer;

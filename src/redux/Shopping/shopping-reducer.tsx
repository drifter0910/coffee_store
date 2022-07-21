// import * as actionTypes from "./shopping-types";

interface StateArray {
  products: Array<any>;
  cart: Array<any>;
}

const INITIAL_STATE: StateArray = {
  products: [],
  cart: [],
};

const shopReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case 'ADD_TO_CART':
      //Check the items data from the products array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      //Check if item is in cart already
      const inCart = state.cart.find((item) => (item.id === action.payload.id ? true : false));
      return {
        ...state,
        cart: inCart
          ? state.cart.map((cartItem) =>
              item.id === action.payload.id
                ? {
                    ...cartItem,
                    qty: cartItem.qty + parseInt(action.payload.qty),
                  }
                : cartItem
            )
          : [...state.cart, { ...item, qty: parseInt(action.payload.qty) }],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case 'ADJUST_QTY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: parseInt(action.payload.qty) } : item
        ),
      };
    case 'PLUS_QTY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty += 1 } : item
        ),
      };
    case 'MINUS_QTY':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            if (item.qty > 0) {
              return { ...item, qty: item.qty -= 1 };
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

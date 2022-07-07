// import * as actionTypes from "./shopping-types";
// const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "Paper pounch",
      price: 46,
      image: require("../../img/product1.jpg"),
      category: "Coffee",
      tag: "Paper bag",
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 2,
      name: "Paper bag",
      price: 79,
      sale: "$98",
      category: "Coffee",
      tag: "Paper bag",
      image: require("../../img/product2.jpg"),
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 3,
      name: "coffee pot",
      price: 71,
      image: require("../../img/product3.jpg"),
      category: "Coffee",
      tag: "Coffee pot",
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 4,
      name: "plastic pouch",
      price: 27,
      image: require("../../img/product4.jpg"),
      category: "Coffee",
      tag: "Paper bag",
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 5,
      name: "tea pot",
      price: 54,
      category: "Coffee",
      tag: "Coffee pot",
      image: require("../../img/product5.jpg"),
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 6,
      name: "paper cup",
      price: 31,
      category: "Coffee",
      tag: "Coffee pot",
      image: require("../../img/product6.jpg"),
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 7,
      name: "choco bites",
      price: 63,
      category: "Coffee",
      tag: "Coffee bag",
      image: require("../../img/product7.jpg"),
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 8,
      name: "ground coffee",
      price: 75,
      category: "Coffee",
      tag: "Coffee bag",
      image: require("../../img/product8.jpg"),
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 9,
      name: "moka pot",
      price: 18,
      category: "Coffee",
      tag: "Coffee pot",
      image: require("../../img/product9.jpg"),
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 10,
      name: "cafe bags",
      price: 29,
      category: "Coffee",
      tag: "Coffee bag",
      image: require("../../img/product10.jpg"),
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 11,
      name: "tea cup",
      price: 46,
      category: "Coffee",
      tag: "Coffee pot",
      image: require("../../img/product11.jpg"),
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
    {
      id: 12,
      name: "recycled bag",
      price: 22,
      tag: "Coffee bag",
      category: "Coffee",
      image: require("../../img/product12.jpg"),
      desc: "Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et.",
    },
  ], //{id,tittle,des,price,img},
  cart: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

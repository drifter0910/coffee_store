export const fetchData = (payload: any) => {
  return {
    type: 'FETCH_DATA',
    payload,
  };
};

export const addToCart = (itemID: number, value: number) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
export const removeFromCart = (itemID: number) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      id: itemID,
    },
  };
};
export const adjustQty = (itemID: number, value: number) => {
  return {
    type: 'ADJUST_QTY',
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
export const plusQty = (itemID: number) => {
  return {
    type: 'PLUS_QTY',
    payload: {
      id: itemID,
    },
  };
};
export const minusQty = (itemID: number) => {
  return {
    type: 'MINUS_QTY',
    payload: {
      id: itemID,
    },
  };
};

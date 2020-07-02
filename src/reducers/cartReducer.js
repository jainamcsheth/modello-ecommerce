const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CART': {
      return {
        count: action.payload.count
      };
    }

    case 'ADD_TO_CART': {
      return {
        count: action.payload.count
      };
    }

    default: return state;
  }
}

export default cartReducer;
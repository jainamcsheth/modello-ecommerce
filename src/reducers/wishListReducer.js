const wishListReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_WISH_LIST': {
      return {
        count: action.payload.count
      };
    }

    case 'ADD_TO_WISH_LIST': {
      return {
        count: action.payload.count
      };
    }

    default: return state;
  }
}

export default wishListReducer;
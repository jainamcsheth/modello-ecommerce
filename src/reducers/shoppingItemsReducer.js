const shoppingItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_FEATURED_ITEMS': {
      return [...state, ...action.payload];
    }

    default: return state;
  }
}

export default shoppingItemsReducer;
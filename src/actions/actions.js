import axiosInstance from "../api";

export const getShoppingItems = () => {
  return (dispatch) => {
    axiosInstance.get('shoppingItems').then(res => {
      dispatch({
        type: 'GET_FEATURED_ITEMS',
        payload: res.data
      });
    });
  }
}

export const getCart = () => {
  return (dispatch) => {
    axiosInstance.get('totalCartItems').then(res => {
      dispatch({
        type: 'GET_CART',
        payload: res.data
      });
    });
  }
}

export const updateCartCount = (item, operation) => {
  return (dispatch, getState) => {
    const body = {
      count: operation === 'add' ? getState().cart.count + 1 : getState().cart.count - 1
    };
    axiosInstance.post('totalCartItems', body).then(res => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: body
      });
    });
  }
}

export const getWishList = () => {
  return (dispatch) => {
    axiosInstance.get('totalWishListItems').then(res => {
      dispatch({
        type: 'GET_WISH_LIST',
        payload: res.data
      });
    });
  }
}

export const updateWishListCount = (item, operation) => {
  return (dispatch, getState) => {
    const body = {
      count: operation === 'add' ? getState().wishList.count + 1 : getState().wishList.count - 1
    };
    axiosInstance.post('totalWishListItems', body).then(res => {
      dispatch({
        type: 'ADD_TO_WISH_LIST',
        payload: body
      });
    });
  }
}
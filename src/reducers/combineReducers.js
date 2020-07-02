import { combineReducers } from 'redux';
import shoppingItemsReducer from './shoppingItemsReducer';
import cartReducer from './cartReducer';
import wishListReducer from './wishListReducer';

const rootReducers = combineReducers({
  shoppingItems: shoppingItemsReducer,
  cart: cartReducer,
  wishList: wishListReducer
});

export default rootReducers;

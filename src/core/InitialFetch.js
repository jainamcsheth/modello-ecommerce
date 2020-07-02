import { connect } from 'react-redux';
import { getCart, getWishList } from '../actions/actions';

const CartItemsCount = ({ getCart, getWishList }) => {
  getCart();
  getWishList();
  return null;
};

const mapDispatchToProps = {
  getCart,
  getWishList
}

export default connect(null, mapDispatchToProps)(CartItemsCount);
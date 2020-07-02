import React from 'react';
import { connect } from 'react-redux';

const CartItemsCount = ({ count }) => {
  return (
    <React.Fragment>{count}</React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.cart.count
  }
}

export default connect(mapStateToProps)(CartItemsCount);
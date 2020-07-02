import React from 'react';
import { connect } from 'react-redux';

const WishListCount = ({ count }) => {
  return (
    <React.Fragment>{count}</React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.wishList.count
  }
}

export default connect(mapStateToProps)(WishListCount);
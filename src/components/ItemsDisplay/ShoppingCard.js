import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux';

import { updateCartCount, updateWishListCount } from '../../actions/actions';

const styles = {
  seperator: {
    margin: '20px auto',
    border: '1px solid grey',
    width: '20%',
  },
  seperatorBelowButton: {
    margin: '0',
    border: '1px solid grey',
    width: '100%',
    position: 'absolute',
    bottom: '5px',
    zIndex: '10'
  }
}

const ShoppingCard = (props) => {
  const image = props.item.images[0];

  const [showExtraState, setShowExtraState] = useState(false);
  const [isAddedToCart, setIsAddedToCartState] = useState(false);
  const [isAddedToWish, setIsAddedToWishState] = useState(false);

  const updateCardBody = id => {
    setShowExtraState(true);
  };

  const deleteCardBody = id => {
    setShowExtraState(false);
  };

  const updateCart = operation => {
    if (operation === 'add') {
      setIsAddedToCartState(true);
    } else {
      setIsAddedToCartState(false);
    }
    props.updateCartCount(props.item, operation);
  }

  const updateWhishList = operation => {
    if (operation === 'add') {
      setIsAddedToWishState(true);
    } else {
      setIsAddedToWishState(false);
    }
    props.updateWishListCount(props.item, operation);
  }

  const displayAddToCart = () => {
    return (
      <React.Fragment>
        {
          !isAddedToCart &&
          <button className="button button-primary mb-2"
            onClick={() => updateCart('add')}>ADD TO CART</button>
        }
        {
          isAddedToCart &&
          <button className="button button-primary mb-2"
            onClick={() => updateCart('sub')}>REMOVE FROM CART</button>
        }
        {
          !isAddedToWish &&
          <div onClick={() => updateWhishList('add')} className="cursor-pointer">
            <FontAwesomeIcon icon={['far', 'heart']} /> ADD TO WISHLIST
            </div>
        }
        {
          isAddedToWish &&
          <div onClick={() => updateWhishList('sub')} className="cursor-pointer">
            <FontAwesomeIcon icon={['fas', 'heart']} className='heart-red' /> REMOVE FROM WISHLIST
          </div>
        }
      </React.Fragment>
    )
  }

  return (
    <Card className="shopping-card" onMouseEnter={() => updateCardBody(props.item.id)}>
      <Card.Body className="shopping-card-body" onMouseLeave={() => deleteCardBody(props.item.id)}>
        <Card.Img src={require("../../assets/images/" + image)} className="shopping-card-image" />
        <hr style={styles.seperator}></hr>
        <div className="text-center" >
          <div className="company-name mb-1">{props.item.company}</div>
          <div className="product-name mb-2">{props.item.name}</div>
          <div className="cost mb-2">${props.item.cost}</div>
          {showExtraState && displayAddToCart()}
        </div>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = {
  updateCartCount,
  updateWishListCount
}

export default connect(null, mapDispatchToProps)(ShoppingCard);

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  item: {
    fontSize: '2rem',
    fontWeight: '300',
    padding: '5px 20px',
    cursor: 'pointer'
  },
  chevronDown: {
    height: '25px',
    margin: '6px 10px 6px 20px'
  },
  verticalLine: {
    borderLeft: '1px solid darkgrey',
    margin: '30px 5px'
  },
  noOfProds: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
}

const FeaturedArrivals = ({ currentCategory, updateCurrentCategoryState }) => {

  const updateCurrentCategory = (newValue) => {
    updateCurrentCategoryState({
      category: newValue
    })
  }

  return (
    <div className="featured-arrivals mb-3">
      <div className="media-friendly-flex justify mt-5">
        <div onClick={() => updateCurrentCategory('featured')}
          style={styles.item}
          className={currentCategory === 'featured' ? 'active' : ''}>
          <span>FEATURED</span><FontAwesomeIcon icon="chevron-down" style={styles.chevronDown} />
        </div>
        <div style={styles.verticalLine} className="desktop-only"></div>
        <div onClick={() => updateCurrentCategory('arrivals')}
          style={styles.item}
          className={currentCategory === 'arrivals' ? 'active' : ''}>
          <span>ARRIVALS</span><FontAwesomeIcon icon="chevron-down" style={styles.chevronDown} />
        </div>
      </div>
      <div style={styles.noOfProds}>WE HAVE OVER 2000 PRODUCTS IN OUR SHOP</div>
    </div>
  );
};

export default FeaturedArrivals;
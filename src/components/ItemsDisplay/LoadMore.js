import React from 'react';

const LoadMore = ({ updateTotalItemsToShow, updateBy }) => {

  return (
    <div className="container text-center">
      <span className="load-more" onClick={() => updateTotalItemsToShow(updateBy)}>
        + Load More Products
      </span>
    </div>
  );
};

LoadMore.defaultProps = {
  updateBy: 4
}

export default LoadMore;
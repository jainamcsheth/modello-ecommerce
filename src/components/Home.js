import React, { useState } from 'react';

import FeaturedArrivals from './FeaturedArrivals';
import ItemsDisplay from './ItemsDisplay/ItemsDisplay';

import modelBackgroundImg from '../assets/images/shopping-model-background-1.png';
import '../css/home.scss';

const styles = {
  modelBackground: {
    maxHeight: '450px',
    width: '100%',
    objectFit: 'cover'
  }
}

const Home = () => {
  const [currentCategoryState, setCurrentCategoryState] = useState({
    category: 'featured'
  });

  return (
    <div>
      <hr className="seperator"></hr>
      <div>
        <img src={modelBackgroundImg} alt="Big discount banner" style={styles.modelBackground} />
        <hr className="seperator"></hr>
        <FeaturedArrivals
          currentCategory={currentCategoryState.category}
          updateCurrentCategoryState={setCurrentCategoryState} />
        <ItemsDisplay currentCategory={currentCategoryState.category} />
      </div>
    </div>
  );
};

export default Home;
import React from 'react';

const styles = {
  topbarMain: {
    padding: '18px 0px',
    backgroundColor: 'white'
  }
}

const TopBar = () => {
  return (
    <div style={styles.topbarMain}>
      <div className="container flex-row justify-content-between">
        <ul className="flex-row">
          <li><a href="#" className="active">ENG</a></li>
          <li><a href="#">DE</a></li>
          <li><a href="#">PE</a></li>
        </ul>
        <ul className="flex-row">
          <li><a href="#" className="active">US</a></li>
          <li><a href="#">EUR</a></li>
          <li><a href="#">PLN</a></li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
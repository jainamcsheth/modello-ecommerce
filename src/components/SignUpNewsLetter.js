import React from 'react';

const SignUpNewsLetter = (props) => {

  return (
    <section className="sign-up-news-letter-wrapper">
      <div className="signup-news-letter">
        <div className="signup-text">
          <div className="font-weight-bold">SIGN UP TO OUR NEWSLETTER</div>
          <div>AND FET $30 COUPON</div>
        </div>
        <div className="signup-input">
          <input type="text" placeholder="ENTER YOUR EMAIL HERE" />
        </div>
        <button type="button" className="signup-button">SIGN UP</button>
      </div>
    </section>
  );
};

export default SignUpNewsLetter;
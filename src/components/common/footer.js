import React from 'react';
import { BackTop } from 'antd';

const AppFooter = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-dollar-sign"></i>
          <a href="#inicio">FinanzasApp</a>
        </div>
        <ul className="socials">
          <li><a target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/asysteccr"><i className="fab fa-facebook-f"></i></a></li>
          <li><a target="_blank"  rel="noopener noreferrer" href="https://www.twitter.com/asysteccr"><i className="fab fa-twitter"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2021 FinanzasApp</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;

import React from 'react';
import "./Footer.css"

const Footer = () => {


 
    const date = new Date();
    const year = date.getFullYear();
    
    return (
      <div className="mt-5 mb-3">
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-title col-lg-6 h-100 text-center text-lg-left my-auto mx-auto">
               
                <h5 className=" footer-text text-muted small mb-5 mt-5 mb-lg-0">
                  &copy; Sultan's Photography {year}. All Rights Reserved.
                </h5>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;
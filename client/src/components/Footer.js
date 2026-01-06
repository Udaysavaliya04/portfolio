import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom" style={{ padding: '30px', fontWeight: 'bold', fontSize: '20px' }}>
          <p>
            Made with <Heart size={16} className="heart" /> by Uday Savaliya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

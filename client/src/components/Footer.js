import React from 'react';
import { Heart } from 'lucide-react';
import Reveal from './Reveal';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal>
          <div className="footer-bottom" style={{ padding: '30px', fontWeight: 'bold', fontSize: '20px' }}>
            <p>
              Made with <Heart size={16} className="heart" /> by Uday Savaliya
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;

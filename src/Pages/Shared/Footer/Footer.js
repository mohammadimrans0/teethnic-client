import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
            className="p-10">
        <div className="footer">
          <div>
            <span className="footer-title">Services</span>
            <Link to='/' className="link link-hover">Emergency Checkup</Link>
            <Link to='/' className="link link-hover">Teeth transplant</Link>
            <Link to='/' className="link link-hover">Scaling</Link>
            <Link to='/' className="link link-hover">Filling</Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link to='/' className="link link-hover">About us</Link>
            <Link to='/' className="link link-hover">Contact</Link>
            <Link to='/' className="link link-hover">Jobs</Link>
            <Link to='/' className="link link-hover">Address</Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link to='/' className="link link-hover">Terms of use</Link>
            <Link to='/' className="link link-hover">Privacy policy</Link>
            <Link to='/' className="link link-hover">Cookie policy</Link>
          </div>
        </div>
        <div className='text-center mt-12'>
          <p>Copyright © 2023 - All right reserved by DOCTORS Portal Ltd</p>
        </div>
      </footer>
    );
};

export default Footer;
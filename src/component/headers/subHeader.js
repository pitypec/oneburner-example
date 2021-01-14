import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/Logo.png';

const SubHeaders = () => {
  return (
    <header className='sub-header'>
      <div className='nav-logo'>
        <Link>
          {' '}
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className='nav-right-one'>
        <ul className='nav-right-list'>
          <li className='nav-right-list-item try'>
            <span className='span-one'>New Customer?</span>
            <Link to='/product'>try for free</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default SubHeaders;

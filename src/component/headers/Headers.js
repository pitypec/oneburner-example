import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineArrowRight } from 'react-icons/ai';
import logo from '../../images/Logo.png';

const Headers = () => {
  return (
    <header className='main-header'>
      <div className='logo'>
        <Link>
          {' '}
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <nav className='nav-link'>
        <ul className='nav-list'>
          <li className='nav-list-item'>
            <Link to='/product'>product</Link>
            <AiOutlineDown size={10} />
          </li>
          <li className='nav-list-item'>
            <Link to='/pricing'>pricing</Link>
          </li>
          <li className='nav-list-item'>
            <Link to='/enterprise'>enterprise</Link>
          </li>
          <li className='nav-list-item'>
            <Link to='/support'>support</Link>
          </li>
        </ul>
      </nav>
      <div className='nav-right'>
        <ul className='nav-right-list'>
          <li className='nav-right-list-item'>
            <Link to='/product'>contact sales</Link>
          </li>
          <li className='nav-right-list-item'>
            <Link to='/product'>login</Link>
          </li>
          <li className='nav-right-list-item try'>
            <Link to='/product'>
              try for free
              <AiOutlineArrowRight />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Headers;

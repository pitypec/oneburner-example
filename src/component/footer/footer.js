import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import vector from '../../images/Vector.png';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin
} from 'react-icons/ai';
import { FaSnapchatSquare } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
const footer = () => {
  return (
    <footer className='main-footer'>
      <div className='footer-one'>
        <div className='footer-row-one'>
          <div className='row-one'>
            <div>
              <Link>
                {' '}
                <img src={logo} alt='logo' />
              </Link>
            </div>
            <p>
              no 1 <span className='crm'>crm</span> solution in africa
            </p>
            <p>terms of use | privacy policy</p>
          </div>
          <div className='row-two'>
            <p>Get in touch</p>
            <p>+234-80-000-0000</p>
            <div className='social'>
              <ul>
                <li>
                  <AiFillFacebook />
                </li>
                <li>
                  <AiFillTwitterSquare />
                </li>
                <li>
                  <AiFillLinkedin />
                </li>
                <li>
                  <FaSnapchatSquare />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-row-two'>
          <div className='col-one'>
            <div>
              <img src={vector} alt='vector' />
              <p>English</p>
              <AiOutlineDown />
            </div>
          </div>
          <div className='col-two'>
            <div>
              <p>product</p>
              <ul>
                <li>
                  <Link>feautures</Link>
                </li>
                <li>
                  <Link>enterprise</Link>
                </li>
                <li>
                  <Link>security</Link>
                </li>
                <li>
                  <Link>trust</Link>
                </li>
                <li>
                  <Link>customer stories</Link>
                </li>
                <li>
                  <Link>pricing</Link>
                </li>
                <li>
                  <Link>integration</Link>
                </li>
                <li>
                  <Link>oneburner partner</Link>
                </li>
              </ul>
            </div>
            <div>
              <p>company</p>
              <ul>
                <li>
                  <Link>about us</Link>
                </li>
                <li>
                  <Link>contact us</Link>
                </li>
                <li>
                  <Link>carreers</Link>
                </li>
                <li>
                  <Link>in the news</Link>
                </li>
              </ul>
            </div>
            <div>
              <p>oneburner for teams</p>
              <ul>
                <li>
                  <Link>enginnering</Link>
                </li>
                <li>
                  <Link>financial services</Link>
                </li>
                <li>
                  <Link>crm and sales</Link>
                </li>
                <li>
                  <Link>it</Link>
                </li>
                <li>
                  <Link>marketing</Link>
                </li>
                <li>
                  <Link>customer support</Link>
                </li>
                <li>
                  <Link>human resources</Link>
                </li>
                <li>
                  <Link>project management</Link>
                </li>
                <li>
                  <Link>remote work</Link>
                </li>
              </ul>
            </div>
            <div>
              <p>resources</p>
              <ul>
                <li>
                  <Link>community</Link>
                </li>
                <li>
                  <Link>guides</Link>
                </li>
                <li>
                  <Link>templates</Link>
                </li>
                <li>
                  <Link>video tutorials</Link>
                </li>
                <li>
                  <Link>professional services</Link>
                </li>
                <li>
                  <Link>knowledge base </Link>
                </li>
                <li>
                  <Link>blog</Link>
                </li>
                <li>
                  <Link>blog</Link>
                </li>
                <li>
                  <Link>webiners</Link>
                </li>
                <li>
                  <Link>find a partner</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-two'>
        <div className='footer-row-three'>
          <p className='copyright'>
            &copy;2020 oneburner.com All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;

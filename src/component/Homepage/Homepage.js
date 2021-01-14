import React from 'react';
import Header from '../headers/Headers';
import Footer from '../footer/footer';
import { GrFormCheckmark } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';

const Homepage = () => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff', paddingRight: '2px' }}>
        <Header />
        <div className='home-container'>
          <div className='hm-one'></div>
          <div className='hm-two'>
            <p>How Oneburner help enterprises grow</p>
            <div className='hm-two-row'>
              <p>
                Oneburner software solution helps your business by creating an
                enabling environment for easy communication and feedbacks in
                real time. Oneburner brings all your user and teams in a single
                place with 99.99% uptime SLA and Data security
              </p>
              <div className='list-item'>
                <ul>
                  <li>
                    {' '}
                    <GrFormCheckmark size={10} /> Data protection and control
                  </li>
                  <li>
                    {' '}
                    <GrFormCheckmark size={10} />
                    Reporting and analytics
                  </li>
                  <li>
                    {' '}
                    <GrFormCheckmark size={10} />
                    Use single sign-on and multi-factor authentication to secure
                    accounts
                  </li>
                  <li>
                    {' '}
                    <GrFormCheckmark size={10} />
                    Enterprise integration with other tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Footer />
      </IconContext.Provider>
    </>
  );
};

export default Homepage;

import React from 'react';
import Header from '../headers/Headers';
import Footer from '../footer/footer';
const ContactSales = () => {
  return (
    <>
      <Header />
      <div className='contact-container'>
        <div className='contact-left'>
          <form>
            <div className='cnt-row'>
              <div className='cnt-row-one mg-right'>
                <label for='firstname'>firstName</label>
                <input className='contact-input' type='text' />
              </div>
              <div className='cnt-row-two'>
                <label for='lastname'>lastName</label>
                <input className='contact-input' type='text' />
              </div>
            </div>
            <div>
              <div className='cnt-row-single'>
                <label htmlFor='workemail'>work email</label>
                <input className='contact-input' type='text' />
              </div>
            </div>
            <div>
              <div className='cnt-row-single '>
                <label htmlFor='phonenumber'>phone number</label>
                <input className='contact-input' type='tel' />
              </div>
            </div>
            <div>
              <select value='' className='contact-input contact-select'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className='cnt-row'>
              <div className='cnt-row-two mg-right'>
                <input className='contact-input' type='text' name='' value='' />
              </div>
              <div className='contact-select-two'>
                <select className='contact-input contact-select-two'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <textarea rows='5' cols='63.5'></textarea>
              </div>
            </div>
            <button className='log-btn-two'>contact us</button>
          </form>
        </div>
        <div className='contact-right'></div>
      </div>
      <Footer />
    </>
  );
};

export default ContactSales;

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
        <div className='contact-right'>
          <div className='right-container'>
            <h2>Request a call from an expert</h2>
            <p>
              Having thoughts on which product works best for you? fill the form
              and our expert will reach out to you.
            </p>
            <div className='list-of-offices'>
              <h3>Our offices around Africa</h3>
              <div>
                <div>
                  <h4>nigeria</h4>
                  <p>
                    33a adeola odeku, victoria island Lagos. +234-(0)-8000000000
                  </p>
                </div>
                <div>
                  <h4>ghana</h4>
                  <p>45, El-Senoussi Street, Accra +233-(0)-277619819</p>
                </div>
                <div>
                  <h4>South africa</h4>
                  <p>
                    474, Cheriton Drive, Port Shepstone, Kwazulu-Natal
                    +27-(0)-857926978
                  </p>
                </div>
                <div>
                  <h4>Egypt</h4>
                  <p>
                    72, Gameat El-Dewal El-Arabia St., Giza. +20-(0)-35924295
                  </p>
                </div>
                <div>
                  <h4>Kenya</h4>
                  <p>
                    41, Enterprise Rd., Industrial Area , Niarobi
                    +254-(0)-20536766
                  </p>
                </div>
                <div>
                  <h4>tunisia</h4>
                  <p>
                    13, Rue de Makthar, Dhraa Governorate Kasserine
                    +216-(0)-77367410
                  </p>
                </div>
                <div>
                  <h4>mali</h4>
                  <p>22, Badalabougou Est., Bamako. +223-(0)-78175387</p>
                </div>
                <div>
                  <h4>tanzania</h4>
                  <p>
                    Mbezi Beach, P.O.B: 70339, Dar Salaam +255-(0)-222120119
                  </p>
                </div>
                <div>
                  <h4>togo</h4>
                  <p>10, E rue des Echis, Lome +228-(0)-22229600</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactSales;

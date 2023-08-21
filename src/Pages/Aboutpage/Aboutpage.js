import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './Aboutpage.css'
import about from './AboutImages/about.jpg'
import image4 from './AboutImages/image4.png'
import image5 from './AboutImages/image5.png'
import image6 from './AboutImages/image6.png'
import trust from '../Homepage/Images/trust.png'
function Aboutpage() {
  return (
    <div className='thirdmaincontainer'>
      <div>
        <Navbar />
      </div>
      <div className='eleventh-container'>
        <div className='about-image'>
          <img src={about} />
        </div>
        <div className='aboutpara'>
          <h3>ABOUT US</h3>
          <p>M Investment is a rising, evolving & enterprising group with its' roots in the
            financial product distribution services expanding into newer boundaries with great
            passion. We are certified Wealth Manager, Mutual Fund Distributor and Insurance
            consultants recognized by the NSE - National Stock Exchange, BSE - Bombay
            Stock Exchange, AMFI - Association of Mutual Fund of India.</p>

          <p>Established in the year 2008 by Dr.Jaimin Gandhi & now M Investment is one of
            the leading financial service providers & distributors.</p>

          <p>We help people to achieve their financial goals with effective and smart investment planning.</p>

          <p>We use our complete knowledge of insurance, tax laws, and mutual fund investments to
            suggest investment options to the clients, as per their longterm and short-term goals.</p>

          <p>Operating from Deesa, Gujarat, we have 1000+ clients using our financial services
            & advisory across major cities in India.</p>

        </div>
      </div>
      <div className='twelvwthcontainer'>
        <div className='about4'>
          <img src={image4} /><br></br>
          <h2>500+</h2>
          Clients/Investor
        </div>
        <div className='about5'>
          <img src={image5} /><br></br>
          <h2>200+</h2>
          Client Reviews
        </div>
        <div className='about6'>
          <img src={image6} /><br></br>
          <h2>11+</h2>
          Experience
        </div>

      </div>
      <div className='thirteenthcontainer'>
        <div className='thirtheenth-image'>
          <img src={trust} />
        </div>
        <div className='thirteenth-para'>
          <h3>Why We Are Most Trusted Brand</h3>

          <p>Unbeaten Research Capability<br></br>
          We spot multibaggers that helps you create wealth.</p>
          <p>Trust & Transparency<br></br>
          Our community continuously grows due to our transparency and honesty.</p>
          <p>One Stop Investment Solutions<br></br>
          One stop destination for all financial products.</p>
          <p>Streamline Investments<br></br>
          Scientific perspective to achieve financial well-being of our customers.</p>
          <p>Best Services<br></br>
          Our team is highly committed to provide the best service to our esteemed customers.</p>

        </div>

      </div>
      <div className='fourteenthpara'>
        <h1>How M Investment Is Different from Other Distributors</h1>

        <p>We feel delightful in calling ourselves “Gujarat Best Distributors to Middle Class Indians”</p>

        <p>5 Thumb Elements Where We Differentiate from Other Distributors</p>

        <p>Risk Desire & Investors Age – Our funda work like higher the age, lower the risk & viceversa.
          Family Members – This works like higher the family income, higher the risk plate. Further
          we combined with certain other variables and looked at on a case to case basis.
          Analysis OF Market Conditions – There are various variable like PE , P/BV, and dividend
          yields which help us decide in 'favour of' or 'against equity'.
          Other Global Factors – Factors like international oil prices and domestic
          and international interest rates are given enough weightage.</p>

      </div>
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default Aboutpage
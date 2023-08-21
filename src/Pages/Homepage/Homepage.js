import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './Homepage.css'
import Footer from '../../Footer/Footer'
import intro from './Images/intro.jpg'
import trust from './Images/trust.png'
import invest from './Images/invest.jpg'
import image1 from './Images/image1.png'
import image2 from './Images/image2.png'
import image3 from './Images/image3.png'
import image4 from './Images/image4.png'
import image5 from './Images/image5.png'
import image6 from './Images/image6.png'


function Homepage() {
  return (
    <div className='maincontainer'>
      <div>
        <Navbar />
      </div>
      <div className='firstcontainer'>
        <div className='intro-para-container'>
          <h1>Welcome To Our Website</h1>
          <p>We Make You Financially Ready for Long  Happy Life
          </p>
          <p>With M Investment Experience A Hassle-Free Financial Journey. Diversify Your Financial Matters with Us.
          </p>

        </div>
        <div className='intro-image-container'>
          <img src={intro} />
        </div>

      </div>
      <div className='secondcontainer'>
        <h2>Who is M Investment?</h2>
        <p>Founded by Dr.Gandhi who is AMFI certified & registered in year 2015
          started individually, & now it’s almost 12 years old partnership firm that not
          only looks into your financial needs but also helps you diversify your investment
          needs with range of various financial products.</p>

        <p>M Investment is one of the leading financial service providers & MF distributors.
          Operating from Deesa, Gujarat, we have clients using our financial services &
          advisory across major cities in India.
        </p>

      </div>
      <div className='thirdcontainer'>
        <div className='trustimage'>
          <img src={trust} />
        </div>
        <div className='ourspecialization'>
          <h3>Our Specialization</h3>
          Mutual Funds Investment<br></br>
          All types of Insurance solutions<br></br>
          Equity Investment<br></br>
          Real Estate Investment<br></br>
          Financial Product Distribution<br></br>
        </div>

      </div>
      <div className='fourth-heading'><h1>How M Investment Help You with Investment?</h1></div>
      <div className='fourthcontainer'>
        <div className='container1'>
          <h3>Your Objective</h3>
          <p>Have a financial goal in your mind? Get customized advice &
            products across investments, goals, expenses, insurance, loans,
            estate planning, and taxes.</p>
        </div>
        <div className='container2'>
          <h3>Execution Of Your Objective</h3>
          <p>Implement your customized advice by buying all the
            recommended financial products on one single platform.</p>
        </div>
        <div className='container3'>
          <h3>Proper Management</h3>
          <p>Track your journey and review your investments
            to make sure they are aligned with your goals.</p>
        </div>

      </div>
      <div className='fifthcontainer'>
        <div className='investimage'>
          <img src={invest} />
        </div>
        <div className='fifthcontainer-para'>
          <h2>Why Use M Investment Services For Investment?</h2>
          AMFI Certified & Registered Distributor<br></br>
          Partnered with top AMCs<br></br>
          Hassle-free Investing & tracking<br></br>
          Gujarat largest financial Marketplace & Distributors with trust of 1000+ customers<br></br>
          Complete Transparency<br></br>
          Tailors your portfolio to your wishes & lifegoals<br></br>
          We help you choose using research tactics & analysis that matters for your business & personal goals.<br></br>

        </div>

      </div>
      <div className='sixth-heading'>
        <h1>What Are Your Financial Goals?</h1>
        <h4>Everyone has various financial goals which is to be achieved for leading a beautiful and hassle-free life.</h4>
      </div>
      <div className='sixthcontainer'>
        <div className='image1'>
          <img src={image1} /><br></br>
          Wealth Making
        </div>
        <div className='image2'>
          <img src={image2} /><br></br>
          Invest to own a home
        </div>
        <div className='image3'>
          <img src={image3} /><br></br>
          Invest for child future
        </div>
        <div className='image4'>
          <img src={image4} /><br></br>
          Invest for my holidays
        </div>

        <div className='image5'>
          <img src={image5} /><br></br>
          Invest for my retirement
        </div>
        <div className='image6'>
          <img src={image6} /><br></br>
          Invest for saving taxes
        </div>
        


      </div>
      <div className='seventhcontainer'>
      <button>Need Expert Advice</button>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Homepage
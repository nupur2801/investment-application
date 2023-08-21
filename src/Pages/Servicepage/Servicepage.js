import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './Servicepage.css'
import image1 from './Assets/image1.png'
import image2 from './Assets/image2.png'
import image3 from './Assets/image3.png'
import image4 from './Assets/image4.png'
import image5 from './Assets/image5.png'
import image6 from './Assets/image6.png'
import Footer from '../../Footer/Footer'

function Servicepage() {
  return (
    <div className='secondmaincontainer'>
      <div>
        <Navbar />
      </div>
      <div className='seventhcontainer'>
        <h1>What We Offer To You ?</h1>
        <p>
          If you are looking for the right financial elements, you are
          at the right place. Starting from mutual funds to insurance
          and from real estate to other financial products, we have them all.
        </p>
      </div>
      <div className='eighthcontainer'>
        <div className='Image1'>
          <img src={image1} /><br></br>
          <h3> Mutual Funds</h3>
          <p>We have all the mutual fund schemes on offer by
            virtually all the Asset Management Companies (AMCs) in the country.</p>
        </div>
        <div className='Image2'>
          <img src={image2} /><br></br>
          <h3> Life Insurance</h3>
          <p>Experience quality risk advisory and management services with our
            insurance solutions. We offer the best of risk management advisory available in insurance.</p>
        </div>

        <div className='Image3'>
          <img src={image3} /><br></br>
          <h3> General Insurance</h3>
          <p>We offers a wide range of general insurance solutions including Motor, Travel,
            Home and more that are designed to fit every need, every minute, and every situation.</p>
        </div>
      </div>
      <div className='ninethcontainer'>
        <div className='Image4'>
          <img src={image4} /><br></br>
          <h3> Health Insurance</h3>
          <p>We provide extensive coverage in terms to medical expenses, subject to
            the scope of coverage as defined within the policy wordings.</p>
        </div>

        <div className='Image5'>
          <img src={image5} /><br></br>
          <h3>Real Estate </h3>
          <p>In addition to financial products, we also offer access to real estate
            properties as investment opportunities to our clients.</p>
        </div>

        <div className='Image6'>
          <img src={image6} /><br></br>
          <h3> Stock Broking</h3>
          <p>We also offer our clients with EWealth A/c services through one of the India's
            leading & highly reputed distribution houses.</p>
        </div>



      </div>
      <div className='tenthcontainer'>
        <h4>Our Services</h4>
        <p>If you are looking for the right financial elements, you are at the right place.
          Starting from mutual funds to insurance and from real estate to other financial products, we have them all.</p>

        <p>Mutual Funds - We have all the mutual fund schemes on offer by virtually
          all the Asset Management Companies (AMCs) in the country.</p>

        <p>Life Insurance - Experience quality risk advisory and management services with
          our insurance solutions. We offer the best of risk management advisory available in insurance.</p>

        <p>General Insurance – We offers a wide range of general insurance solutions including Motor,
          Travel, Home and more that are designed to fit every need, every minute, and every situation.</p>

        <p>Health Insurance – We provide extensive coverage in terms to medical expenses, subject to
          the scope of coverage as defined within the policy wordings.</p>

        <p>Real Estate - In addition to financial products, we also offer access to real estate properties
          as investment opportunities to our clients.</p>

        <p>Stock Broking - We also offer our clients with EWealth A/c services through one of the India's
          leading & highly reputed distribution houses.</p>

      </div>
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default Servicepage
import React from 'react'
import './Footer.css'
import Phone from './ImagesF/Phone.png'
import Email from './ImagesF/Email.png'
import Location from './ImagesF/Location.png'
function Footer() {
  return (
    <div className='footer'>
        <div className='phonenumber'>
          <img src={Phone} /><br></br>
          Phone Number<br></br> 9027892701</div>
        <div className='email'>
          <img src={Email} /><br></br>          
          Email<br></br>minvest@001gmail.com</div>
        <div className='address'>
          <img src={Location} /><br></br>
          Address<br></br>02, Hardik complex, opp.
          Tin Hanuman Tempel,
          Highway-387535</div>
      </div>
  )
}

export default Footer
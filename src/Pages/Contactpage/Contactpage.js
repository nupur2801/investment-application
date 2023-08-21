import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './Contactpage.css'
import Footer from '../../Footer/Footer'
import location from './ImagesC/location.png'
import email from './ImagesC/email.png'
function Contactpage() {
  return (
    <div className='fourth-maincontainer'>
      <div>
        <Navbar />
      </div>
      <div className='fifteenthcontainer'>
        <div className='formcontainer'>
          <form>
            <h2> Have A Question ?</h2>
            <h3>Get In Touch</h3>
            <input type='text' name='name' placeholder='Name'></input><br></br>
            <input type='email' name='email' placeholder='Email'></input><br></br>
            <input type='text' name='name' placeholder='Company'></input><br></br>
            <input type='number' name='phone' placeholder='Phone'></input><br></br>
            <input type='textarea' name='Message' placeholder='Message'></input><br></br>
            <button>Submit Message</button>
          </form>

        </div>
        <div className='fifteenth-paracontainer'>
          <h4>CONTACT US</h4>
          <h1>Request a call back</h1>
          <p>Feel free to get in touch with us. We are always open to
            discussing new offers, creative ideas or opportunities to be
            part of your visions</p>
          <div className='locemail'>
            <div className='location'>
              <img src={location} /><br></br>
              <h2>Office Address</h2>
              02, Hardik complex, opp.
              Tin Hanuman Tempel,
              Highway-387535
            </div>
            <div className='emailaddress'>
            <img src={email} /><br></br>
              <h2>Email Address</h2>
              invest@001gmail.com
              9087986540
              8978654320
            </div>
          </div>

        </div>
      </div>
      <div className='sixteenth-container'>
        <h2>DISCLAIMER</h2>
        <p>Investing/Trading in stock market is subject to market risks and there is no assurance 
          or guarantee of returns - neither the principal nor the appreciation of the investments.
           The content/Education Provided by institute or the mentors or their assigns is solely for 
           general interest, educational purposes & reader's information. All participants are requested
            to seek independent and expert opinions before acting on anything mentioned in this course/program.
             We are not liable or responsible for any decision taken by the participant solely based on the
              information provided here. All information/views/opinions in the course/program are our
               interpretation and we cannot be held responsible for any miscommunication, misinformation
                or any action taken by an individual or group based on the course/program. By enrolling and 
                accessing the program/course, you accept the “Disclaimer”, without limitation or qualification. 
                On viewing this disclaimer, you understand and acknowledge that there is a very high degree of risk 
                involved if the information is misinterpreted. As stipulated by law, the institute cannot and does not 
                make any guarantees about your ability to get results or earn any money with ideas, information, tools, or 
                strategies from the course/ program. The participant should know that all the ideas, information,
                 tools, or strategies shared during the course/program are for educational and informational
                  purpose only. M-INVEST ONE STOP INVESTMENT SOLUTION, MANISH Patel and her team are neither 
                  responsible nor liable for any losses resulting from the investments. You alone are responsible 
                  and accountable for your decisions, actions, and results in life, and by your registration here 
                  you agree not to attempt to hold us liable for your decisions, actions, or results, at any time,
                   and under any circumstance.</p>

      </div>
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default Contactpage
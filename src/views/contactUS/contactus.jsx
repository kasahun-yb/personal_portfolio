import React from 'react'
import './contactus.css'
import Telegram from 'remixicon-react/TelegramFillIcon';
import Linkdin from 'remixicon-react/LinkedinFillIcon';
import Github from 'remixicon-react/GithubFillIcon';
import Youtube from 'remixicon-react/YoutubeFillIcon';
import Facebook from 'remixicon-react/FacebookFillIcon';
import  Google  from 'remixicon-react/GoogleFillIcon';
function Contactus() {
    const currentYear = new Date().getFullYear();
  return (
     <div className=" contactMajor">
   <center>  <h2>Contact Us</h2></center>
     <div className='Contactus'> 
     <div className="contactleft">
        <ul>
            <h3>Contact us with</h3>
            <li>Phone number <a href="#">+251900245178</a></li>
            <li>Fax <a href="#">+25112345678</a></li>
            <li>Email <a href="#">Abushmeta@gmail.com</a></li>
            <li>Address  <a href="#">Mexico Debrework Tower </a> <button className=' btn2'>Directions</button></li>
        </ul>

        <div className="socialMedia">
        <h3>Contact us with Social Media</h3>
        <ul>
  <li className='telegram contact'> <Telegram className='socialmedia_icon ' color='white'/></li>
  <li className='linkdin contact'>  <Linkdin className='socialmedia_icon ' color='white'/></li>
  <li className='github contact'> <Github className='socialmedia_icon ' color='white'/></li>
  <li className='youtube contact'> <Youtube className='socialmedia_icon ' color='white'/></li>
  <li className='facebook contact'> <Facebook className='socialmedia_icon ' color='white'/></li>
  <li className='google contact'> <Google className='socialmedia_icon ' color='white'/></li>
</ul>
        </div>
        
    </div>
    <div className="contactright">
    <h3>Direct Emaill tom Me  </h3>
        <form action="" method="post">
            <label htmlFor="">
                <p>Emaill</p>
                <input type='Emaill' placeholder='Emaill'/>
            </label>
            <label htmlFor="">
                <p>Message</p> 
                <textarea  placeholder='Message...'  cols={28}  />
            </label>
            <input className='input' type="submit" />
        </form>
    </div>
   
    </div>
    <center><h6>All right is Reserved @ {currentYear}</h6></center>
    </div>
  )
}

export default Contactus
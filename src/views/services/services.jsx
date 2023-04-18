import React from 'react'
import '../container.css'
import './services.css'
import AppIcon from 'remixicon-react/CommandFillIcon';
import Web from 'remixicon-react/Html5LineIcon';
import Window from 'remixicon-react/Window2FillIcon';
import Hosting from 'remixicon-react/ServerLineIcon';
function Services() {
  return (
    <div className='container'>
        <div className="blue_servies">
          
        <center><h2>Services</h2></center>

<div className="servies">

<div className="card_design">
    <AppIcon enableBackground={true}  className='icon'/>
    <h4>Mobile App Design and Development</h4>
    <p>We can design and develop clean, scalable, and customized cross-platform and native mobile apps that fulfill your business requirements.</p>
    <button className='btn btn1'>Read More</button>
</div>
<div className="card_design">
    <Web className='icon' />
    <h4>Website Design and Development</h4>
    <p>We can design and develop clean, scalable, responsive, and customized websites that fulfill your business requirements. Let's discuss your needs.</p>
    <button className='btn btn1'>Read More</button>
</div>
<div className="card_design">
    <Window className='icon'/>
    <h4>Desktop App Design and Development</h4>
    <p> We can design and develop clean, scalable, and customized cross-platform and native desktop apps that fulfill your business requirements.</p>
    <button className='btn btn1'>Read More</button>
</div>
<div className="card_design">
    <Hosting className='icon'/>
    <h4>Hosting Website and Maintenance</h4>
    <p>We can host your website on different clouds and provide maintenance services to keep your website up and running smoothly. contact with us!</p>
   <button  className='btn btn1'>Read More</button>
</div>

    


</div>

        </div>
    </div>
  )
}

export default Services
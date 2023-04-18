import React,{useState,useEffect} from 'react'
import './Appbar.css'
import AlertLineIcon from 'remixicon-react/ArrowDropDownLineIcon';
import '../../views/container.css'
function Appbar() {
 
    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const handleScroll = () => {
        setSticky(window.pageYOffset > 0);
      };

 

  return (
   <div className="major_container">
<div className='container' >
    <div className={isSticky==false?'navigation':'navigation_add_fixed'}>
    <div className='logo'>Logo</div>
    <div className='menu'>
        <ul className='ul_style'>
            <li ><a href="#">Home</a></li>
            <li><a href="#">AboutUs</a></li>

            <li> <a className='service_' href="#"><div>Services</div><AlertLineIcon /></a>
               <ul className='detail_service'>

               {/* for Mobile Development */}
                   <li className='web_style'>
                    <div>
                        <h4>Mobile Development</h4>
                        <ul className='major'>
                            <li>Cross platform </li>
                            <li>Android Mobile </li>
                            <li>Ios Mobile </li>
                            <li>Blackbary Mobile </li>
                        </ul>
                </div> </li>
           
           {/* for we design and development */}


                <li className='web_style'>
                    <div>
                    <h4>Web Design and Development</h4>
                    <ul className=''>
                        <li>
                            <h5>UX/Ui Design</h5>
                             <ul className='major'>
                             <li>Figma Design </li>
                             <li>AdobeXd Design </li>
                             <li>Uizard Design </li>
                             </ul>
                        </li>
                        <li>
                           
                             <ul className=''>

                             <li>
                                <h5>Frontend web development</h5> 
                                <ul className='major' >
                                <li>Rectjs</li>
                                <li>Vitejs </li>
                                <li>Nextjs</li>
                                <li>Tailwind css</li>
                                <li>Rebass</li>
                                </ul>
                             
                             </li>
                             <li>
                                <h5>Backend web development</h5> 
                                <ul className='major'>
                                <li>Nodejs</li>
                                <li>Jango </li>
                                <li>Php</li>
                                </ul>
                             
                             </li>
                             <li>
                                <h5>Wordpress Develpment</h5>

                             </li>
                         
                             </ul>
                        </li>
                    </ul>
                    
                    </div>
                    </li>

                <li className='web_style'><div><h4>Hosting</h4>
                 <ul className='major'>
                 <li>Yegera Hosting</li>
                 <li>Firebase Hosting</li>
                 <li>Netlify Hosting</li>
                 <li>Zero Hosting</li>

                 </ul>
                </div></li>
            </ul> </li>

            <li><a className='service_' href="#"><div>Tutorial</div><AlertLineIcon /></a> 
              <ul className='detail_service '>
              
              <li className='web_style'> <div className="">
              <h4 className=''>Website and Mobile App Tutorial</h4>
                <ul className='major'>
                 <li>Android Tutorial</li>
                  <li>Website Tutorial</li>
                  <li>Desktop Tutorial</li>
                  <li>Hosting Turotial</li>
                 </ul>
                </div></li>
                </ul> </li>
            <li><a href="#">Contact Us</a></li>
          
        </ul>
        <div className='circle'></div>

    </div>
   </div>
   <div className='shadow'></div>
   </div>
   </div>
  )
}

export default Appbar


import React from 'react'
import Telegram from 'remixicon-react/TelegramFillIcon';
import Linkdin from 'remixicon-react/LinkedinFillIcon';
import Github from 'remixicon-react/GithubFillIcon';
import Youtube from 'remixicon-react/YoutubeFillIcon';
import Facebook from 'remixicon-react/FacebookFillIcon';
import './sidecontact.css'
function Sidecontact() {
  return (
  <div className="right_socialmedia">
<ul>
  <li className='telegram'><p>Telegram</p> <Telegram className='socialmedia_icon ' color='white'/></li>
  <li className='linkdin'> <p>Linkdin</p>  <Linkdin className='socialmedia_icon ' color='white'/></li>
  <li className='github'> <p>Github</p> <Github className='socialmedia_icon ' color='white'/></li>
  <li className='youtube'> <p>Youtube</p><Youtube className='socialmedia_icon ' color='white'/></li>
  <li className='facebook'> <p>Facebook</p><Facebook className='socialmedia_icon ' color='white'/></li>

</ul>

  </div>
  )
}

export default Sidecontact
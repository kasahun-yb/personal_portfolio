
import Appbar from './views/app_bar/appbar'
import Contactus from './views/contactUS/contactus'
import Intro_page from './views/intro/intro'
import Services from './views/services/services'
import Sidecontact from './views/sideContact/sidecontact'
import Tutorial from './views/tutorial/tutorial'


function App() {
  
  return (
    <div className="App">

         <Appbar/>
         <Intro_page/>
         <Services/>
         <Sidecontact/>
         <Tutorial/>
         <Contactus/>
       

    </div>
  )
}

export default App

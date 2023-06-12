import { Route } from './components/Route'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Construction } from './pages/Construction'
import { Railway } from './pages/Railway'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'

const App = () => {

  return (
    <div className="flex flex-col items-center whitespace-pre-wrap bg-gradient-to-b from-white to-stone-200 relative ">
      {/* <div className="flex flex-col items-center min-h-screen relative"> */}

      <Navbar />
 
        
        {/* <div className="m-auto" > */}
        <Route path="/" > <Home/></Route>
        <Route path="/about" > <About/></Route>
        <Route path="/contact" > <Contact/></Route>
        {/* <Route path="/references" > <References/></Route> */}
        <Route path="/construction" > <Construction/></Route>
        <Route path="/railway" > <Railway/></Route>
        {/* </div> */}
        <Footer/>
      {/* </div> */}
    </div>
  )
}

export default App

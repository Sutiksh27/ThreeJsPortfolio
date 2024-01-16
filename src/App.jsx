import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";
import { useEffect, useState } from "react";

const App = () => {
  const [render, setRender] = useState(false)
  useEffect(()=>{
    setTimeout(function() {
      setRender(true)
    }.bind(this), 1000)
  })
  return (
    <BrowserRouter>
      <div>
        3D Developer Portfolio
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>
          {render?<StarsCanvas/>:<></>}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, StarsCanvas, EarthCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div>
          <Navbar />
          <StarsCanvas />
          <Hero />
        </div>
        <About />
        <Experience />
      </div>
    </BrowserRouter>
  );
}

export default App;

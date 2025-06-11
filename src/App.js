import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Hero from './componants/Hero/Hero';
import Main from './componants/Main/Main';
import Works from './componants/Works/Works';
import HorizontalScroll from './componants/HoriScroll/HoriScroll';
import AutoScroller from './componants/AutoScroller/AutoScroller';
import Contact from './componants/Contact/Contact';
import AboutMe from './componants/AboutMe/AboutMe';
import { useEffect } from 'react';
import HighlightWords from './componants/AboutMe/Aboutme2';
import Hero2 from './componants/Hero/Hero2';

function App() {

  
  

  return (
    <div className="App">
      
      <Hero2/>
      {/* <Navbar/> */}
      {/* <Main/> */}
      {/* <AboutMe/> */}
      <HighlightWords/>

      {/* <HorizontalScroll/> */}
      <Works/>
      {/* <AutoScroller/> */}
      <Contact/>

    </div>
  );
}

export default App;

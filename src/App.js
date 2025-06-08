import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Hero from './componants/Hero/Hero';
import Main from './componants/Main/Main';
import Works from './componants/Works/Works';
import HorizontalScroll from './componants/HoriScroll/HoriScroll';
import AutoScroller from './componants/AutoScroller/AutoScroller';

function App() {

  
  return (
    <div className="App">
      
    
      <Main/>
      {/* <HorizontalScroll/> */}
      <Works/>
      <AutoScroller/>

    </div>
  );
}

export default App;

import React, { useEffect, useRef } from 'react'
import { general } from '../../general'
import './hero.css'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import Navbar from '../Navbar/Navbar';


function Hero() {
  const textRef3 = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const imgref = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (textRef3.current) {
      const split3 = new SplitText(textRef3.current);

      gsap.from(split3.chars, {   // Usually you animate split3.chars or split3.words, not split3 itself
        duration: 1,
        y: 300,
        ease: "power2.out",
        delay: 0.2,
        stagger: 0.05,           // optional stagger for nice effect
        // opacity: 0               // you can also add opacity animation
      });

     
    }
    if (textRef1.current) {
      const split1 = new SplitText(textRef1.current);

      gsap.from(split1.chars, {   // Usually you animate split3.chars or split3.words, not split3 itself
        duration: 1,
        y: 20,
        ease: "power2.out",
        delay: 0.4,
                   // optional stagger for nice effect
        // opacity: 0               // you can also add opacity animation
      });

      
    }
    if (textRef2.current) {
      const split2 = new SplitText(textRef2.current);

      gsap.from(split2.chars, {   // Usually you animate split3.chars or split3.words, not split3 itself
        duration: 1,
        y: 20,
        ease: "power2.out",
        delay: 0.6,
                  // optional stagger for nice effect
        // opacity: 0               // you can also add opacity animation
      });

      
    }


    if (btnRef.current) {

      gsap.to(btnRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      });

      
    }

     
      
    
  }, []);

  return (
    <>
    
    <div className='Hero'>
        <div className="Heroleft">
          {/* <div className="HeroLeft1" ref={textRef1}>HELLO, I'M</div> */}
          <div className="HeroLeft2" ref={textRef3}>{general.name}</div>
          {/* <div className="HeroLeft3" ref={textRef2}>MODERN . MINIMAL . WEB DEVELOPER.</div> */}
          {/* <img src="profilepic2.jpg" ref={imgref} alt="" className="HeroRightImg2" /> */}

        </div>
        <span className='heroRightDiv'>
          <button className="HeroRight" ref={btnRef}>
            SEE MY WORKS
          </button>
        </span>
              
    </div>
  
    </>
  )
}

export default Hero
import React, { useEffect, useRef } from 'react'
import './navbar.css'
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { general } from '../../general';

function Navbar() {

  const textRef1 = useRef()
  const textRef2 = useRef()
  
  const btnRef = useRef()

  const navRef = useRef()

  useEffect(() => {
      const split1 = new SplitText(textRef1.current, { type: "chars" });
      const split2 = new SplitText(textRef2.current, { type: "chars" });
      
      
      
      gsap.from(split1.chars, {
        duration: 1,
        // opacity: 0,
        y: 100,
        // stagger: 0.1,
        ease: "power2.out"
      });

        gsap.from(split2.chars, {
        duration: 1,
        // opacity: 0,
        y: 100,
        // stagger: 0.1,
        ease: "power2.out",
        delay: 0.2
      });

      gsap.fromTo(btnRef.current, {
        duration: 1,
        // opacity: 0,
        y:-100,
        ease: "power2.out",
        delay: 0.4
      }, {
        y: 0
      });
      

  }, []);

  return (
    <div className='Navbar' ref={navRef}>
      
      <div className="leftNav" ref={btnRef}>
        <button className='btn' ref={textRef1}>LET'S WORK</button>
      </div>
      <div className="rightNav" ref={textRef2}>
        <button className="navBtns navBtn1">WORKS</button>
        <button className="navBtns navBtn2">TESTIMONIALS</button>
        <button className="navBtns navBtn3">CONTACT</button>
      </div>
      <div className="mid"></div>
    </div>
  )
}

export default Navbar
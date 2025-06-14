import React, { useEffect, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import { general } from '../../general'
import './hero2.css'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

function Hero2() {

  const textRef1 = useRef()
    const textRef2 = useRef()
    const textRef3 = useRef()
    const imgRef = useRef()
    
  
  
    useEffect(() => {
        const split1 = new SplitText(textRef1.current, { type: "chars" });
        const split2 = new SplitText(textRef2.current, { type: "chars" });
        const split3 = new SplitText(textRef3.current, { type: "chars" });
        
        
        
        gsap.from(split1.chars, {
          duration: 1,
          // opacity: 0,
          y: 30,
          // stagger: 0.1,
          ease: "power2.out",
          delay: 0.2
        });
  
          gsap.from(split2.chars, {
          duration: 1,
          // opacity: 0,
          y: 30,
          // stagger: 0.1,
          ease: "power2.out",
          delay: 0.4
        });

          gsap.from(split3.chars, {
          duration: 1.5,
          // opacity: 0,
          x: 300,
          // stagger: 0.1,
          ease: "power2.out",
          delay: 0.6
        });

        gsap.fromTo(imgRef.current, {
          duration: 2.5,
          // opacity: 0,
          x: 1000,
          ease: "power2.out",
          delay: 0.8
        }, {
          x: 0
        });
  
        
  
    }, []);

  return (
    <div className='Hero2'>

        <div className="Hero2Left">
            <div className="Hero2LeftTop">
                <Navbar/>
            </div>
            <div className="Hero2LeftBottom">
                
                <h1 className="Hero2LeftBottomText1" ref={textRef3}>{general.name}</h1>
                <ul className="Hero2LeftBottomText2">
                    <li ref={textRef1}>web developer</li>
                    <li ref={textRef2}>ai/ml developer</li>
                </ul>
            </div>
        </div>

        <div className="Hero2Right">
          <img ref={imgRef} src="profilepic3.jpg" alt="" className="Hero2RightImg" />
          
        </div>

    </div>
  )
}

export default Hero2
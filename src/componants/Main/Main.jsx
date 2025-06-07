import React, { useEffect, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import "./main.css"
import gsap from 'gsap'

function Main() {

    const imgref = useRef()

    useEffect(() => {
      gsap.fromTo(imgref.current, {
        x: 600,
        opacity: 0,
        // stagger: 0.1,
        ease: "ease.inOut"
      }, {
        x: 0,
        opacity: 1,
        duration: 1.5,
      })
    }, [])
    

  return (
    <div className='main'>

        <div className="mainLeft">
            <Navbar/>
            <Hero/>
        </div>

        <div className="mainRight">
          <img src="profilepic2.jpg" ref={imgref} alt="" className="HeroRightImg" />
        </div>

    </div>
  )
}

export default Main
import React, { useEffect, useRef } from 'react'
import './aboutme.css'
import SplitType from 'split-type'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function AboutMe() {
  const textRef = useRef()

  useEffect(() => {
    const split = new SplitType(textRef.current, {
      types: 'chars',
    })

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
      },
      y: 80,
      opacity: 0,
      stagger: 0.03,
      duration: 0.6,
      ease: 'power2.out',
    })

    
  }, [])

  return (
    <div className='aboutme'>
      <h1 className='mainText' ref={textRef}>
        Hi, I’m a Web and AI/ML Developer passionate about building responsive web applications and intelligent systems that solve real-world problems.
      </h1>
    </div>
  )
}

export default AboutMe
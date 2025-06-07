import React, { useEffect, useRef } from 'react'
import './works.css'
import gsap from 'gsap'

function Works() {

    const mainRef = useRef()
    const headRef = useRef()


    useEffect(() => {
        gsap.to(headRef.current, {
            fontSize: '1rem',
            duration: 1,
            scrollTrigger: {
                trigger: headRef.current,  // <-- the element being scrolled
                start: "top 50%",
                // end: "top 20%",
                scrub: true,
                markers: true
            },
        })
    }, [])
    

  return (
    <div className='Works' ref={mainRef}>
        <div className="Worksheading" ref={headRef}>WORKS</div>
    </div>
  )
}

export default Works
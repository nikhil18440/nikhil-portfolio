import React, { useEffect, useRef } from 'react'
import './works.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Works() {
    const mainRef = useRef()
    const headRef = useRef()

    useEffect(() => {
        gsap.to(headRef.current, {
            width: '1rem',
            fontSize: '0.5rem', // Optional: shrink font size as well
            duration: 0.5,
            scrollTrigger: {
                trigger: mainRef.current,
                start: 'top center',
                end: "center 20%",
                scrub: true,
                // markers: true
            }
        })
    }, [])

    return (
        <div className='Works' ref={mainRef}>
            <div className="Worksheading" ref={headRef}>WORKS</div>
           
            <div className="sliderList">
                <div className="item"><img className='itemImg' src="man.jpg" alt="" /></div>
                <div className="item"><img className='itemImg' src="man.jpg" alt="" /></div>
                <div className="item"><img className='itemImg' src="man.jpg" alt="" /></div>
                <div className="item"><img className='itemImg' src="man.jpg" alt="" /></div>
            </div>

        </div>
    )
}

export default Works

import React, { useEffect, useRef, useState } from 'react'
import './works.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


function Works() {
    const mainRef = useRef()
    const headRef = useRef()

    const sliderRef = useRef()
    const wrapref = useRef()

    const [sliderWidth, setSliderWidth] = useState(0)

    const [amountToScroll, setAmountToScroll] = useState(0)

    useEffect(() => {
        if (sliderRef.current) {
            setSliderWidth(sliderRef.current.offsetWidth)
            setAmountToScroll(sliderWidth - window.innerWidth);
        }
  }, []); 


    useEffect(() => {
        gsap.fromTo(headRef.current,
            
            {
                fontSize: '23rem',
            },
            {
            // width: '1rem',
            fontSize: '0.5rem', // Optional: shrink font size as well
            // duration: 0.5,
            scrollTrigger: {
                trigger: headRef.current,
                start: 'top center',
                end: "bottom center",
                scrub: true,
                // markers: true
            }
        })

    }, [])

    return (
        <div className='Works' ref={mainRef}>
            <div className="Worksheading" ref={headRef}>WEB APPS</div>
           
            <div className="sliderListWrapper" ref={wrapref}>
                <div className="sliderList" ref={sliderRef}>

                    <div className="item">
                        <div className="ItemLeft">
                            <div className="ItemLeftTop">
                                <div className="itemTitle">jsjfhdhf</div>
                                <div className="itemDesc">lorem idskj sjdfjgf</div>
                            </div>
                            <div className="ItemLeftBottom">
                                knsdfndnf
                            </div>
                        </div>
                        <img className='itemImg' src="man.jpg" alt="" />
                    </div>
                    <div className="item">
                        <div className="ItemLeft">
                            <div className="ItemLeftTop">
                                <div className="itemTitle">jsjfhdhf</div>
                                <div className="itemDesc">lorem idskj sjdfjgf</div>
                            </div>
                            <div className="ItemLeftBottom">
                                knsdfndnf
                            </div>
                        </div>
                        <img className='itemImg' src="man.jpg" alt="" />
                    </div>
                    <div className="item">
                        <div className="ItemLeft">
                            <div className="ItemLeftTop">
                                <div className="itemTitle">jsjfhdhf</div>
                                <div className="itemDesc">lorem idskj sjdfjgf</div>
                            </div>
                            <div className="ItemLeftBottom">
                                knsdfndnf
                            </div>
                        </div>
                        <img className='itemImg' src="man.jpg" alt="" />
                    </div>
                    <div className="item">
                        <div className="ItemLeft">
                            <div className="ItemLeftTop">
                                <div className="itemTitle">jsjfhdhf</div>
                                <div className="itemDesc">lorem idskj sjdfjgf</div>
                            </div>
                            <div className="ItemLeftBottom">
                                knsdfndnf
                            </div>
                        </div>
                        <img className='itemImg' src="man.jpg" alt="" />
                    </div>
                    

                    
                </div>
                <button className="viewAllBtn">
                    View All
                </button>
            </div>

        </div>
    )
}

export default Works

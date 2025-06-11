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

    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        if (sliderRef.current) {
            setSliderWidth(sliderRef.current.offsetWidth)
            setAmountToScroll(sliderWidth - window.innerWidth);
        }
  }, []); 


    useEffect(() => {
        gsap.fromTo(headRef.current,
            
            {
                fontSize: '25rem',
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


    const GifItems = [
    {
        id: 1,
        staticImg: "man.jpg",
        gifImg: "sampleGif.gif",
    },
    {
        id: 2,
        staticImg: "man.jpg",
        gifImg: "sampleGif.gif",
    },
    {
        id: 3,
        staticImg: "man.jpg",
        gifImg: "sampleGif.gif",
    },
    ];


    return (
        <div className='Works' ref={mainRef}>
            <div className="Worksheading" ref={headRef}>WEB APPS</div>
           
            <div className="sliderListWrapper" ref={wrapref}>
                <div className="sliderList" ref={sliderRef}>

                    {
                        GifItems.map((item) => (
                    <div className="item" key={item.id} onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(0)}>
                        <div className="ItemLeft">
                            <div className="ItemLeftTop">
                                <div className="itemTitle">jsjfhdhf</div>
                                <div className="itemDesc">lorem idskj sjdfjgf</div>
                            </div>
                            <div className="ItemLeftBottom">
                                knsdfndnf
                            </div>
                        </div>
                        <img className='itemImg' src={hoveredId === item.id ? item.gifImg : item.staticImg  } alt="" />
                        {console.log(item.id, hoveredId)}
                    </div>
                        ))
                    }

                    
                    
                    

                    
                </div>
                <button className="viewAllBtn">
                    View All
                </button>
            </div>

        </div>
    )
}

export default Works

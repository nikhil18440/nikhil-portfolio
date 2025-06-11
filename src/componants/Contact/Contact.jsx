import React, { useEffect, useRef } from 'react'
import './contact.css'
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';

function Contact() {

  const textRef1 = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (textRef1.current) {
      const split1 = new SplitText(textRef1.current);

      gsap.from(split1.chars, {   // Usually you animate split3.chars or split3.words, not split3 itself
        duration: 1,
        y: 300,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef1.current,
          start: "top 80%",
          end: "bottom center",
          // markers: true
        },
        // delay: 0.2,
        stagger: 0.05,           // optional stagger for nice effect
        // opacity: 0               // you can also add opacity animation
      });
    }
  }, []);

  return (
    <div className='contact' ref={navRef}>
        <header className='mainHead' ref={textRef1}>LET'S TALK</header>

        <div className="content">
          <div className="left">

            <form className="emailForm">
                <input type="text" placeholder='YOUR NAME' name="name" className="inputDiv" />
                <input type="email" placeholder='EMAIL ID' name="email" className="inputDiv" />
                <textarea name="content" rows="5" placeholder='TELL ME HOW CAN I HELP' id="" className="textAreaDiv"></textarea>
                <button type='submit' className='formBtn'>SEND</button>
            </form>

        </div>
        {/* <div className="right">hi</div> */}
        </div>
    </div>
  )
}

export default Contact
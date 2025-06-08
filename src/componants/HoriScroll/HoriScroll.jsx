import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './horiScroll.css'; // Include your styles

gsap.registerPlugin(ScrollTrigger);

function HorizontalScroll() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });

    
  }, []);

  return (
    <div className="horizontal-container" ref={containerRef}>
      {[...Array(4)].map((_, i) => (
        <section
          className="panel"
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
        >
          Panel {i + 1}
        </section>
      ))}
    </div>
  );
}

export default HorizontalScroll;

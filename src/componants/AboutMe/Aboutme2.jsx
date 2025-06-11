import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './aboutme2.css';

gsap.registerPlugin(ScrollTrigger);

const HighlightWords = () => {
  const containerRef = useRef();

  useEffect(() => {
    const words = containerRef.current.querySelectorAll('.word');

    words.forEach((word) => {
      gsap.fromTo(
        word,
        {  color: '#d5d5d5' },
        {

          color: '#000',
          scrollTrigger: {
            trigger: word,
            start: 'top 60%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
          },
          duration: 0.3,
          ease: 'power1.out',
        }
      );
    });
  }, []);

  const text = "Hi, I’m a Web and AI/ML Developer passionate about building responsive web applications and intelligent systems that solve real-world problems.";

  // Split text into spans
  const renderWords = (text) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className="word" style={{marginRight: '0.5ch', display: 'inline-block' }}>
        {word}
      </span>
    ));
  };

  return (
    <div  className='aboutme2'>
      <div
        ref={containerRef}
        style={{ fontSize: '10rem'}}
        className='textDiv2'
      >
        {renderWords(text)}
      </div>
    </div>
  );
};

export default HighlightWords;

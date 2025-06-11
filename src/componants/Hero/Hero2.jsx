import React from 'react'
import Navbar from '../Navbar/Navbar'
import { general } from '../../general'
import './hero2.css'

function Hero2() {
  return (
    <div className='Hero2'>

        <div className="Hero2Left">
            <div className="Hero2LeftTop">
                <Navbar/>
            </div>
            <div className="Hero2LeftBottom">
                
                <h1 className="Hero2LeftBottomText1">{general.name}</h1>
                <ul className="Hero2LeftBottomText2">
                    <li >web developer</li>
                    <li>ai/ml developer</li>
                </ul>
            </div>
        </div>

        <div className="Hero2Right">
          <img src="profilepic3.jpg" alt="" className="Hero2RightImg" />
          
        </div>

    </div>
  )
}

export default Hero2
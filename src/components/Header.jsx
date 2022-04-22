import React from 'react'
import Typed from 'react-typed'
import CV from '../files/Profile.pdf'

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1>Web development and website services</h1>
            <Typed className='typed-text'
                strings={[
                    'Student in IT Brains Courses',
                    'Learning React',
                    'Want to be React Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                    <div/>
            </Typed>
            <a href={CV} className='download-cv'>Download CV</a>
        </div>
    </div>
  )
}

export default Header
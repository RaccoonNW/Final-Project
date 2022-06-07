import React, { useEffect, useState } from "react"
import { LandingImages } from "./LandingImages"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { NavLink } from "react-router-dom"

function LandingPage() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const length = LandingImages.length

    function toggleSlide(e) {
        if (e.target.id === 'right-arrow') {
            setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide +1)
        } else {
            setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide +1)
        }, 4000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    if (!Array.isArray(LandingImages) || length <= 0) {
        return null
    }

    return (
        <div className="landing-page-main">
            <div className="landing-page-header">
                <div className="landing-name">
                    <h1>Welcome To The App</h1>
                </div>
                <div className="landing-nav">
                    <NavLink className="nav-links" to="/login">Sign In</NavLink>
                    <NavLink className="nav-links" to="/signup">Sign Up</NavLink>
                </div>
            </div>
            <div className="statement-div">
                <p>The App makes customer management for your home service business easy. Track details about your customers and their properties all in one place.</p>
            </div>
            <div className="slider">
                <FaArrowAltCircleLeft id="left-arrow" className="left-arrow" onClick={toggleSlide} />
                <FaArrowAltCircleRight id="right-arrow" className="right-arrow" onClick={toggleSlide} />

                {LandingImages.map((slide, index) => {
                    return (
                        <div className={index === currentSlide ? "slide active" : slide} key={index}>
                            {index === currentSlide && (
                                <img src={slide.image} alt="cleaning" className="landingImage"/>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
    
    
export default LandingPage
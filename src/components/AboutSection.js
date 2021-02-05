import React from 'react';
import home1 from '../Image/home1.png';


const AboutSection =() =>
{
    return (
        <div>
            <div className = "description">
                <div className="title">
                    <div className="hide">
                        <h2>we work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>yout <span> dreams</span>come</h2>
                    </div>
                    <div className="hide">
                        <h2>True.</h2>
                        <p>Contact us for any photography or videography ideas you have. 
                            we have professionals with amazing skills to help to achieve it.
                        </p>
                        <button className="">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="image">
                
                <img src={home1} alt="person with camera"/> 
            </div>
        </div>


    )
}
export default AboutSection;
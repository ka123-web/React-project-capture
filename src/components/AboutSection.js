import React from 'react';
import home1 from '../Image/home1.png';
//styled
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../components/style';


const AboutSection =() =>
{
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>we work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span> dreams  </span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>True.</h2>
                        <p>Contact us for any photography or videography ideas you have. 
                            we have professionals with amazing skills to help to achieve it.
                        </p>
                        <button className="">Contact Us</button>
                    </Hide>
                </div>
            </Description>
            <Image>
                
                <img src={home1} alt="person with camera"/> 
            </Image>
        </About>


    )
}

export default AboutSection;
import React from 'react';
import home1 from '../Image/home1.png';
//import Framer Motion
import {motion} from 'framer-motion';
import {titleAnimation,fade, photoAnimation} from '../Pages/Animation';
import Wave from './Wave';


import {About, Description, Image, Hide} from '../components/style';


const AboutSection =() =>
{
   
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnimation}>we work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation} >
                            your <span> dreams  </span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>True.</motion.h2>
                        <motion.p variants = {fade}>Contact us for any photography or videography ideas you have. 
                            we have professionals with amazing skills to help to achieve it.
                        </motion.p>
                        <motion.button variants = {fade} className="">Contact Us</motion.button>
                    </Hide>
                </div>
            </Description>
            <Image >
                
                <motion.img variant={photoAnimation} src={home1} alt="person with camera"/> 
            </Image>
            <Wave/>
        </About>


    )
}

export default AboutSection;
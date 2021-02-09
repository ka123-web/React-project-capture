import React from 'react';
//import page components
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import {motion} from 'framer-motion';
import {pageAnimation} from '../Pages/Animation';

const AboutUs = () =>
{
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <AboutSection/>
        <ServiceSection/>
        <FAQSection/>
        </motion.div>

    )
}
export default AboutUs;
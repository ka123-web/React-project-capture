import React from 'react';
import {motion} from 'framer-motion';
import {pageAnimation} from '../Pages/Animation';

const contactUs =()=>
{
    return(
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" style = {{backgroud:"#fff"}}> 
            <h1>
            Contact Us
            </h1>
            
        </motion.div>
    )
}
export default contactUs;
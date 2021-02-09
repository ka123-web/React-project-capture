import React from 'react';
import athlete from '../Image/athlete-small.png';
import theracer from '../Image/theracer-small.png';
import goodtimes from '../Image/goodtimes-small.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {pageAnimation,fade,photoAnimation,lineAnimation,slider,sliderContainer} from './Animation';


const ourWork =()=>
{
    return(
        <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
           <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
            <Movie>
                <motion.h2 variants={fade}> The Athlete</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to ="/ourWork/the-athlete">
                <Hide>
                    <motion.img  variants ={photoAnimation} src={athlete} alt="athlete" />
                </Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h2 variants={fade}> The Racer</motion.h2>
                <motion.div variants={pageAnimation} className="line"></motion.div>
                <Link to ="/ourWork/the-racer">
                <motion.img variants ={photoAnimation} src={theracer} alt="theracer" />
                </Link>
            </Movie>
            <Movie>
                <motion.h2 variants={fade}> Good Times</motion.h2>
                <motion.div variants={pageAnimation} className="line"></motion.div>
                <Link to ="/ourWork/good-times">
                <motion.img variants ={photoAnimation} src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
        </Work>
    )
}
const Work = styled(motion.div)`
min-height:100vh;
overflow:hidden;
padding: 5rem 10rem;

`;

const Movie = styled(motion.div)`
padding-bottom:10rem;
padding: 1rem 0rem;
.line{
    height:0.5rem;
    background:#23d997;
    margin-bottom: 3rem;
}
.img{
    width:100%;
    height:70vh;
    object-fit: cover;
}

`
const Hide= styled.div`
overflow:hidden;
`;

//Framed Animations
const Frame1 = styled(motion.div)`
position:fixed;
left:0;
top:10%;
width:100%;
height:100vh;
background:#fffebf;
z-index:2;

`;

const Frame2 = styled(Frame1)`
background:#ff8efb;
`

const Frame3 = styled(Frame1)`
background:#8ed2ff;
`

const Frame4 = styled(Frame1)`
background:#8effe0;
`


export default ourWork;
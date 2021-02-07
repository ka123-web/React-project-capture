import React from 'react';
import athlete from '../Image/athlete-small.png';
import theracer from '../Image/theracer-small.png';
import goodtimes from '../Image/goodtimes-small.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const ourWork =()=>
{
    return(
        <Work> 
            <Movie>
                <h2> The Athlete</h2>
                <div className="line"></div>
                <Link to ="/ourWork/the-athlete">
                <img src={athlete} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2> The Racer</h2>
                <div className="line"></div>
                <Link to ="/ourWork/the-racer">
                <img src={theracer} alt="theracer" />
                </Link>
            </Movie>
            <Movie>
                <h2> Good Times</h2>
                <div className="line"></div>
                <Link to ="/ourWork/good-times">
                <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
        </Work>
    )
}
const Work = styled.div`
min-height:100vh;
overflow:hidden;
padding: 5rem 10rem;
`;

const Movie = styled.div`
padding-bottom:10rem;
padding: 1rem 0rem;
.line{
    height:0.5rem;
    background:#cccccc;
    margin-bottom: 3rem;
}
.img{
    width:100%;
    height:70vh;
    object-fit: cover;
}

`
export default ourWork;
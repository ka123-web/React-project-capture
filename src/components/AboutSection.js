import React from 'react';
import home1 from '../Image/home1.png';
//styled
import styled from 'styled-components';


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

//Styled Components
const About = styled.div `
min-height :90vh;
display: flex;
align-items:center;
justify-content:space space-between;
padding: 5rem 10 rem;
color:white;
`;
const Description = styled.div`
flex: 1;
padding-right: 5 rem ;
h2{
    font-weight:lighter;
}
`;
const Image = styled.div`
flex:1;
overflow:hidden;
img{
    width:100%;
    height: 80vh;
    object-fit:cover;
}
`;
const Hide = styled.div `
overflow:hidden;
`

export default AboutSection;
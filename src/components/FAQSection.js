import React,{useState} from 'react';
import  styled from 'styled-components';
import {About} from '../components/style';
import Toggle from '../components/Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import { useScroll } from "../components/UseScroll";
import { scrollReveal } from "../Pages/Animation";


const FAQSection = () =>
{
    const [element, controls] = useScroll();
    return(
        <Faq 
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden">
            <h2> Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How do i start">
                <div className="answer">
                    <p>this is a random text</p>
                </div>
            
            </Toggle>
            <Toggle title="Daily schedule">
           
                <div className="answer">
                    <p>this is a random text</p>
                </div>
           
            </Toggle>
            <Toggle title="Different payment method">
           
                <div className="answer">
                    <p>this is a random text</p>
                </div>
            
            </Toggle>
            <Toggle title="what products do you use">
           
                <div className="answer">
                    <p>this is a random text</p>
                </div>
            
            </Toggle>
            </AnimateSharedLayout>
        </Faq>

    )
}
const Faq = styled(About)`
display: block;
span{
    display:block;
}
h2{
    padding-bottom: 2rem;
    font-weight:lighter;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin:2rem 0rem;
    width:100%;

}
.question{
    padding:3 rem 0rem;
    cursor:pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding:1rem 0rem;
    }
}
`;

export default FAQSection;
import React from 'react';
import  styled from 'styled-components';
import {About} from '../components/style';

const FAQSection = () =>
{
    return(
        <Faq>
            <h2> Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do i start</h4>
                <div className="answer">
                    <p>this is a random text</p>
                </div>
                <div className="faq-line"></div>
            </div>

            <div className="question">
                <h4>Daily schedule</h4>
                <div className="answer">
                    <p>this is a random text</p>
                </div>
                <div className="faq-line"></div>
            </div>

            <div className="question">
                <h4>Different payment method</h4>
                <div className="answer">
                    <p>this is a random text</p>
                </div>
                <div className="faq-line"></div>
            </div>

            <div className="question">
                <h4>what products do you use</h4>
                <div className="answer">
                    <p>this is a random text</p>
                </div>
                <div className="faq-line"></div>
            </div>
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
    height: 0.2 rem;
    margin:2rem 0 rem;
    width:100%;

}
.question{
    padding:3 rem 0rem;
    cursor:pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding:1 rem 0rem;
    }
}
`;

export default FAQSection;
import React from 'react';
//Import Icons
import clock from '../Image/clock.svg';
import diaphragm from '../Image/diaphragm.svg';
import money from '../Image/money.svg';
import teamwork from '../Image/teamwork.svg';
import home2 from '../Image/home2.png';
import styled from 'styled-components';
import {About,Description,Hide,Image} from '../components/style';

const ServicesSection = () =>
{
    return (
        <Services>
            <Description>
                <h2> Hight <span>Quality</span> Services</h2>
                <Cards>
                    <Card>
                    <div className="icon">
                        <img src={clock} alt="clock"/>
                        <h3>Efficient </h3>
                        <p>lorem add some text here</p>
                    </div>
                    </Card>
                </Cards>

                <Cards>
                <Card>
                    <div className="icon">
                        <img src={diaphragm} alt ="diaphragm"/>
                        <h3>Diaphragm </h3>
                        <p>lorem add some text here</p>
                    </div>
                </Card>
                </Cards>

                <Cards>
                    <Card>
                    <div className="icon">
                        <img src={money} alt ="money"/>
                        <h3>Affordable </h3>
                        <p>lorem add some text here</p>
                    </div>
                    </Card>
                </Cards>

                <Cards>
                    <Card>
                    <div className="icon">
                        <img src={teamwork} alt="teamwork"/>
                        <h3>TeamWork </h3>
                        <p>lorem add some text here</p>
                    </div>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="home2"/>

            </Image>
        </Services>

    )
}
const Services = styled(About)`

  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
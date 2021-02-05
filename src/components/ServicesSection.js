import React from 'react';
//Import Icons
import clock from '../Image/clock.svg';
import diaphragm from '../Image/diaphragm.svg';
import money from '../Image/money.svg';
import teamwork from '../Image/teamwork.svg';
import home2 from '../Image/home2.png';

const ServicesSection = () =>
{
    return (
        <div className="services">
            <div className="description">
                <h2> Hight <span>Quality</span> Services</h2>
                <div className="card">
                    <div className="icon">
                        <img src={clock} alt="clock"/>
                        <h3>Efficient </h3>
                        <p>lorem add some text here</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={diaphragm} alt ="diaphragm"/>
                        <h3>Diaphragm </h3>
                        <p>lorem add some text here</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={money} alt ="money"/>
                        <h3>Affordable </h3>
                        <p>lorem add some text here</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src={teamwork} alt="teamwork"/>
                        <h3>TeamWork </h3>
                        <p>lorem add some text here</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="home2"/>

            </div>
        </div>

    )
}
export default ServicesSection;
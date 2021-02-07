import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav =() =>
{
    return (
        <StyledNav>
            <h1>
            <Link id= "Logo" to ="/">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to ="/">1. About Us</Link>
                </li>
                <li>
                    <Link to ="/OurWork">2. Our Work</Link>
                </li>
                <li>
                    <Link to ="/ContactUs">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
min-height:10vh;
display: flex;
margin:auto;
justify-content:space-between;
align-items:center;
padding: 1rem 10rem;
background: #282828;
a{
    color:white;
    text-decoration: none;
}
ul {
    display:flex;
    list-style: none;
}
#Logo {
    font-family:"lobster" ,cursive;
    font-size: 1.5rem;
    font-weight:lighter;

}
li {
    padding-left:10rem;
    position: relative;
}
`
export default Nav;
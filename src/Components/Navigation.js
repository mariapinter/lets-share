import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.png';
import { Fade } from 'react-reveal';

function Navigation() {
    return (
        <Fade top>
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" className="logoimg"/>
                <p className="companyname"><b>LetsShare</b></p>
            </div>
            <ul>
                <li>
                    <a href="\#">Home</a>
                </li>
                <li>
                    <a href="\#features">Features</a>
                </li>
                <li>
                    <a href="\#faq">FAQ</a>
                </li>
            </ul>
            <PrimaryButton name={'Sign Up'} />
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    .logo{
        text-align: center;
    }

    .logoimg {
        width: 100%;
        max-width: 3vw;
        height: auto;
        margin-top: 10px;

        @media screen and (max-width: 689px){
            max-width: 5vw;
            width: 100%;
        }
    }

    .companyname {
        color: #fff;
        font-weight: bold;
        font-size: 1vw;

        @media screen and (max-width: 990px){
            font-size: 1.2vw;
        }

        @media screen and (max-width: 689px){
            font-size: 2vw;
        }
    }

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }

    a{
        border-bottom: 3px solid transparent;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
    }

    a:hover{
        border-bottom: 3px solid var(--blue-primary);
    }
`;
export default Navigation

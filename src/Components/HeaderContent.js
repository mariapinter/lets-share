import React from 'react';
import styled from 'styled-components';
import Secondarybutton from './SecondaryButton';
import phone from '../img/cp.png';
import donate from '../img/donate.svg';
import rectangle from '../img/rectangle.png';
import medicine from '../img/medicine.svg';
import { Fade } from 'react-reveal';

function HeaderContent() {
    return (
        <HeaderContentStyled>
            <Fade left cascade>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>Help others with just a few taps</h1>
                    <p className="white">
                    With LetsShare, you can send medical, food services and donations to those in need, which they can receive without contact.
                    </p>
                    <Secondarybutton name={'Register Now'}/>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className="right-content">
                <img src={donate} alt="" className="donate" />
                <img src={rectangle} alt="" className="rectangle" />
                <img src={medicine} alt="" className="medicine" />
                <img src={phone} alt="" className="phone" />
            </div>
            </Fade>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 990px){
        padding-top: 1rem;
    }

    @media screen and (max-width: 689px){
        grid-template-columns: repeat(1, 1fr);
    }

    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        box-sizing: border-box;

        .white{
            color:white;        
            padding: 1.4rem 0;
            font-size: 1.3vw;
            line-height: 4rem;

            @media screen and (max-width: 1347px){
                line-height: 2rem;
            }

            @media screen and (max-width: 990px){
                line-height: 1rem;
                font-sze: 1.5vw;
            }

            @media screen and (max-width: 689px){
                line-height: 1.5vh;
                font-size: 2vw;
            }

            @media screen and (max-width: 414px){
                font-size: 2.5vw;
            }
        }
    }

    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        overflow: hidden;
        text-align: center;
        margin: 0 auto;
        box-sizing: border-box;
        float: none;

        @media screen and (max-width: 689px){
            padding: 0;
            text-align: center;
            padding: 2rem 0 0 2rem;
        }

        .phone{
            width: 100%;
            max-width: 100%;
            height: auto;
            margin: 0 auto;
        }

        .donate{
            position: absolute;
            bottom: 10%;
            width: 12%;
            right: 0;
            left: auto;
            right: 20px;
            animation: pulse-black 3s infinite;
            transition: all .4s ease-in-out;
            @keyframes pulse-black {
                0% {
                    transform: scale(0.95);
                }	
                70% {
                    transform: scale(1);
                }	
                100% {
                    transform: scale(0.95);
                }
            }

            @media screen and (max-width: 1347px){
                width: 10%;
            }
        }

        .rectangle{
            position: absolute;
            top: 1rem;
            left: auto;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
            width: 30vw;
            z-index: -1;
            margin: 0 auto;
            @keyframes move{
                0%{
                    transform: translateY(0) rotate(0) scale(1) translateX(0);
                }
                50%{
                    transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
                }
                100%{
                    transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
                }
            }
            @keyframes move2{
                0%{
                    transform: translateY(0) rotate(0) scale(1) translateX(0);
                }
                50%{
                    transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
                }
                100%{
                    transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
                }
            }

            @media screen and (max-width: 689px){
                top: 15%;
                max-width: 50vw;
                width: 100%;
            }
        }

        .medicine{
            position: absolute;
            bottom: 15%;
            width: 15%;
            left: 0;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            animation-delay: .5s;
            transition: all .4s ease-in-out;
            
            @media screen and (max-width: 1347px){
                width: 13%;
            }
        }
    }
`;

export default HeaderContent;

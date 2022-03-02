import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import logo from '../img/logo.png';

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-con">
                    <div className="logo-con">
                       <div className="logo-items">
                        <img src={logo} alt="" className="logoimg"/>
                            <p>
                                &#169; 2021 <b>LetsShare</b><br/>
                                All rights reserved.
                            </p>
                       </div>
                    </div>
                    <ul className="botton-nav">
                        <div className="links1">
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Fees</a>
                            </li>
                        </div>
                        <div className="links2">
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Affiliate</a>
                            </li>
                        </div>
                        <div className="links3">
                            <li>
                                <a href="#">Terms of use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    box-sizing: border-box;
    padding: 0 7rem;
    background-color: #DCE2F0;

    @media screen and (max-width: 1347px){
        padding: 0 8rem;
    }    

    @media screen and (max-width: 1186px){
        padding: 0 5rem;
    }

    @media screen and (max-width: 414px){
        padding: 0 2rem;
    }

    .footer-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .logo-con{
        display: flex;
        align-items: center;
    }

    .logo-items {
        text-align: center;
    }

    .logoimg {
        width: 30%;
        height: auto;

        @media screen and (max-width: 689px){
            max-width: 5vw;
            width: 100%;
        }
    }

    p{
        @media screen and (max-width: 689px){
            font-size: 1.2vw;
            line-height: 1rem;
        }
    }

    .botton-nav{
        display: flex;
        justify-content: space-between;

        li{
            padding: 1rem 0;
            color: #16194F;
        }

        a{
            border-bottom: 3px solid transparent;
            -webkit-transition: all .2s ease;
            transition: all .2s ease;

            @media screen and (max-width: 689px){
                padding: .5rem 0;
            }
        }    
        
        a:hover{
            border-bottom: 3px solid var(--blue-primary);
        }
    }
`;

export default Footer

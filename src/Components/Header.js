import React from 'react'
import styled from 'styled-components';
import HeaderContent from './HeaderContent';
import Navigation from './Navigation';

function Header() {
    return (
        <HeaderStyled>
            <div className="header-content">
                <Navigation />
                <HeaderContent />
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    box-sizing: border-box;
    max-height: 100vh;
    height: 100%;
    width: 100%;
    background-color: var(--blue);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
   
    .header-content{
        padding: 0 7rem 2rem 7rem;

        @media screen and (max-width: 1347px){
            padding: 5rem 8rem 2rem 8rem;
        }

        @media screen and (max-width: 1186px){
            padding: 2rem 5rem;
        }

        @media screen and (max-width: 689px){
            padding: 0 3rem 2rem 3rem;
        }
        
        @media screen and (max-width: 414px){
            padding: 0 2rem 2rem 2rem;
        }
    }
`;

export default Header;

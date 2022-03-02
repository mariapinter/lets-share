import React from 'react';
import styled from 'styled-components';
import arrow from '../img/arrow.svg'

function Secondarybutton({name}) {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt="" />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 2% 3%;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1vw;
    color: inherit;
    border-radius: 100px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 990px){
        font-size: 1.5vw;
   }

    img{
        padding-left: .9rem;
        width: 2vw;

        @media screen and (max-width: 990px){
            width: 3vw;
        }

        @media screen and (max-width: 689px){
            width: 4vw;
        }
        
        @media screen and (max-width: 414px){
            width: 6vw;
        }
    }
`;

export default Secondarybutton;

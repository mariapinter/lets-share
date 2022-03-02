import React from 'react';
import arrow from '../img/arrow.svg';
import styled from 'styled-components';
import blob1 from '../img/blob_top.svg';
import blob2 from '../img/blob_bottom.svg';

function AnimatedButton({name}) {
    return (
        <AnimatedButtonStyled>
            {name}
            <img src={arrow} alt="" className="arrow" />
            <img src={blob1} alt="" className="blob1" />
            <img src={blob2} alt="" className="blob2" />
        </AnimatedButtonStyled>
    )
}

const AnimatedButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 2% 3%;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2vw;
    color: inherit;
    border-radius: 100px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    transition: all .4s ease-in-out;

    @media screen and (max-width: 990px){
        font-size: 1.5vw;
    }

    @media screen and (max-width: 689px){
        padding: 3% 5%;
    }

    .arrow{
        padding-left: .9rem;
        transition: all .4s ease-in-out;
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

    &:hover{
        transition: all .4s ease-in-out;
        color: #000;

        .blob1{
            transition: all .4s ease-in-out;
            transform: translateX(-100px);
        }

        .blob2{
            transition: all .4s ease-in-out;
            transform: translateX(140px);
        }

        .arrow{
            padding-left: 1.4rem;
        }
    }

    .blob1, .blob2{
        position: absolute;
        pointer-events: none;
        transition: all .4s ease-in-out;
        
        @media screen and (max-width: 689px){
            max-height: .8vh;
        }
    }

    .blob1{
        top: 0;
        right: 0;
    }

    .blob2{
        bottom: 0;
        left: 0;
    }
`;

export default AnimatedButton;

import React, { useState } from 'react';
import styled from 'styled-components';
import plus from '../img/plus.svg';
import minus from '../img/minus.svg';
import { Fade } from 'react-reveal';

function Question({title, description}) {
    const [toggle, setToggle] = useState(false);

    const btnToggler = () =>{
        setToggle(!toggle);
    }

    return (
        <Fade left cascade>
        <QuestionStyled>
            <div className="q-con">
                <div className="toggle-title">
                    <h4>{title}</h4>
                    <button onClick={btnToggler} >
                        {toggle ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                    </button>
                </div>
                {toggle && <p>{description}</p>}
            </div>
        </QuestionStyled>
        </Fade>
    )
}

const QuestionStyled = styled.div`
    box-sizing: border-box;
    background-color: #fff;
    margin: 1rem 0;
    padding: 1.4rem 1rem;
    border-radius: 24px;
    transition: all .4s ease-in-out;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

    @media screen and (max-width: 689px){
        padding: 1rem;
    }

    p{
        transition: all .4s ease-in-out;
        padding: 1.5rem;

        @media screen and (max-width: 1347px){
            padding: 1rem;
        }

        @media screen and (max-width: 990px){
            padding: 0.5rem;
        }
    }

    h4{
        color: #16194F;
        transition: all .4s ease-in-out;
        font-size: 1.3vw;

        @media screen and (max-width: 990px){
            font-size: 1.5vw;
        }

        @media screen and (max-width: 689px){
            font-size: 2vw;
        }

        @media screen and (max-width: 414px){
            font-size: 2.5vw;
        }
    }

    .toggle-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all .4s ease-in-out;
        font-family: 'Nunito', sans-serif;
        color: var(--blue-primary);

        button{
            background: transparent;
            outline: none;
            cursor: pointer;
            border: none;

                img{
                    width: 1.5vw;
                    
                    @media screen and (max-width: 414px){
                        width: 9vw;
                        padding-left: 4vw;
                    }
                }
        }
    }
`;

export default Question;

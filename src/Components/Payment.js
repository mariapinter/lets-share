import React from 'react';
import styled from 'styled-components';

function Payment({
    account,amount,text,button,card,check,
    checkDis,text1, text2,text3,text4,text5,text6,text7
}) {
    return (
        <PaymentStyled >
            <h4 className="payment-title">
                {account}
            </h4>
            <h4 className="payment-title">
                {amount} <span>/ m</span>
            </h4>
            <p className="c-para">{text}</p>
            <div className="button-con">
                <button>{button}</button>
            </div>
            <div className="card-image-con">
                <img src={card} alt="" />
            </div>
            <div className="list-con">
                <p className="text-check">
                    <img src={check} alt="" />
                    {text1}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text2}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text3}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text4}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text5}
                </p>
                <p className="text-check">
                <img src={check} alt="" />
                    {text6}
                </p>
            </div>
        </PaymentStyled >
    )
}

const PaymentStyled = styled.div`
    box-sizing: border-box;
    background-color: white;
    padding: 5rem 4rem;
    border-radius: 50px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

    @media screen and (max-width: 1186px){
        padding: 2rem 3rem;
    }

    @media screen and (max-width: 990px){
        padding: 1rem;    
        border-radius: 15px;
    }

    @media screen and (max-width: 689px){
        padding: 2rem;
    }
 
    .button-con{
        text-align: center;
        padding: 1.5rem 0;

        @media screen and (max-width: 990px){
            padding: 0.5rem 0;
        }

        @media screen and (max-width: 689px){
            padding: .5rem 0 0 0;
        }

        button{
            border: none;
            padding: 1rem 3rem;
            outline: none;
            cursor: pointer;
            background: transparent;
            border-radius: 100px;
            font-size: inherit;
            color: #16194F;

            @media screen and (max-width: 689px){
                font-size: 1.5vw;
            }

            @media screen and (max-width: 414px){
                padding: .5rem 1.5rem;
            }
        }
    }

    .card-image-con{
        display: flex;
        justify-content: center;

        img{
            width: 55%;
            height: auto;
            padding: 2rem;

            @media screen and (max-width: 990px){
                width: 100%;

            @media screen and (max-width: 689px){
                width: 60%;
                padding: 1.5rem;
            }
            }
        }
    }

    .plan-con{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem 0;

        img{
            padding: 0 .3rem;
        }
    }

    .text-check{
        display: flex;
        align-items: center;
        padding: .4rem 0;

        img{
            margin-right: 1rem;
            width: 25px;
            padding: 0;

            @media screen and (max-width: 990px){
                width: 15px;
            }
        }
    }      
`;
export default Payment;

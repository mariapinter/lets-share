import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import card from '../img/creditcard.png';

function CardSection() {
    return (
        <CardSectionStyled id="features">
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                        An app to donate food, medicine or money to someone in need
                        </h2>
                        <p>
                        You can check your debit card balance and payment history.
                        </p>
                    </div>
                    <div className="card-right">
                        <img src={card} alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`

    .card-container{
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-bottom: 3rem;

        @media screen and (max-width: 1347px){
            justify-content: right;
        }
       
        .card-right{
            display: flex;
            justify-content: right;

            @media screen and (max-width: 1347px){
                justify-content: right;
            }

            img{ 
                filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));
                width: 100%;
                height: auto;
                max-width: 30vw;
                padding-left: 2rem;
              
                @media screen and (max-width: 689px){
                    height: 100%;
                    max-width: 100%;
                    max-height: 12vh;
                    padding-top: 1rem;
                }
                
                @media screen and (max-width: 414px){
                    max-height: 8vh;
                }
            }
        }

        .card-left{
            p{
                padding: 1rem 0;
            }
        }
    }
`;

export default CardSection

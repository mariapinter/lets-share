import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import date from '../img/date.png';
import AnimatedButton from './AnimatedButton';
import { Bounce, Roll } from 'react-reveal';

function DateSection() {
    return (
        <DateStyled >
            <InnerLayout>
                <div className="date-con">
                    <div className="date-left">
                            <button className="mealButton">Choose Meal</button>
                            <img src={date} className="date" alt="" />
                            <button className="dateButton">Select Date</button>
                    </div>
                    <div className="date-right">
                        <h2 className="secondary-heading">
                        Choose your plan and we deliver a hot lunch or dinner someone in need
                        </h2> 
                        <Roll right>
                        <p>
                        By setting up your plan, we will prepare and deliver a hot lunch or dinner to a recipient - and you can track when and where the delivery was made in the app.
                        </p>
                        </Roll>
                        <Bounce right>
                            <AnimatedButton name={'Learn More'} />
                        </Bounce>
                    </div>
                </div>
            </InnerLayout>
        </DateStyled >
    )
}

const DateStyled = styled.section`
    box-sizing: border-box;

    .date-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-bottom: 3rem;

        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(2, 1fr);
        }

        .date-left{
            width: 80%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            @media screen and (max-width: 1347px){
                width: 100%;
            }

            @media screen and (max-width: 990px){
                display: grid;
                text-align: left;
            }

            button{                
                padding: 1% 3%;
                height: fit-content;
                font-family: 'Nunito', sans-serif;
                font-size: 1.2vw;
                border-radius: 100px;
                outline: none;
                border: none;
                cursor: pointer;  
                width: min-content;         
            }

            .dateButton{
                background-color: var(--ocher);
                font-size: 1.2vw;

                    &:hover{
                        background-color: var(--blue-primary);
                        color: #fff;
                    }

                    @media screen and (max-width: 990px){
                        display: none;
                    }
            }

            .mealButton{
                background-color: var(--blue-primary);
                color: #fff;
                font-size: 1.2vw;

                    &:hover{
                        color: #000;
                        background-color: var(--ocher);
                    }

                    @media screen and (max-width: 990px){
                        display: none;
                    }
            }

            img.date{
                box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                border-radius: 30px;
                width: 100%;
                height: 100%;
                max-width: 20vw;
                margin: 0 auto;
                display: block;

                @media screen and (max-width: 990px){
                    border-radius: 10px;
                }        

                @media screen and (max-width: 689px){
                    max-width: 25vw;
                }
                
                @media screen and (max-width: 414px){
                    max-width: 26vw;
                    max-height: 17vh;
                }
            }
        }

        .date-right{
            padding-left: 2rem;

            @media screen and (max-width:990px){
                padding: 0;
            }

            p{
                padding: 1.3rem 0;
            }
        }
    }
`;

export default DateSection

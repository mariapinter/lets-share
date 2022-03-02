import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Payment from './Payment';
import card from '../img/creditcard.png';
import check from '../img/check.svg';
import checkDisabled from '../img/check-disabled.svg';

function PaymentSection() {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h2 className="secondary-heading">Set automatic monthly <span>donation</span></h2>
                <p className="subtitle">Select how frequently you want to donate.</p>
                <div className="payment-con">
                    <Payment 
                    account={'Monthly'}
                    amount={'€ 50'}
                    text={'Manage your automatic payment monthly.'}
                    button={'Get Started'}
                    card={card}        
                    check={check}
                    checkDis={checkDisabled}
                    text1={'Payments are convenient and easy to start'}
                    text2={'ATM withdrawals in Euro monthly'}
                    text3={'No need to pay attention to the dates of transfers'}
                    text4={'It is easy to keep track of because your bank account shows the order as a single debit'}
                    text5={'It is possible to track when and for what the amount transferred was used by our organisation'}
                    text6={'You can see on a map which organisations or families have been supported - with their consent'} 
                    />
                    
                    <Payment 
                    account={'Every 3 months'}
                    amount={'€ 150'}
                    text={'Manage your automatic payment 3 monthly.'}
                    button={'Get Started'}
                    card={card}    
                    check={check}
                    checkDis={checkDisabled}
                    text1={'Payments are convenient and easy to start'}
                    text2={'ATM withdrawals in Euro 3 monthly'}
                    text3={'No need to pay attention to the dates of transfers'}
                    text4={'It is easy to keep track of because your bank account shows the order as a single debit'}
                    text5={'It is possible to track when and for what the amount transferred was used by our organisation'}
                    text6={'You can see on a map which organisations or families have been supported - with their consent'}
                    />
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
}

const PaymentStyled = styled.section`
    box-sizing: border-box;

    .subtitle {
        text-aign: left;
        font-family: 'Nunito', sans-serif;
        padding: 1em 0;
    }

    .payment-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 7.5rem;

        @media screen and (max-width: 1347px){
            padding-top: 3.5rem;
        }

        @media screen and (max-width: 1186px){
            padding-top: 3rem;
        }

        @media screen and (max-width: 990px){
            padding-top: 2rem;
        }

        @media screen and (max-width: 689px){
            grid-template-columns: repeat(1, 1fr);
        }

        .payment-title{
            font-size: 2.2vw;
            color: var(--blue-primary);
            text-align: center;
            padding: 1.5rem 0;

            @media screen and (max-width: 990px){
                padding: 0.5rem;
            }

            span{
                font-size: 2.7vw;
            }

            @media screen and (max-width: 1186px){
                padding: 1rem 0;
            }

            @media screen and (max-width: 689px){
                padding: 0.5rem 0;
            }
        }

        button{
            font-family: 'Nunito', sans-serif;
            background: var(--ocher);
            color: #000;
            font-size: 1.2vw;
        }    

        button:hover{
            background: var(--blue-primary);
            color: #fff;
        }
    }
    
    .c-para{
        text-align: center;
    }
`;
export default PaymentSection;

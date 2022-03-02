import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import questions from '../questions';
import Question from './Question';
function FAQSection() {
    return (
        <FaqStyled id="faq">
            <InnerLayout>
                <h3 className="small-heading">Frequently <span>asked questions</span></h3>
                <p className="c-para">
                LetsShare maintains the highest standard for financial responsibility, and we focus on financial ethics, efficiency, and resource maximization. 100 % of all online donations go directly to providing people living in extreme poverty. Our financial model far exceeds the efficiency of other nonprofits.
                </p>
                <div className="questions-con">
                    {
                        questions.map((q)=>{
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>
                
            </InnerLayout>
        </FaqStyled>
    )
}

const FaqStyled = styled.section`
    box-sizing: border-box;

    .c-para{
        width: 80%;
        margin: 0 auto;

        @media screen and (max-width: 1186px){
            width: 100%;
        }
    }

    .questions-con{
        padding-top: 4rem;

        @media screen and (max-width: 1186px){
           padding-top: 2rem;
        }
        
        @media screen and (max-width: 689px){
            padding-top: 0;
        }
    }
`;

export default FAQSection;

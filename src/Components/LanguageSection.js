import React from 'react'
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import avatar1 from '../img/avatar1.svg';
import avatar2 from '../img/avatar2.svg';
import avatar3 from '../img/avatar3.svg';
import avatar4 from '../img/avatar4.svg';
import avatar5 from '../img/avatar5.svg';
import language from '../img/language.png';
import bgCircles from '../img/circleBg.svg';

function LanguageSection() {
    return (
        <LanguageStyle>
            <InnerLayout>
                <div className="language-con">
                    <div className="left-items">
                        <h2 className="secondary-heading">
                            We support you in 7 different languages
                        </h2>
                        <p className="m-para">
                        The app is also available for free to anyone in 7 different languages, which you can set in the profile settings.
                        </p>
                        <div className="images-con">
                            <img src={avatar1} alt="" className="image-1" />
                            <img src={avatar2} alt="" className="image-2" />
                            <img src={avatar3} alt="" className="image-3" />
                            <img src={avatar4} alt="" className="image-4" />
                            <img src={avatar5} alt="" className="image-5" />
                            <p>&nbsp; +25</p>
                        </div>
                        <img src={bgCircles} className="bgCircle" alt="" />
                    </div>
                    <div className="right-items">
                        <img src={language} alt="" className='language' />
                        <img src={bgCircles} alt="" className="bgCircle" />
                    </div>
                </div>
            </InnerLayout>
        </LanguageStyle>
    )
}

const LanguageStyle = styled.section`
    box-sizing: border-box;

    .language-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-bottom: 3rem;

        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .left-items{
        box-sizing: border-box;
        position: relative;

        .m-para{
            padding: 1rem 0;
        }

        .images-con{
            display: flex;
            align-items: center;
            padding-top: 1rem;
            width: 100%;
            max-width: 50vw;

            .image-2, .image-3, .image-4, .image-5{
                margin-left: -22px;
            }

            img{
                @media screen and (max-width: 689px){
                    width: 100%;
                    max-width: 9vw;
                }
            }
        }

        .bgCircle{
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
    }

    .right-items{
        position: relative;
        display: flex;
        justify-content: center;
        box-sizing: border-box;

        @media screen and (max-width: 1347px){
            justify-content: right;
        }

        .language{
            border-radius: 30px;
            width: 100%;
            height: 100%;
            max-width: 20vw;

            @media screen and (max-width: 990px){
                border-radius: 15px;
            }

            @media screen and (max-width: 689px){
                max-width: 25vw;
            }

            @media screen and (max-width: 414px){
                max-width: 26vw;
                max-height: 17vh;
            }
        }
        
        .bgCircle{
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
    }
`;

export default LanguageSection;

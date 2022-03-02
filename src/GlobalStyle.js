import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root{
        --blue-primary: #161D6F;
        --ocher: #FFC14F;
        --ocher-secondary: #FF9E11;
        --blue: #6bc6ff;
        --neutral-light: #F9F9F9;
        --text-primary: #525252;
        --dark-primary: #161D6F;
        --dark-secondary: #161D6F;
        --border-colour: #CAD6F1;        
    }

    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        background-color: var(--neutral-light);
        color: #fff;
        font-size: 1.2rem;
    }

    a{
        color: inherit;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2vw;

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

    a:hover{
        color: var(--blue-primary);
    }

    button{
        font-family: 'Nunito', sans-serif;
        font-size: 1.2vw;

        @media screen and (max-width: 414px){
            font-size: 2vw;
        }
    }

    button:hover{
        background: var(--ocher-secondary);
    }
    
    h1{
        font-family: 'Philosopher', sans-serif;
        font-size: 3vw;
        font-weight: 600;

        @media screen and (max-width: 990px){
            font-size: 4vw;
       }

        @media screen and (max-width: 689px){
            font-size: 5vw;
        }

        @media screen and (max-width: 414px){
            font-size: 6vw;
        }
    }

    .secondary-heading{
        font-size: 2.5vw;
        color: var(--blue-primary);
        font-family: 'Philosopher', sans-serif; 

        @media screen and (max-width: 990px){
            font-size: 3.5vw;
        }

        @media screen and (max-width: 689px){
            font-size: 4vw;
        }

        @media screen and (max-width: 414px){
            font-size: 5vw;
        }   
    }

    .small-heading{
        font-size: 2.1vw;
        padding-top: 4rem;
        color: var(--blue-primary);
        text-align: center;
        font-family: 'Philosopher', sans-serif;

        @media screen and (max-width: 990px){
            font-size: 3vw;
        }

        @media screen and (max-width: 689px){
            font-size: 3.5vw;
        }

        @media screen and (max-width: 414px){
            font-size: 4.5vw;
            padding-top: 1rem;
        }
    }

    span{
        color: var(--ocher-secondary);
        font-family: 'Philosopher', sans-serif;
    }

    p{
        color: var(--text-primary);
        line-height: 4rem;
        font-family: 'Nunito', sans-serif;
        font-size: 1.3vw;

        @media screen and (max-width: 1347px){
            line-height: 2rem;
        }

        @media screen and (max-width: 990px){
            line-height: 1.2rem;
            font-size: 1.5vw;
        }

        @media screen and (max-width: 689px){
            line-height: 1.5vh;
            font-size: 2vw;
        }

        @media screen and (max-width: 414px){
            font-size: 2.5vw;
        }
    }
    
    .c-para{
        text-align: center;
        font-family: 'Nunito', sans-serif;
        padding: 1em 0;
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

    ::-webkit-scrollbar {
        width: 20px;
      }
      
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
    }       

    ::-webkit-scrollbar-thumb {
        background: red; 
        border-radius: 10px;
        background: linear-gradient(0deg, rgba(255,158,17,1) 0%, rgba(22,29,111,1) 100%);
    }
      
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(0deg, rgba(22,29,111,1) 0%, rgba(255,158,17,1) 100%);
    }
  
`;

export default GlobalStyle;
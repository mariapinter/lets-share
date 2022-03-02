import styled from "styled-components";



export const OuterLayout = styled.section`
    padding: 5rem 7rem;

    @media screen and (max-width: 1347px){
        padding: 5rem 8rem 0 8rem;
    }

    @media screen and (max-width: 1186px){
        padding: 3rem 5rem;
    }

    @media screen and (max-width: 414px){
        padding: 1rem 2rem;
    }
`;
export const InnerLayout = styled.section`
    padding: 3rem 0;
    box-sizing: border-box;

    @media screen and (max-width: 1186px){
        padding: 4rem 0;
    }
    
    @media screen and (max-width: 990px){
        padding: 2rem 0;
    }
}
`;
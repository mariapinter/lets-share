import React from 'react';
import styled from 'styled-components';

function PrimaryButton({name}) {
    return (
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    background-color: var(--ocher);
    padding: 1% 3%;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1vw;
    color: inherit;
    border-radius: 100px;
    outline: none;
    border: none;
    cursor: pointer;
    
    @media screen and (max-width: 990px){
        font-size: 1.5vw;
    }
`;

export default PrimaryButton

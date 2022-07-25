import React from "react"
import styled from 'styled-components';
import { StyledButton } from './styles/app_styles';
import { useCloseSignin } from '../hooks/useCloseSignin';

const StyledSignin = styled.div`
    height: 100vh;
    width: 40vw;
    position: absolute;
    left: 65vw;
    background-color: red;
`

export function Signin(){
    const { closeSignin } = useCloseSignin();

    return (
        <StyledSignin>
            <StyledButton title="close" paddingX="30px" paddingY="15px" color="white" backgroundColor="blue" onClick={(e)=> closeSignin()}> close</StyledButton>
        </StyledSignin>
    );
}
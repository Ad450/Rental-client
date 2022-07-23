import React from "react";
import styled from "styled-components";
import { Spacing, StyledButton, StyledText } from "./styles/app_styles";

const StyledTextCard = styled.div`
  padding: 10px 10px;
  width: 270px;
  height: 350px;
`;

export default function TextCard() {
  return (
    <StyledTextCard>
      <StyledText fontSize="30px" fontWeight="400" color="black">
        We are Ready to help you
      </StyledText>
      <Spacing height="30px" width="auto"></Spacing>
      <StyledText fontSize="12px" color="grey">
        With our experience we are ready to help you create a modern property
        with an easy step. It's so easy to buy, rent and sell properties
      </StyledText>
      <Spacing height="30px" width="auto"></Spacing>
      <StyledButton backgroundColor="blue" color="white" paddingX="30px" paddingY="10px" borderRadius="10px">Explore All</StyledButton>
    </StyledTextCard>
  );
}

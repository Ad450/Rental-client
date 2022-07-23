import styled from "styled-components";
import { StyledButton, StyledFeatureCard, StyledText } from "./styles/app_styles";

interface IFeatureCardChild {
    leadingText: string;
    subText: string;
    trailingAmount: string;
    height: string;
    width: string;
    url: string;
  }

  const StyledFeatureCardChild = styled.div` 
  display: flex;
  flex-direction: column;
  text:align: start;
  padding-left:10px;
`;

const StyledTrailingCardChild = styled.div`
  position: relative;
  top: 220px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;




export default function FeatureCardChild({
    leadingText,
    subText,
    trailingAmount,
    height,
    url,
    width,
  }: IFeatureCardChild) {
    return (
      <StyledFeatureCard height={height} width={width} url={url}>
        <StyledFeatureCardChild>
          <div>
            <StyledText color="white" fontSize="25px" fontWeight="500">
              {leadingText}
            </StyledText>
            <StyledText color="white" fontSize="18px" fontWeight="400">
              {subText}
            </StyledText>
          </div>
          <StyledTrailingCardChild>
            <StyledText color="white" fontSize="20px">
              {trailingAmount}
            </StyledText>
            <StyledButton
              paddingX="30px"
              paddingY="10px"
              color="white"
              backgroundColor="orange"
            >
              {" "}
              →
            </StyledButton>
          </StyledTrailingCardChild>
        </StyledFeatureCardChild>
      </StyledFeatureCard>
    );
  }
  
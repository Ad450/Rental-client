import styled from "styled-components";
import { StringLiteral } from "typescript";

export const RentalHeader = styled.div`
  background-image: url("https://images.unsplash.com/photo-1488707872600-5507977fe355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60");
  background-size: cover;
`;

export const RentalHeaderCard = styled.div`
  width: 90%;
`;

export const RentalFeatureProps = styled.div`
  padding: 30px 20px 20px 30px;
`;

export const RentalWrapper = styled.div``;

interface IStyledText {
    color: string;
    fontSize: string;
    fontWeight?: string;
}

export const StyledText = styled.h3<IStyledText>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

interface IStyledButton {
    paddingX: string;
    paddingY: string;
    backgroundColor: string;
    color: string;
    borderRadius?: string;
}

export const StyledButton = styled.button<IStyledButton>`
  padding: ${(props) => props.paddingY} ${(props) => props.paddingX};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius : ${(props) => props.borderRadius}
  
  
`;

interface ISpacing {
    height: string;
    width: string;
}

export const Spacing = styled.div<ISpacing>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

import React from "react";
import styled from "styled-components";
import {  StyledFeatureCard, StyledText } from "./styles/app_styles";
import TextCard from "./text_card";
import { useImage, useClearInterval } from "../hooks/useImage";
import FeatureCardChild from "./feature_card_child";




const StyledRatingChild = styled.div`
  height: 150px;
  background-color: white;
  width: 180px;
  position: relative;
  top: 200px;
  left: 50px;
  border-radius: 0.6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledRatingImage = styled.img`
  height: 60px;
  width: 90px;
`;  

const StyledDivider = styled.div`
  height: 2px;
  width: 150px;
  background-color: grey;
  border-radius: 0.01rem;
`;

const StyledRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;



export default function FeatureCard() {
  const [url1, url2, url3] = useImage();

  useClearInterval();

  return (
    <div className="flex px-24 my-4 flex-wrap">
      <StyledFeatureCard height="250px" width="270px" url={url1}>
        <StyledRatingChild>
          <StyledRatingImage
            src="https://cdn-icons-png.flaticon.com/512/695/695530.png"
            alt=""
          />
          <StyledText color="black" fontSize="20px">
            {" "}
            Our Best Services
          </StyledText>
          <StyledDivider></StyledDivider>
          <StyledRating>
            ⭐
            <StyledText color="grey" fontSize="10px">
              {" "}
              5 Star Rating
            </StyledText>
          </StyledRating>
        </StyledRatingChild>
      </StyledFeatureCard>
      <FeatureCardChild
        leadingText="North Franklin Canyor"
        subText="JI. Elgin St Celina, Delaware"
        trailingAmount="$2,895,000"
        height="350px"
        width="270px"
        url={url2}
      ></FeatureCardChild>
      <FeatureCardChild
        leadingText="North Franklin Canyor"
        subText="JI. Elgin St Celina, Delaware"
        trailingAmount="$2,895,000"
        height="350px"
        width="270px"
        url={url3}
      ></FeatureCardChild>
      <TextCard></TextCard>
    </div>
  );
}

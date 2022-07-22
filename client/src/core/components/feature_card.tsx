import React from "react";
import styled from "styled-components";
import { StyledButton, StyledText } from "./styles/app_styles";
import TextCard from "./styles/text_card";

interface IStyledFeatureCard {
  url: string;
  height: string;
  width: string;
}

interface IFeatureCardChild {
  leadingText: string;
  subText: string;
  trailingAmount: string;
  height: string;
  width: string;
  url: string;
}

const StyledFeatureCard = styled.div<IStyledFeatureCard>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 0.6rem;
  text-align: start;
  margin: 0px 15px 0px;

  &:hover {
    background-image: url(${(props) => props.url});
    box-shadow: 10px 10px 10px #aaaaaa;
  }
`;

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

export default function FeatureCard() {
  return (
    <div className="flex px-24 my-4 flex-wrap">
      <StyledFeatureCard
        height="250px"
        width="270px"
        url="https://watermark.lovepik.com/photo/20211203/large/lovepik-house-and-clear-sky-picture_501469477.jpg"
      >
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
        url="https://images.unsplash.com/photo-1598603082415-fd487cb6471e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
      ></FeatureCardChild>
      <FeatureCardChild
        leadingText="North Franklin Canyor"
        subText="JI. Elgin St Celina, Delaware"
        trailingAmount="$2,895,000"
        height="350px"
        width="270px"
        url="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1619175899000/photosp/cf53aef4-5806-435e-8b86-7c4c473a9ad7/stock-photo-building-house-weathered-clear-sky-clouds-scenery-blue-sky-singapore-singapore-city-cf53aef4-5806-435e-8b86-7c4c473a9ad7.jpg"
      ></FeatureCardChild>
      <TextCard></TextCard>
    </div>
  );
}

function FeatureCardChild({
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

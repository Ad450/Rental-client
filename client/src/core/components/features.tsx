import React from "react";
import styled from "styled-components";
import { RentalFeatureProps } from "./styles/app_styles";

const FeaturePropsText = styled.div`
border-bottom: 2px solid rgba(104, 100, 100, 0.548);
  &:hover {
    border-bottom: 1px solid orange;
    color: orange;
  }
`;

export default function Features() {
  return (
    <RentalFeatureProps>
    <div className="flex justify-between py-4 items-center ">
      <div className="flex px-24 ">
        <FeaturePropsText className="bg-white test-prop px-14 py-3">
          House
        </FeaturePropsText>
        <FeaturePropsText className="test-prop px-14 py-3">
          Apartment
        </FeaturePropsText>
      </div>
      <div>
        <h3 className="text-4xl font-bold align-center">Featured Properties</h3>
      </div>
      <div className="flex px-24">
        <FeaturePropsText className="test-prop px-14 py-3">Land</FeaturePropsText>
        <FeaturePropsText className="test-prop px-14 py-3">
          View All
        </FeaturePropsText>
      </div>
    </div>
    </RentalFeatureProps>
  );
}

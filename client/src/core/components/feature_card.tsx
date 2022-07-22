import React from "react";
import styled from "styled-components";

interface IRentalFeatureCard {
  url: string;
}

const RentalFeatureCard = styled.div<IRentalFeatureCard>`
  height: 350px;
  width: 270px;
  background-image: url("https://images.unsplash.com/photo-1488707872600-5507977fe355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")
  border-radius: 0.6rem;
  text-align: center;
  margin: 0px 15px 0px;

  &:hover {
    background-color: red;
    box-shadow: 10px 10px 10px #aaaaaa;
  }
`;

export default function FeatureCard() {
  return (
    <div className="flex px-24 mt-4">
      <RentalFeatureCard url="https://images.unsplash.com/photo-1488707872600-5507977fe355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"></RentalFeatureCard>
      <RentalFeatureCard url="https://images.unsplash.com/photo-1488707872600-5507977fe355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"></RentalFeatureCard>
      <RentalFeatureCard url="https://images.unsplash.com/photo-1488707872600-5507977fe355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"></RentalFeatureCard>
      <RentalFeatureCard url="https://images.unsplash.com/photo-1488707872600-5507977fe355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"></RentalFeatureCard>
    </div>
  );
}

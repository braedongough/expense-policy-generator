import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  background: rgb(249, 233, 238);
  height: 40vh;
  font-weight: 100;
  text-align: center;
  top: 20;
  padding-top: 75px;
`;

const Header = styled.h1`
  margin: 0;
  font-size: 45px;
  font-weight: 600;
`;

const SubHeader = styled.p`
  font-size: 22px;
`;

export default () => (
  <Hero>
    <Header>Expense Policy Generator</Header>
    <SubHeader>
      Create an expense policy for your company with just a few clicks
    </SubHeader>
  </Hero>
);

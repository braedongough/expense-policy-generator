import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightPink};
  height: 400px;
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

const Hero = () => (
  <HeroContainer>
    <Header>Expense Policy Generator</Header>
    <SubHeader>
      Create an expense policy for your company with just a few clicks
    </SubHeader>
  </HeroContainer>
);

export default Hero;

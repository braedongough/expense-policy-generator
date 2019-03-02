import React from "react";
import styled from "styled-components";
import { Hero, Banner } from "./shared";
import Policy from "./Policy/Policy";
import Questionnaire from "./Questionnaire/Questionnaire";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Main = () => (
  <>
    <Banner />
    <Hero />
    <Container>
      <Questionnaire />
      <Policy />
    </Container>
  </>
);

export default Main;

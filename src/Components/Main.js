import React from "react";
import styled from "styled-components";
import { Hero } from "./shared";
import Policy from "./Policy/Policy";
import Questionnaire from "./Questionnaire/Questionnaire";

const Main = () => (
  <>
    <Hero />
    <Container>
      <Questionnaire />
      <Policy />
    </Container>
  </>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`;

export default Main;

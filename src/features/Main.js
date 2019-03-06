import React from "react";
import { ThemeProvider } from "styled-components";
import { Hero, Banner, theme, CardContainer } from "../shared";
import Policy from "./Policy/Policy";
import Questionnaire from "./Questionnaire/Questionnaire";

const Main = () => (
  <ThemeProvider theme={theme}>
    <>
      <Banner />
      <Hero />
      <CardContainer>
        <Questionnaire />
        <Policy />
      </CardContainer>
    </>
  </ThemeProvider>
);

export default Main;

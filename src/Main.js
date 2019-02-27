import React, { Component } from "react";
import styled from "styled-components";
import Policy from "./Components/Policy/Policy";
import Questionnaire from "./Components/Questionnaire/Questionnaire";

class Main extends Component {
  render() {
    return (
      <Container>
        <Questionnaire />
        <Policy />
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export default Main;

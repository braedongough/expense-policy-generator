import React, { Component } from "react";
import styled from "styled-components";
import Document from "./Components/Document/Document";
import Questionnaire from "./Components/Questionnaire/Questionnaire";

class Main extends Component {
  render() {
    return (
      <Container>
        <Questionnaire />
        <Document />
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

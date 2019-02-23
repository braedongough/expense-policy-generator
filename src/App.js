import React, { Component } from "react";
import styled from "styled-components";
import Step from "./Components/Wizard/Step";
import Wizard from "./Components/Wizard/Wizard";
import Document from "./Components/Document/Document";

class App extends Component {
  render() {
    return (
      <Container>
        <Wizard>
          <Step>Step 1</Step>
          <Step>Step 2</Step>
        </Wizard>
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

export default App;

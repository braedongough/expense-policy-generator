import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Pleo from "./Pleo.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid rgb(247, 223, 229);
`;

const TrialButton = styled(Button)`
  border-radius: 31px;
`;

const Img = styled.img`
  height: 35px;
  width: 85.88px;
  align-self: center;
`;

export default () => (
  <Container>
    <Img src={Pleo} alt="Pleo" />
    <TrialButton>Start Free Trial</TrialButton>
  </Container>
);

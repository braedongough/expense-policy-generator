import React from "react";
import styled from "styled-components";
import Pleo from "./Pleo.svg";
// underline color:247	223	229

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid rgb(247, 223, 229);
`;

const Button = styled.button`
  color: white;
  border: none;
  border-radius: 31px;
  padding: 15px 23px;
  background: #ff3366;
  font-weight: 600;
  letter-spacing: 0.8px;
  font-size: 14px;
  cursor: pointer;
`;

const Img = styled.img`
  height: 35px;
  width: 85.88px;
  align-self: center;
`;

export default () => (
  <Container>
    <Img src={Pleo} alt="Pleo" />
    <Button>Start Free Trial</Button>
  </Container>
);

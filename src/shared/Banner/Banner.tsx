import React, { FC } from "react";
import Pleo from "../Pleo.svg";
import { Container, Img, TrialButton } from "./styles.js";

const Banner: FC<{}> = () => (
  <Container>
    <Img src={Pleo} alt="Pleo" />
    <TrialButton>Start Free Trial</TrialButton>
  </Container>
);

export default Banner;

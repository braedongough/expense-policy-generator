import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header/Header";

export default class Document extends Component {
  render() {
    return (
      <Wrapper>
        <Header textLabel="Legal Document" textTitle="Expense Policy" />
        <p>
          Lorem ipsum dolor sit amet, veri omnis duo ex, eu vim integre dolores
          qualisque. Ex his magna similique, inermis detracto mel id, aeterno
          aperiri admodum an eos. An usu volumus delicatissimi. Detraxit
          appellantur cu mei. Ut consul latine sed. Malis audiam vel at, at
          patrioque repudiandae his.
        </p>
        <p>
          Lorem ipsum dolor sit amet, veri omnis duo ex, eu vim integre dolores
          qualisque. Ex his magna similique, inermis detracto mel id, aeterno
          aperiri admodum an eos. An usu volumus delicatissimi. Detraxit
          appellantur cu mei. Ut consul latine sed. Malis audiam vel at, at
          patrioque repudiandae his.
        </p>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
`;

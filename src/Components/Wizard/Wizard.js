import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import FormNav from "./FormNav";

export default class Wizard extends Component {
  render() {
    return (
      <Wrapper>
        <Header textLabel="Steps will go here" textTitle="Form Title" />
        <form>
          <input type="text" name="company-name" />
          <FormNav />
        </form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
`;

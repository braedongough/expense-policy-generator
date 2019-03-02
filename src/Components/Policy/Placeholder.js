import React from "react";
import styled from "styled-components";

const Highlighted = styled.p`
  color: blue;
`;

const Placeholder = ({ visible }) =>
  visible ? (
    <Highlighted>This is where your expense policy will appear</Highlighted>
  ) : null;

export default Placeholder;

import React from "react";
import styled from "styled-components";

const FormNav = () => {
  return (
    <Container>
      <button>back</button>
      <button>next</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default FormNav;

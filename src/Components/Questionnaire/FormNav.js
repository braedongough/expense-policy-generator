import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { wizardModule } from "../../redux/modules";
import { Button } from "../shared";

const BackButton = styled(Button)`
  background: rgb(249, 233, 238);
  color: rgb(211, 211, 211);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const FormNav = ({ back }) => {
  return (
    <Container>
      <BackButton onClick={back} type="button">
        Back
      </BackButton>
      <Button type="submit">Next</Button>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  back: () => dispatch(wizardModule.prev()),
});

export default connect(
  undefined,
  mapDispatchToProps
)(FormNav);

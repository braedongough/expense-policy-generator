import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { wizardModule } from "../../redux/modules";
import { Button } from "../../shared";

const BackButton = styled(Button)`
  background: ${({ theme }) => theme.colors.lightPink};
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
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

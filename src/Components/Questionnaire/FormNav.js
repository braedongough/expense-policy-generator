import React from "react";
import { connect } from "react-redux";
import { wizardModule } from "../../redux/modules";

const FormNav = ({ back }) => {
  return (
    <>
      <button onClick={back} type="button">
        Back
      </button>
      <button type="submit">Next</button>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  back: () => dispatch(wizardModule.prev()),
});

export default connect(
  undefined,
  mapDispatchToProps
)(FormNav);

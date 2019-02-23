import React from "react";
import { connect } from "react-redux";
import { wizardModule } from "../../redux/modules";

const QuestionnaireNav = ({ next, back }) => {
  return (
    <div>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  next: () => dispatch(wizardModule.next()),
  back: () => dispatch(wizardModule.prev()),
});

export default connect(
  undefined,
  mapDispatchToProps
)(QuestionnaireNav);

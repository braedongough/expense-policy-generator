import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import { wizardModule } from "../../redux/modules";

const Wizard = ({ children, getStepCount, currentStep }) => {
  const filteredChildren = () =>
    React.Children.toArray(children).filter(
      child => child.type.name === "Step"
    );

  useEffect(() => {
    getStepCount(React.Children.count(filteredChildren()));
  });

  // return React.Children.map(filteredChildren(), (child, index) =>
  //   React.cloneElement(child, {
  //     isActive: currentStep === index + 1,
  //   })
  // );
  return <Formik />;
};

const mapStateToProps = ({ wizard }) => ({
  currentStep: wizard.currentStep,
});

const mapDispatchToProps = dispatch => ({
  getStepCount: numberOfSteps =>
    dispatch(wizardModule.getStepCount(numberOfSteps)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wizard);

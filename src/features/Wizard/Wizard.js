import React, { useEffect } from "react";
import { connect } from "react-redux";
import { wizardModule } from "../../redux/modules";

const Wizard = ({ children, getStepCount, currentStep, numberOfSteps }) => {
  const filteredChildren = () =>
    React.Children.toArray(children).filter(
      child => child.type.name === "Step"
    );

  useEffect(() => {
    getStepCount(React.Children.count(filteredChildren()));
  }, []);
  const steps = React.Children.map(filteredChildren(), (child, index) =>
    React.cloneElement(child, {
      isActive: currentStep === index + 1,
    })
  );
  return steps;
};

const mapStateToProps = ({ wizard, policy }) => ({
  currentStep: wizard.currentStep,
  numberOfSteps: wizard.numberOfSteps,
  policy,
});

const mapDispatchToProps = dispatch => ({
  getStepCount: numberOfSteps =>
    dispatch(wizardModule.getStepCount(numberOfSteps)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wizard);

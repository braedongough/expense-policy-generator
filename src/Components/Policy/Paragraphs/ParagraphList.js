import React from "react";
import { connect } from "react-redux";

const ParagraphList = ({ children, currentStep }) => {
  const filteredChildren = () =>
    React.Children.toArray(children).filter(
      child => child.type.name === "Paragraph"
    );

  const steps = React.Children.map(filteredChildren(), (child, index) =>
    React.cloneElement(child, {
      isActive: currentStep >= index + 2,
    })
  );
  return steps;
};

const mapStateToProps = ({ wizard }) => ({
  currentStep: wizard.currentStep,
});

export default connect(mapStateToProps)(ParagraphList);

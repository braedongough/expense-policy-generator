import React, { Component } from "react";
import { connect } from "react-redux";
import { wizardModule } from "../../redux/modules";

class Wizard extends Component {
  componentDidMount() {
    this.props.getStepCount(React.Children.count(this.filteredChildren()));
  }

  filteredChildren = () =>
    React.Children.toArray(this.props.children).filter(
      child => child.type.name === "Step"
    );

  render() {
    const { currentStep } = this.props;
    const children = React.Children.map(
      this.filteredChildren(),
      (child, index) =>
        React.cloneElement(child, {
          isActive: currentStep === index + 1,
        })
    );
    return children;
  }
}

const mapStateToProps = ({ wizard }) => ({
  numberOfSteps: wizard.numberOfSteps,
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

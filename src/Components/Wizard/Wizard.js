import React, { Component } from "react";
import { connect } from "react-redux";
import { wizardModule } from "../../redux/modules";

class Wizard extends Component {
  componentDidMount() {
    this.props.getStepCount(React.Children.count(this.filteredChildren()));
  }
  filteredChildren = () => {
    return React.Children.toArray(this.props.children).filter(
      child => child.type.name === "Step"
    );
  };
  render() {
    const { currentStep } = this.props;
    const children = React.Children.map(
      this.filteredChildren(),
      (child, index) =>
        React.cloneElement(child, {
          isActive: currentStep === index + 1,
        })
    );
    console.log(children, 1);
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

/* class Wizard extends Component {
  componentDidMount() {
    this.props.register(this.numberOfSteps(this.props.children))
  }
?why is the render function contained within the numberOfSteps method? Is that how it's passed the children argument? 
  numberOfSteps = children => 
    React.Children.toArray(children).filter(child => child.type === Step)
      .length

  render() {
    const children = React.Children.map(
      React.Children.toArray(this.props.children).filter(
        child => child.type === Step
      ),
      (child, index) =>
        React.cloneElement(child, {
          isActive: this.props.currentStep === index + 1
        })
    )

    return children
  }
} */

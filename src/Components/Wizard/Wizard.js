import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { wizardModule, documentModule } from "../../redux/modules";
import generatePDF from "../../utils/generatePDF";
import Nav from "./FormNav";

const Wizard = ({
  children,
  getStepCount,
  currentStep,
  numberOfSteps,
  document,
  next,
}) => {
  const filteredChildren = () =>
    React.Children.toArray(children).filter(
      child => child.type.name === "Step"
    );

  const formData = () => document;

  const handleSubmit = (values, actions) => {
    const isLastPage = currentStep === numberOfSteps;
    if (!isLastPage) {
      next(values);
      actions.setSubmitting(false);
    } else {
      const text = JSON.stringify(values, null, 2);
      generatePDF(text);
      setTimeout(() => {
        alert(text);
        actions.setSubmitting(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (!numberOfSteps) {
      getStepCount(React.Children.count(filteredChildren()));
    }
  });

  return (
    <Formik
      initialValues={formData()}
      onSubmit={handleSubmit}
      render={() => (
        <Form>
          {React.Children.map(filteredChildren(), (child, index) =>
            React.cloneElement(child, {
              isActive: currentStep === index + 1,
            })
          )}
          <Nav />
        </Form>
      )}
    />
  );
};

const mapStateToProps = ({ wizard, document }) => ({
  currentStep: wizard.currentStep,
  numberOfSteps: wizard.numberOfSteps,
  document,
});

const mapDispatchToProps = dispatch => ({
  getStepCount: numberOfSteps =>
    dispatch(wizardModule.getStepCount(numberOfSteps)),
  next: values => {
    dispatch(documentModule.next(values));
    dispatch(wizardModule.next());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wizard);

import React from "react";
import { connect } from "react-redux";
import { Form, Formik, Field } from "formik";
import generatePDF from "../../utils/generatePDF";
import { wizardModule, policyModule } from "../../redux/modules";
import Header from "../Header/Header";
import Nav from "./FormNav";
import Wizard from "../Wizard/Wizard";
import Step from "../Wizard/Step";

/* 
todo: add new actions to dynamically render paragraphs in policy component. Think of adding them as a template string. 
todo: remove policy dispatch and map new actions
*/

const Questionnaire = ({ currentStep, next, numberOfSteps }) => {
  const handleSubmit = (values, actions) => {
    const isLastPage = currentStep === numberOfSteps;

    if (!isLastPage) {
      next(values);
      actions.setSubmitting(false);
    } else {
      const text = JSON.stringify(values, null, 2);

      generatePDF(text);
      alert(text);
      actions.setSubmitting(false);
    }
  };

  return (
    <div>
      <Header textLabel={`Step ${currentStep}`} textTitle="Questionnaire" />
      <Formik
        initialValues={{
          companyName: "",
          numberOfEmployees: "",
          budget: "",
          email: "",
        }}
        onSubmit={handleSubmit}
        render={() => (
          <Form>
            <Wizard>
              <Step>
                <Field
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                />
              </Step>
              <Step>
                <Field
                  type="number"
                  name="numberOfEmployees"
                  placeholder="Number of Employees"
                />
              </Step>
              <Step>
                <Field type="number" name="budget" placeholder="budget" />
              </Step>
              <Step>
                <Field type="email" name="email" placeholder="email" />
              </Step>
            </Wizard>
            <Nav />
          </Form>
        )}
      />
    </div>
  );
};

const mapStateToProps = ({ wizard }) => ({
  currentStep: wizard.currentStep,
  numberOfSteps: wizard.numberOfSteps,
});

const mapDispatchToProps = dispatch => ({
  next: values => {
    dispatch(policyModule.next(values));
    dispatch(wizardModule.next());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questionnaire);

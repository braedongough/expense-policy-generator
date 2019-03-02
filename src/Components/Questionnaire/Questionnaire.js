import React from "react";
import { connect } from "react-redux";
import { Form, Formik, Field } from "formik";
import styled from "styled-components";
import generatePDF from "../../utils/generatePDF";
import { wizardModule, policyModule } from "../../redux/modules";
import { Header, Card } from "../shared/";
import Nav from "./FormNav";
import Wizard from "../Wizard/Wizard";
import Step from "../Wizard/Step";

const QuestionnaireCard = styled(Card)`
  width: 300px;
`;

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
    <QuestionnaireCard>
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
    </QuestionnaireCard>
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

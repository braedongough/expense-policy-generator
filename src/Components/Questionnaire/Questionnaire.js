import React from "react";
import { connect } from "react-redux";
import { Field } from "formik";
import Header from "../Header/Header";
import Wizard from "../Wizard/Wizard";
import Step from "../Wizard/Step";

const Questionnaire = ({ currentStep }) => {
  return (
    <div>
      <Header textLabel={`Step ${currentStep}`} textTitle="Questionnaire" />
      <Wizard>
        <Step>
          <Field type="text" name="companyName" placeholder="Company Name" />
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
    </div>
  );
};

const mapStateToProps = ({ wizard }) => ({
  currentStep: wizard.currentStep,
});

export default connect(mapStateToProps)(Questionnaire);

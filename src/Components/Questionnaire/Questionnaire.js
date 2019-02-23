import React from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Wizard from "../Wizard/Wizard";
import Step from "../Wizard/Step";
import QuestionnaireNav from "./QuestionnaireNav";

const Questionnaire = ({ currentStep }) => {
  return (
    <div>
      <Header textLabel={`Step ${currentStep}`} textTitle="Questionnaire" />
      <Wizard>
        <Step>Butt</Step>
        <Step>lasagne</Step>
        <Step>Bill Murray</Step>
      </Wizard>
      <QuestionnaireNav />
    </div>
  );
};

const mapStateToProps = ({ wizard }) => ({
  currentStep: wizard.currentStep,
});

export default connect(mapStateToProps)(Questionnaire);

import React from "react";
import { connect } from "react-redux";
import { first, second, third } from "../../redux/selectors/policy";
import Header from "../Header/Header";
import Placeholder from "./Placeholder";
import { Paragraph, ParagraphList } from "./Paragraphs";

const Policy = ({
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  currentStep,
}) => {
  return (
    <div>
      <Header textLabel="Expense Policy" textTitle="Expense Policy" />
      <Placeholder visible={currentStep === 1} />
      <ParagraphList>
        <Paragraph text={firstParagraph} />
        <Paragraph text={secondParagraph} />
        <Paragraph text={thirdParagraph} />
      </ParagraphList>
    </div>
  );
};

const mapStateToProps = ({ wizard, policy }) => ({
  firstParagraph: first(policy),
  secondParagraph: second(policy),
  thirdParagraph: third(policy),
  currentStep: wizard.currentStep,
});

export default connect(mapStateToProps)(Policy);

import React from "react";
import { connect } from "react-redux";
import { first, second, third } from "../../redux/selectors/policy";
import { Header, Card } from "../shared";
import Placeholder from "./Placeholder";
import { Paragraph, ParagraphList } from "./Paragraphs";

const Policy = ({
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  currentStep,
}) => {
  return (
    <Card>
      <Header textLabel="Expense Policy" textTitle="Expense Policy" />
      <Placeholder visible={currentStep === 1} />
      <ParagraphList>
        <Paragraph text={firstParagraph} />
        <Paragraph text={secondParagraph} />
        <Paragraph text={thirdParagraph} />
      </ParagraphList>
    </Card>
  );
};

const mapStateToProps = ({ wizard, policy }) => ({
  firstParagraph: first(policy),
  secondParagraph: second(policy),
  thirdParagraph: third(policy),
  currentStep: wizard.currentStep,
});

export default connect(mapStateToProps)(Policy);

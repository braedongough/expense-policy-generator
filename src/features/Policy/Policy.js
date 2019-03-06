import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { first, second, third } from "../../redux/selectors/policy";
import { Title, Card } from "../../shared";
import Placeholder from "./Placeholder";
import { Paragraph, ParagraphList } from "./Paragraphs";

const PolicyCard = styled(Card)`
  min-width: 500px;
  max-width: 670px;
  min-height: ${({ theme }) => theme.sizing.minHeight};
`;

const Policy = ({
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  currentStep,
}) => {
  return (
    <PolicyCard>
      <Title>Expense Policy</Title>
      <Placeholder visible={currentStep === 1} />
      <ParagraphList>
        <Paragraph text={firstParagraph} />
        <Paragraph text={secondParagraph} />
        <Paragraph text={thirdParagraph} />
      </ParagraphList>
    </PolicyCard>
  );
};

const mapStateToProps = ({ wizard, policy }) => ({
  firstParagraph: first(policy),
  secondParagraph: second(policy),
  thirdParagraph: third(policy),
  currentStep: wizard.currentStep,
});

export default connect(mapStateToProps)(Policy);

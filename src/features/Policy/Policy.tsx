import React, { FC } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Title, Card } from "../../shared";
import Placeholder from "./Placeholder";
import { Paragraph, ParagraphList } from "./Paragraphs";

const PolicyCard = styled(Card)`
  min-width: 500px;
  max-width: 670px;
  min-height: ${({ theme }) => theme.sizing.minHeight};
`;

interface IProps {
  policy: any;
  currentStep: number;
}

const Policy: FC<IProps> = ({ policy, currentStep }) => {
  return (
    <PolicyCard>
      <Title>Expense Policy</Title>
      <Placeholder visible={currentStep === 1} />
      <ParagraphList>
        <Paragraph>The company name is {policy.companyName}.</Paragraph>
        <Paragraph>There are {policy.numberOfEmployees} employees.</Paragraph>
        <Paragraph>The budget is {policy.budget}.</Paragraph>
      </ParagraphList>
    </PolicyCard>
  );
};

const mapStateToProps = ({ wizard, policy }: any) => ({
  policy,
  currentStep: wizard.currentStep,
});

export default connect(mapStateToProps)(Policy);

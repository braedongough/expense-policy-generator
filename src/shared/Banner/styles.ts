import styled from "styled-components";
import Button from "../Button";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid rgb(247, 223, 229);
`;

export const TrialButton = styled(Button)`
  border-radius: 31px;
`;

export const Img = styled.img`
  height: 35px;
  width: 85px;
  align-self: center;
`;

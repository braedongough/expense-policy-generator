import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 15px 25px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 10px;
  background: white;
`;

export default Card;

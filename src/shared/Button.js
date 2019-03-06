import styled from "styled-components";

const Button = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  border: none;
  padding: 12px 25px;
  background: ${({ theme }) => theme.colors.pleo};
  font-weight: 600;
  letter-spacing: 0.8px;
  font-size: 14px;
  cursor: pointer;
`;

export default Button;

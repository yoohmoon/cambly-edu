import { darken } from "polished";
import styled from "styled-components";

const Button = styled.button`
  width: ${({ width }) => width || 222}px;
  background-color: ${({ theme, bgColor }) =>
    theme.colors.main_yellow || bgColor};
  border: none;
  border-radius: 8px;
  padding: 10px 0;

 

  font-weight: 700;
  font-size: 1rem;

  cursor: pointer;

  &:hover {
    background-color: ${darken(0.095, "#FFC929")};
    /* background-color: ${darken(0.095, "#228891")}; */
  }
`;

export default Button;

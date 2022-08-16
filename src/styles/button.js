import styled, { css } from "styled-components";
import { ButtonBase } from "../components/ButtonBase";

export const Button = styled(ButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--grey-0);
  background-color: ${(props) => props.backgroundcolor};
  border: 0.3rem solid ${(props) => props.backgroundcolor};
  border-radius: 0.2rem;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  font-weight: 500;
  font-family: "Inter", sans-serif;

  &:hover {
    background-color: ${(props) => props.hover};
    border: 0.3rem solid ${(props) => props.hover};
  }

  ${(props) => {
    switch (props.sizebutton) {
      case "primary":
        return css`
          height: 38px;

          @media (min-width: 800px) {
            height: 48px;
          }
        `;

      case "secondary":
        return css`
          height: 32px;
        `;

      case "Modal":
        return css`
          border: none;
          outline: none;
          background-color: transparent;
          color: var(--grey-1);

          &:hover {
            background-color: transparent;
            border: none;
          }
        `;
      default:
        return false;
    }
  }}
`;

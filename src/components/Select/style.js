import styled from "styled-components";
import { StyledSelect } from ".";

export const Select = styled(StyledSelect)`
  width: 90%;
  padding: 0.4rem;
  background-color: var(--grey-2);
  color: var(--grey-0);
  border: 0.1rem solid var(--grey-2);
  border-radius: 0.2rem;

  &:focus {
    outline: 0.1rem solid var(--grey-0);
  }

  option {
    &:disabled {
      color: var(--grey);
    }
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  div {
    width: 90%;
    display: flex;
    align-items: flex-start;
  }
`;

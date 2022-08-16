import styled from "styled-components";

export const ContainerCards = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  li {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    background-color: var(--grey);
    padding: 1rem 0.8rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: var(--grey-2);

      p {
        color: var(--grey-0);
      }
    }
  }
`;

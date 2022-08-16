import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);

  .container {
    max-width: 290px;
    width: 100%;
    border-radius: 3px;
    position: absolute;
    background-color: var(--grey-3);
    z-index: 11;
    top: 30vh;
    left: 18vw;

    @media (min-width: 800px) {
      left: 38vw;
      top: 23vh;
    }
  }

  .title__modal {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
    background-color: var(--grey-2);
    border-radius: 3px 3px 0 0;
  }

  .form__modal {
    padding: 1rem 0;
  }
`;

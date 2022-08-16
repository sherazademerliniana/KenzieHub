import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  @media (min-width: 800px) {
    max-width: 780px;
  }

  .decoration {
    max-width: 100vw;
    width: 100%;
    position: absolute;
    left: 0;
    height: 2px;
    background-color: var(--grey-3);
  }
`;

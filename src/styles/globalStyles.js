import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary:#ff577f;
        --primary-focus:#ff427f;
        --primary-disable:#59323f;

        --grey: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1:#868E96;
        --grey-0:#f8f9fa;

        --error:#E83F5B;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }

    ul,li,ol {
        list-style-type: none;
    }

    body{
        background-color: var(--grey);
        color: var(--grey-0);
    }

    h1{
        color: var(--grey-0);
    }

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0.3rem;
`;

export const ContainerPages = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-3);
  padding: 1.5rem 0;
  border-radius: 0.3rem;

  @media (min-width: 400px) {
    max-width: 370px;
  }

  ${(props) => {
    switch (props.page) {
      case "home":
        return css`
          @media (min-width: 800px) {
            max-width: 780px;
          }
        `;

      default:
        return false;
    }
  }}
`;

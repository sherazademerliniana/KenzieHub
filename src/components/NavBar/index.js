import { useHistory } from "react-router-dom";

import { Button } from "../../styles/button";
import { Title } from "../../styles/typography";
import { StyledDiv } from "./style";

export const NavBar = ({ setAuthenticated }) => {
  const history = useHistory();

  return (
    <>
      {history.location.pathname === "/" && (
        <StyledDiv justifyContent="center" padding="3rem 0 2rem 0">
          <Title tag="h1" titleSize="title1" color="var(--primary)">
            Kenzie Hub
          </Title>
        </StyledDiv>
      )}

      {history.location.pathname === "/register" && (
        <StyledDiv
          justifyContent="space-between"
          padding="3rem 0 2rem 0"
          align="center"
        >
          <Title tag="h1" titleSize="title1" color="var(--primary)">
            Kenzie Hub
          </Title>

          <Button
            sizebutton="secondary"
            backgroundcolor="var(--grey-3)"
            hover="var(--grey-2)"
            padding=".3rem"
            onClick={() => history.push("/")}
          >
            Voltar
          </Button>
        </StyledDiv>
      )}

      {history.location.pathname === "/home" && (
        <StyledDiv
          justifyContent="space-between"
          padding="3rem 0 .8rem 0"
          align="center"
        >
          <Title tag="h1" titleSize="title1" color="var(--primary)">
            Kenzie Hub
          </Title>

          <Button
            sizebutton="secondary"
            backgroundcolor="var(--grey-3)"
            padding=".3rem"
            hover="var(--grey-2)"
            onClick={() => {
              localStorage.clear();
              setAuthenticated(false);
            }}
          >
            Sair
          </Button>
        </StyledDiv>
      )}
    </>
  );
};

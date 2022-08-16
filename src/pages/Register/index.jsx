import { Redirect } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister";
import { NavBar } from "../../components/NavBar";
import { ContainerPages } from "../../styles/globalStyles";
import { Title } from "../../styles/typography";
import { ContainerRegister } from "./style";

export const Register = ({ authenticated }) => {
  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <ContainerRegister>
      <NavBar />
      <ContainerPages>
        <Title tag="h1" titleSize="title1" padding=".8rem">
          Crie sua conta
        </Title>
        <Title
          tag="p"
          titleSize="headline"
          color="var(--grey-1)"
          padding=".8rem 0 1.5rem 0 "
        >
          Rapido e grátis, vamos nessa
        </Title>
        <FormRegister />
      </ContainerPages>
    </ContainerRegister>
  );
};

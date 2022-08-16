import { Redirect } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";
import { NavBar } from "../../components/NavBar";
import { ContainerPages } from "../../styles/globalStyles";
import { Title } from "../../styles/typography";

export const Login = ({ authenticated, setAuthenticated }) => {
  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <NavBar />

      <ContainerPages>
        <Title tag="h1" titleSize="title1">
          Login
        </Title>
        <FormLogin
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </ContainerPages>
    </>
  );
};

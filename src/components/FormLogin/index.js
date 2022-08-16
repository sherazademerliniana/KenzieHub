import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../../styles/button";
import { Title } from "../../styles/typography";
import { Input } from "../Input/style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../service/api";
import { toast } from "react-toastify";
import { StyledForm } from "../../styles/form";

export const FormLogin = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Required field")
      .email("Enter your email valid"),
    password: yup.string().required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const history = useHistory();

  const onSubmit = async (data) => {
    const API = Api();

    data = JSON.stringify(data);

    const res = await API.postLogin(data);
    if (res.status === "error") {
      toast.error(res.message, { autoClose: 1500 });
    } else {
      localStorage.setItem("@kenziehub:id", res.user.id);
      setAuthenticated(true);
      history.push("/home");
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          placeholder="Digite aqui seu email"
          type="text"
          register={register}
          name="email"
          error={errors?.email?.message}
        ></Input>

        <Input
          label="Senha"
          placeholder="Digite aqui sua senha"
          type="password"
          register={register}
          name="password"
          error={errors?.password?.message}
        ></Input>

        <Button
          backgroundcolor="var(--primary)"
          width="90%"
          padding=".3rem"
          type="submit"
          hover="var(--primary-focus)"
        >
          Entrar
        </Button>

        <Title
          tag="p"
          titleSize="headline"
          color="var(--grey-1)"
          padding=".7rem"
        >
          Ainda não possui uma conta?
        </Title>

        <Button
          backgroundcolor="var(--grey-1)"
          width="90%"
          padding=".3rem"
          hover="var(--grey-2)"
          onClick={() => history.push("/register")}
        >
          Cadastre-se
        </Button>
      </StyledForm>
    </>
  );
};

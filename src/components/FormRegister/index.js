import { useForm } from "react-hook-form";
import { Button } from "../../styles/button";
import { Input } from "../Input/style";
import { Select } from "../Select/style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../service/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { StyledForm } from "../../styles/form";

export const FormRegister = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Required field")
      .email("Enter your email valid"),
    password: yup
      .string()
      .required("Password required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Minimum 8 characters: one uppercase letter, one lowercase letter and one number"
      ),
    name: yup.string().required("Required Field").min(3, "Minimum 3 leters"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "No match"),
    bio: yup.string().required("Required Field"),
    contact: yup.string().required("Required Field"),
    course_module: yup.string().required("Required Field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const history = useHistory();

  const onSubmit = async (data) => {
    const API = Api();

    delete data.confirmPassword;

    data = JSON.stringify(data);

    const res = await API.postCreateUser(data);

    if (res.status === "error") {
      toast.error(res.message);
    } else {
      toast.success("Sucess", { autoClose: 1500 });

      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome"
          placeholder="Digite aqui seu nome"
          type="text"
          register={register}
          name="name"
          error={errors?.name?.message}
        ></Input>

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
          register={register}
          name="password"
          type="password"
          error={errors?.password?.message}
        ></Input>

        <Input
          label="Confirmar Senha"
          placeholder="Digite novamente sua senha"
          register={register}
          name="confirmPassword"
          type="password"
          error={errors?.confirmPassword?.message}
        ></Input>

        <Input
          label="Bio"
          placeholder="Fale sobre você"
          type="text"
          register={register}
          name="bio"
          error={errors?.bio?.message}
        ></Input>

        <Input
          label="Contato"
          placeholder="Opção de contato"
          type="text"
          register={register}
          name="contact"
          error={errors?.contact?.message}
        ></Input>

        <Select
          label="Selecionar Módulo"
          register={register}
          name="course_module"
          error={errors?.course_module?.message}
        >
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro Módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto Módulo
          </option>
        </Select>

        <Button
          backgroundcolor="var(--primary)"
          width="90%"
          padding=".3rem"
          type="submit"
          hover="var(--primary-focus)"
        >
          Cadastrar
        </Button>
      </StyledForm>
    </>
  );
};

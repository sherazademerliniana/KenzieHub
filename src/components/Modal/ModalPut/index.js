import { useForm } from "react-hook-form";
import { Button } from "../../../styles/button";
import { Title } from "../../../styles/typography";
import { Input } from "../../Input/style";
import { Select } from "../../Select/style";
import { ModalStyled } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../../service/api";
import { toast } from "react-toastify";
import { StyledForm } from "../../../styles/form";

export const ModalPath = ({ setModalPath, idPost, user }) => {
  const schema = yup.object().shape({
    title: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const onSubmit = async (data) => {
    console.log(data);
    data = JSON.stringify(data);

    const API = Api();

    await API.putTech(data, idPost);
    toast.success("Sucess updated", { autoClose: 1500 });

    setTimeout(() => {
      document.location.reload(true);
    }, 2000);

    setModalPath(false);
  };

  const tech = user.find((tech) => {
    return tech.id === idPost;
  });

  const deleteTech = async (id) => {
    const API = Api();

    const res = await API.deleteTech(id);

    setModalPath(false);
    toast.success("Sucess delete");

    setTimeout(() => {
      document.location.reload(res.ok);
    }, 5000);
  };

  return (
    <ModalStyled>
      <div className="container">
        <div className="title__modal">
          <Title tag="h3" titleSize="title3" color="var(--grey-0)">
            Tecnologia Detalhes
          </Title>

          <Button sizebutton="Modal" onClick={() => setModalPath(false)}>
            X
          </Button>
        </div>

        <div className="form__modal">
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nome"
              placeholder={tech.title}
              type="text"
              name="title"
              register={register}
              error={errors?.title?.message}
            ></Input>

            <Select label="Selecionar Status" name="status" register={register}>
              <option disabled selected>
                {tech.status}
              </option>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </Select>

            <div className="form__button">
              <Button
                backgroundcolor="var(--primary)"
                width="60%"
                padding=".2rem"
                type="submit"
                sizebutton="primary"
                hover="var(--primary-focus)"
              >
                Salvar alterações
              </Button>

              <Button
                backgroundcolor="var(--grey-1)"
                width="30%"
                padding=".2rem"
                sizebutton="primary"
                type="button"
                hover="var(--grey-2)"
                onClick={() => {
                  deleteTech(idPost);
                }}
              >
                Excluir
              </Button>
            </div>
          </StyledForm>
        </div>
      </div>
    </ModalStyled>
  );
};

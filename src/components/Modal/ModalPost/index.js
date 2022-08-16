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

export const Modal = ({ setModalVisible }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Required Field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const onSubmit = async (data) => {
    const API = Api();

    data = JSON.stringify(data);

    const res = await API.postTech(data);

    setModalVisible(false);

    if (res.status === "error") {
      toast.error(res.message, { autoClose: 1500 });
    } else {
      toast.success("Sucess tech create!!", { autoClose: 1500 });

      setTimeout(() => {
        document.location.reload(true);
      }, 2000);
    }
  };

  return (
    <ModalStyled>
      <div className="container">
        <div className="title__modal">
          <Title tag="h3" titleSize="title3" color="var(--grey-0)">
            Cadastrar Tecnologia
          </Title>

          <Button sizebutton="Modal" onClick={() => setModalVisible(false)}>
            X
          </Button>
        </div>

        <div className="form__modal">
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nome"
              placeholder="Ex: TypeScript"
              type="text"
              name="title"
              register={register}
              error={errors?.title?.message}
            ></Input>

            <Select label="Selecionar Status" name="status" register={register}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </Select>

            <Button
              backgroundcolor="var(--primary)"
              width="90%"
              padding=".3rem"
              type="submit"
              hover="var(--primary-focus)"
            >
              Cadastrar Tecnologia
            </Button>
          </StyledForm>
        </div>
      </div>
    </ModalStyled>
  );
};

import { Button } from "../../styles/button";
import { Title } from "../../styles/typography";
import { StyledDiv } from "./style";
import { IoMdAdd } from "react-icons/io";

export const TitleContainerCards = ({ setModalVisible }) => {
  return (
    <StyledDiv>
      <Title tag="h2" titleSize="title2">
        Tecnologias
      </Title>
      <Button
        backgroundcolor="var(--grey-3)"
        padding=".3rem"
        hover="var(--grey-2)"
        onClick={() => setModalVisible(true)}
      >
        <IoMdAdd />
      </Button>
    </StyledDiv>
  );
};

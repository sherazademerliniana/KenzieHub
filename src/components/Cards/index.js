import { Title } from "../../styles/typography";
import { ContainerCards } from "./style";

export const Cards = ({ techs, setModalPath, setIdPost }) => {
  return (
    <ContainerCards>
      {techs?.map((tech) => {
        return (
          <li
            key={tech.id}
            onClick={() => {
              setModalPath(true);
              setIdPost(tech.id);
            }}
          >
            <Title tag="h3" titleSize="title3">
              {tech.title}
            </Title>

            <Title tag="p" titleSize="headline" color="var(--grey-1)">
              {tech.status}
            </Title>
          </li>
        );
      })}
    </ContainerCards>
  );
};

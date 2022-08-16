import { Title } from "../../styles/typography";
import { StyledHeader } from "./style";

export const Header = ({ name, course_module }) => {
  return (
    <StyledHeader>
      <Title tag="h1" titleSize="title1">
        {name}
      </Title>
      <Title tag="p" titleSize="headline" weigth="Bold" color="var(--grey-1)">
        {course_module}
      </Title>
    </StyledHeader>
  );
};

import { Title } from "../../styles/typography";
import { StyledDiv } from "./style";

export const StyledSelect = ({
  label,
  children,
  className,
  register,
  name,
  ...rest
}) => {
  return (
    <StyledDiv>
      <div>
        <label>
          <Title tag="p" titleSize="headline">
            {label}
          </Title>
        </label>
      </div>

      <select
        className={className}
        {...(register !== undefined && register(name))}
        {...rest}
      >
        {children}
      </select>
    </StyledDiv>
  );
};

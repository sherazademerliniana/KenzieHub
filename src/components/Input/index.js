import { Title } from "../../styles/typography";
import { StyledDiv } from "./style";

export const StyledInput = ({
  label,
  children,
  className,
  placeholder,
  type,
  register,
  name,
  error,
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

      <input
        className={className}
        placeholder={placeholder}
        type={type}
        {...(register !== undefined && register(name))}
        {...rest}
      >
        {children}
      </input>

      {error !== undefined && (
        <div>
          <Title
            tag="p"
            titleSize="headline"
            fontStyle="italic"
            color="var(--error)"
          >
            {error}
          </Title>
        </div>
      )}
    </StyledDiv>
  );
};

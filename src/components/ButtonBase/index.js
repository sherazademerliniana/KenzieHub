export const ButtonBase = ({ children, className, type, ...rest }) => {
  return (
    <button className={className} type={type} {...rest}>
      {children}
    </button>
  );
};

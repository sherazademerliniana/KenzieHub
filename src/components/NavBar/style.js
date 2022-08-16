import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.align};
  padding: ${(props) => props.padding};
`;

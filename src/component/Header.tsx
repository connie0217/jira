import styled from "@emotion/styled";

export const Header = styled.div<{ gap?: string | number; justifyContent?: string; marginBottom?: string | number;}>`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'space-between'};
    margin-bottom: ${(props) =>
  props.marginBottom ? props.marginBottom + "rem" : 0};
`
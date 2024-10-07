import styled, { css } from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ForgotPassword = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Regular};
    font-size: ${theme.Font_Size.MD}px;
    color: ${theme.Colors.Blue};
  `};
`
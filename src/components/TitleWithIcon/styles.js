import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: ${({ variant }) =>
    variant === "secondary" ? "column" : "row"};
  margin: ${({ variant }) => (variant === "secondary" ? "0" : "25px 0 25px 0")};
  align-items: center;
  gap: 6px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.ExtraBold};
    font-size: ${theme.Font_Size.LG}px;
    color: ${theme.Colors.Blue_500};
  `};
  text-align: center;
`;

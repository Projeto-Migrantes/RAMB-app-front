import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Bold};
    font-size: ${theme.Font_Size.SM}px;
    color: ${theme.Colors.Black};
  `};
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Regular};
    font-size: ${theme.Font_Size.SM}px;
    color: ${theme.Colors.Black};
  `};
`;

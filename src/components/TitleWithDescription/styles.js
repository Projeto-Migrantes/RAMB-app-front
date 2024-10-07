import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
  align-items: center;
  gap: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.ExtraBold};
    font-size: ${theme.Font_Size.XL}px;
    color: ${theme.Colors.Purple};
  `};
  text-align: center;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Regular};
    font-size: ${theme.Font_Size.MD}px;
    color: ${theme.Colors.Black};
  `};
  text-align: center;
  padding: 0px 30px;
`;

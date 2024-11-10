import { Image } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px 30px;
  gap: 8px;
  margin-bottom: 30px;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Informartion = styled.View`
  gap: 25px;
`;

export const TextCategory = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Regular};
    font-size: ${theme.Font_Size.XS}px;
    color: ${theme.Colors.Blue};
  `};
`;

export const TextTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Bold};
    font-size: ${theme.Font_Size.MD}px;
    color: ${theme.Colors.Black};
  `};

`;

export const TextDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Regular};
    font-size: ${theme.Font_Size.SM}px;
    color: ${theme.Colors.Gray_700};
  `};
  text-align: justify;
  margin-bottom: 25px;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: "large",
  color: theme.Colors.Blue,
}))`
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

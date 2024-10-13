import { Image } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px 30px;
  gap: 16px;
  margin-bottom: 30px;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Informartion = styled.View`
    gap: 25px;
`;
export const InstitutionImage = styled(Image)`
  border-radius: 10px;
  width: 250px;
  height: 250px;
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
`;

import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: flex-start;
  gap: 8px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const TextTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Bold};
    font-size: ${theme.Font_Size.SM}px;
    color: ${theme.Colors.Blue};
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

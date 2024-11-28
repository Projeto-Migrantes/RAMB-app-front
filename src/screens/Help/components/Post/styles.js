import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const TitleUnderLine = styled.View`
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.ExtraBold};
    font-size: ${theme.Font_Size.LG}px;
    color: ${theme.Colors.Blue_500};
  `};
  text-align: center;
`;

export const Underline = styled.View`
  border-width: 1px;
  border-radius: 20px;
  width: 36px;
  border-color:${({ theme }) => theme.Colors.Blue_500};
`;

export const Card = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  gap: 10px;
  background-color: ${({ theme }) => theme.Colors.Gray_500};
`;

export const TitleCard = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Bold};
    font-size: ${theme.Font_Size.SM}px;
    color: ${theme.Colors.Blue_700};
  `};
  text-align: center;
`;

export const DescriptionCard = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Regular};
    font-size: ${theme.Font_Size.SM}px;
    color: ${theme.Colors.Black};
  `};
  text-align: center;
`;
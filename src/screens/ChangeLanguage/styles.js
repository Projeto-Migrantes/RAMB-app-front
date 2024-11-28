import styled, { css } from "styled-components/native";
import TypeWriter from "react-native-typewriter";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  gap: 20px;
`;


export const Title = styled.Text`
  color: ${({ theme }) => theme.Colors.Black};
  font-size: ${({ theme }) => theme.Font_Size.LG}px;
`;

export const TypeWriterStyled = styled(TypeWriter)`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.ExtraBold};
    font-size: 25px;
    color: ${theme.Colors.Blue_500};
  `};
  text-align: center;
`;

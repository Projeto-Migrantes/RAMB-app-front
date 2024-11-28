import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.Colors.White};
  padding: 20px;
`;

export const Label = styled.Text`

${({ theme }) => css`
    color: ${theme.Colors.Black};
    font-family: ${theme.Font_Family.Regular};
    font-size: ${theme.Font_Size.SM}px;
  `};
  align-self: flex-start;
  padding-left: 16px;
`;

export const CommonInput = styled(TextInput)`
  width: 100%;
  border-width: 1px;
  padding: 8px 0px 8px 16px;
  margin-bottom: 20px;
  border-radius: 999px;

  ${({ theme }) => css`
    border-color: ${theme.Colors.Blue_500};
    color: ${theme.Colors.Gray_700};
    background-color: ${theme.Colors.White};
    font-family: ${theme.Font_Family.Regular};
    font-size: ${theme.Font_Size.SM}px;
  `};
`;

export const MessageInput = styled(CommonInput)`
  width: 98%;
  border-width: 1px;
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 12px;
  height: 120px;
  text-align-vertical: top;
`;

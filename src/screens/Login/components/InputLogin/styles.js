import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const SearchContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.Colors.Purple};
  border-radius: 999px;
  padding: 10px 20px;
`;

export const Input = styled(TextInput)`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.Colors.Gray_700};
    background-color: ${theme.Colors.White};
    font-family: ${theme.Font_Family.Regular};
    font-size: ${theme.Font_Size.MD}px;
  `};
`;

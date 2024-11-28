import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    padding: 0 30px;  
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const ForgotPassword = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Regular};
    font-size: ${theme.Font_Size.MD}px;
    color: ${theme.Colors.Blue_300};
  `};
`
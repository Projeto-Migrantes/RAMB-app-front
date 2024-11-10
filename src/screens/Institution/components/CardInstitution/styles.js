import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  min-height: 135px;
  max-height: 220px;
  padding: 20px;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.Colors.Blue};
  gap: 2px;
  justify-content: space-between;
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
    font-size: ${theme.Font_Size.XS}px;
    color: ${theme.Colors.Gray_700};
  `};
`;

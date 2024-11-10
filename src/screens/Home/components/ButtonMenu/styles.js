import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.Colors.Blue};
  border-radius: 15px;
  width: 150px;
  height: 150px;
  gap: 16px;
  margin: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Bold};
    font-size: ${theme.Font_Size.MD}px;
    color: ${theme.Colors.Blue};
  `};
  text-align: center;
  padding: 0 10px;
`;

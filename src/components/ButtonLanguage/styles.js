import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 99999px;
  gap: 12px;
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-color: ${({ theme, isActive }) =>
    isActive ? theme.Colors.Blue_500 : theme.Colors.Blue_500};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.Colors.Blue_500 : "transparent"};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.Font_Size.LG}px;
  color: ${({ theme, isActive }) => (isActive ? "#fff" : theme.Colors.Blue_500)};
  font-family: ${({ theme }) => theme.Font_Family.Bold};
  text-align: center;
`;

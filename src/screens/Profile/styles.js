import styled, { css } from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  align-items: center;
  padding: 0 30px;
  gap: 16px;
  background-color: ${({ theme }) => theme.Colors.White};
  margin-bottom: 24px;
`;
export const Content = styled.View`
display: flex;
flex-direction: column;
gap: 16px;
padding: 0 16px;

`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.ExtraBold};
    font-size: ${theme.Font_Size.LG}px;
    color: ${theme.Colors.Purple};
  `};
  margin-bottom: 16px;
`;

export const EditOptions = styled(TouchableOpacity)`
margin-top: 16px;
`;

export const EditOptionsText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.Font_Family.Bold};
    font-size: ${theme.Font_Size.SM}px;
    color: ${theme.Colors.Blue};
  `};
  text-align: center;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: "large",
  color: theme.Colors.Blue,
}))`
  width: 500px;
  height: 130px;
`;

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
  size: 130,
  color: theme.Colors.Purple,
}))`
  width: 130px;
  height: 130px;
`;


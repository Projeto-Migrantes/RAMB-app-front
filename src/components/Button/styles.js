import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  border-radius: 99999px;
  justify-content: center;
  align-items: center;

  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return theme.Colors.Purple;
      case "secondary":
        return theme.Colors.White;
      case "terciary":
        return theme.Colors.White;
    }
  }};
  border-width: 1px;

  border-color: ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return theme.Colors.Purple;
      case "secondary":
        return theme.Colors.Purple;
      case "terciary":
        return theme.Colors.Red;
    }
  }};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.Font_Size.LG}px;
  color: ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return theme.Colors.White;
      case "secondary":
        return theme.Colors.Purple;
      case "terciary":
        return theme.Colors.Red;
    }
  }};

  font-family: ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return theme.Font_Family.Bold;
      case "secondary":
        return theme.Font_Family.Regular;
      case "terciary":
        return theme.Font_Family.Bold;
    }
  }};

  text-align: center;
`;

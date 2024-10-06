import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.Colors.Blue};
  flex-direction: row;
  align-items: center;
  justify-content: ${({ showBackButton }) =>
    showBackButton ? "space-between" : "center"};
  padding: 6px 20px ;
  border-bottom-right-radius: 50px;
`;

export const BackButton = styled.TouchableOpacity`
  font-size: 24px;
`;

export const BackIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 32,
  color: theme.Colors.White,
}))``;

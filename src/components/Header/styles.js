import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Platform } from "react-native";

const isIPhone = Platform.OS === "ios" && !Platform.isPad;

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.Colors.Blue_700};
  flex-direction: row;
  align-items: center;
  justify-content: ${({ showBackButton }) =>
    showBackButton ? "space-between" : "center"};
  padding: ${isIPhone ? "0px 20px -20px 20px" : "10px 20px"};
  border-bottom-right-radius: 50px;
`;

export const BackButton = styled.TouchableOpacity`
  font-size: 24px;
`;

export const BackIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 32,
  color: theme.Colors.White,
}))``;

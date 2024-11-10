import DropDownPicker from "react-native-dropdown-picker";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  gap: 10px;
  flex: 1;  
`;

export const Filter = styled(DropDownPicker)`
  background-color: ${({ theme }) => theme.Colors.Gray_500};
  border-color: ${({ theme }) => theme.Colors.Gray_500};
  border-radius: 999px;
  padding: 5px 20px;
  min-height: 38px;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: "large",
  color: theme.Colors.Blue,
}))`
  width: 500px;
  height: 130px;
`;

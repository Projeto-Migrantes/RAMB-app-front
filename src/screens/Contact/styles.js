import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.Colors.White};
  padding: 20px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.Font_Size.SM}px;
  color: ${({ theme }) => theme.Colors.Black};
  margin-bottom: 5px;
  align-self: flex-start;
  padding-left: 12px;
`;

export const CommonInput = styled(TextInput)`
  width: 98%;
  border-width: 1px;
  border-color: ${({ theme }) => theme.Colors.Blue};
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 999px;
`;

export const MessageInput = styled(CommonInput)`
  width: 98%;
  border-width: 1px;
  padding: 10px;
  margin-bottom: 100px;
  border-radius: 12px;
  height: 120px; 
`;
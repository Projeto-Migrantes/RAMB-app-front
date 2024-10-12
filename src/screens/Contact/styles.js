import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1; 
  justify-content: flex-start;
  padding: 20px;
`;

export const CommonInput = styled.TextInput`
  width: 100%;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.Colors.Blue};
  border-radius: 999px; 
  padding: 5px 20px;
  margin: 10px;
  
`;

export const MessageInput = styled(CommonInput)`
  padding: 20px;
  border-radius: 12px;
`;

import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
width: 300px;
height: 50px;
border-radius: 99999px;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.Colors.White};  


border-width: 1px;
border-color: ${({ theme }) => theme.Colors.Blue};


flex-direction: row;
  justify-content: flex-start; 
  align-items: center;
  padding-left: 80px; /*centraliza tudo horizontalmente*/ 
  margin-bottom: 20px
`;

export const Title = styled.Text`
font-size: ${({ theme }) => theme.Font_Size.LG}px;
color: ${({ theme }) => theme.Colors.Blue};
font-family: ${({ theme }) => theme.Font_Family.Bold};
line-height: ${({ theme }) => theme.Font_Size.LG * 2.0}px; 

margin-left: 12px;/*move horizontalmente somente o texto*/
text-align: center;
display: flex;
 justify-content: center;
 align-items: center;
 height: 50px;/*altura do texto*/ 
`;
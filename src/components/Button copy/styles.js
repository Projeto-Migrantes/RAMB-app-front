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

`;

export const Title = styled.Text`
font-size: ${({ theme }) => theme.Font_Size.LG}px;
color: ${({ theme }) => theme.Colors.White};
font-family: ${({ theme }) => theme.Font_Family.Bold};


text-align: center;
`;
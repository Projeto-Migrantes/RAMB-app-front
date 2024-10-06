import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.Colors.White};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`   
color: ${({ theme }) => theme.Colors.Black};
font-size: ${({ theme }) => theme.Font_Size.LG}px;
    
`;
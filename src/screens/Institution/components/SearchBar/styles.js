import React from "react";
import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import AntDesign from "@expo/vector-icons/AntDesign";

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.Colors.Blue};
  border-radius: 999px;
  padding: 5px 20px;
  margin: 10px;
`;

export const SearchInput = styled(TextInput)`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.Colors.Gray_700};
    background-color: ${theme.Colors.White};
    font-family: ${theme.Font_Family.Regular};
    font-size: ${theme.Font_Size.MD}px;
  `};
`;

export const Icon = styled(AntDesign).attrs(({ theme }) => ({
  name: "search1",
  size: 24,
  color: theme.Colors.Blue,
}))`
  align-self: center;
`;

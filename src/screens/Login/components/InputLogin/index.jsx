import { TouchableOpacity } from "react-native";
import { SearchContainer, Input, Test } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import theme from "@theme";

export function InputLogin({ icon, password, ...props }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <SearchContainer>
      {icon}
      <Input {...props} secureTextEntry={password && !isPasswordVisible} />
      {password && (
        <Test>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Feather
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={20}
              color={theme.Colors.Purple}
            />
          </TouchableOpacity>
        </Test>
      )}
    </SearchContainer>
  );
}

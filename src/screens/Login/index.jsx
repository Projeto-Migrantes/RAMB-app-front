import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import theme from "@theme/index";
import { BackHandler, View } from "react-native";
import { TitleWithDescription } from "@components/TitleWithDescription";
import { Container, ForgotPassword } from "./styles";
import { useTranslation } from "react-i18next";
import "@utils/i18n";
import { InputLogin } from "./components/InputLogin";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import api from "../../../axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "../../components/Loading/Index";

const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    alert("Erro ao realizar login. Por favor, tente novamente.");
  }
};
export function Login() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const SignIn = async () => {
    try {
      setLoading(true);
      const response = await api.post("/migrant/login", { email, password });
      const authHeader = await response.headers["authorization"];
      const token = authHeader.split(" ")[1];
      await saveToken(token);
      navigation.navigate("home");
    } catch (error) {
      alert(t("Erro ao realizar login. Por favor, tente novamente."));
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true; 
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );
  function handleHelp() {
    navigation.navigate("help");
  }

  function handleContact() {
    navigation.navigate("contact");
  }

  function handleChangeLanguage() {
    navigation.navigate("changeLanguage");
  }
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header />
      <TitleWithDescription
        title="Login"
        description={t(
          "Use login e senha fornecidos pelo posto de atendimento."
        )}
      />
      <Container>
        <InputLogin
          placeholder={t("Digite seu Email")}
          icon={<Fontisto name="email" size={16} color={theme.Colors.Purple} />}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <InputLogin
          placeholder={t("Digite sua Senha")}
          icon={<Feather name="lock" size={16} color={theme.Colors.Purple} />}
          value={password}
          onChangeText={setPassword}
          password
        />
        <Button
          variant="primary"
          title={loading ? <Loading /> : t("Entrar")}
          onPress={SignIn}
          disabled={loading}
        />
        <ForgotPassword onPress={handleContact}>
          {t("Esqueci minha senha")}
        </ForgotPassword>
        <Button
          variant="secondary"
          title={t("Precisa de Ajuda?")}
          onPress={handleHelp}
        />
        <Button
          variant="secondary"
          title={t("Mudar Idioma")}
          onPress={handleChangeLanguage}
        />
      </Container>
    </View>
  );
}

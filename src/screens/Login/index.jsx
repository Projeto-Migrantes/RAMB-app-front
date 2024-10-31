import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import theme from "@theme/index";
import { Text, View } from "react-native";
import { TitleWithDescription } from "@components/TitleWithDescription";
import { Container, ForgotPassword } from "./styles";
import { useTranslation } from "react-i18next";
import "@utils/i18n";
import { InputLogin } from "./components/InputLogin";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import api from "../../../axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "react-hook-form";
import { Loading } from "../../components/Loading/Index";

// const email = "alex.oliveira@example.com";
// const password = "senhaForte123"
const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem("bearerToken", token);
  } catch (error) {
    console.error("Erro ao salvar o token", error);
  }
};
export function Login() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleHelp() {
    navigation.navigate("help");
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log("Iniciando a chamada de API...");
      console.log("Email:", email);
      console.log("Password:", password);

      const response = await api.post("/migrant/login", { email, password });
      const authHeader = await response.headers["authorization"];
      const token = authHeader.split(" ")[1];
      await saveToken(token);
      setLoading(false);
      navigation.navigate("home");
    } catch (error) {
      alert("Erro ao realizar login. Por favor, tente novamente.");
      console.error("Erro ao realizar login", error);
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
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
          title={loading ? <Loading/> : t("Entrar")}
          onPress={fetchData}
          disabled={loading}
        />
        <ForgotPassword>{t("Esqueci minha senha")}</ForgotPassword>
        <Button variant="secondary" title={t("Precisa de Ajuda?")} onPress={handleHelp} />
      </Container>
    </View>
  );
}

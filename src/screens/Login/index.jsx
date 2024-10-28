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

export function Login() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  function handleHome() {
    navigation.navigate("home");
  }
  function handleHelp() {
    navigation.navigate("help");
  }
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
          keyboardType = "email-address"
        />
        <InputLogin
          placeholder={t("Digite sua Senha")}
          icon={<Feather name="lock" size={16} color={theme.Colors.Purple} />}
          secureTextEntry={true}
        />
        <Button variant="primary" title={t("Entrar")} onPress={handleHome} />
        <ForgotPassword>{t("Esqueci minha senha")}</ForgotPassword>
        <Button
          variant="secondary"
          title={t("Precisa de Ajuda?")}
          onPress={handleHelp}
        />
      </Container>
    </View>
  );
}

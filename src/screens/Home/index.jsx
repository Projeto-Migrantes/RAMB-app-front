import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import theme from "@theme/index";
import { Text, View } from "react-native";

export function Home() {
  const navigation = useNavigation();

  function handleInstitution() {
    navigation.navigate("institution");
  }
  function handleContact() {
    navigation.navigate("contact");
  }
  function handleHelp() {
    navigation.navigate("help");
  }
  function handleProfile() {
    navigation.navigate("profile");
  }
  function handleLanguage() {
    navigation.navigate("changeLanguage");
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header />
      <Text>Página de Home</Text>
      <Button
        variant="primary"
        title="Instituições de Apoio"
        onPress={handleInstitution}
      />
      <Button variant="primary" title="Manual do Migrante" />
      <Button
        variant="primary"
        title="Entre em Contato"
        onPress={handleContact}
      />
      <Button variant="primary" title="Postos" onPress={handleHelp} />
      <Button variant="primary" title="Idioma" onPress={handleLanguage} />
      <Button variant="primary" title="Perfil" onPress={handleProfile} />
    </View>
  );
}

import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import theme from "@theme/index";
import { FlatList, Linking, View } from "react-native";
import { Container, Content } from "./styles";
import { TitleWithDescription } from "@components/TitleWithDescription";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ButtonMenu } from "./components/ButtonMenu";

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
  function handleLink() {
    const url = "https://www.google.com.br";
    Linking.openURL(url);
  }
  const MenuItens = [
    {
      id: 1,
      title: "Instituições de Apoio",
      icon: (
        <Ionicons
          name="business-outline"
          size={30}
          color={theme.Colors.Purple}
        />
      ),
      function: handleInstitution,
    },
    {
      id: 2,
      title: "Manual Migrante",
      icon: <AntDesign name="book" size={30} color={theme.Colors.Purple} />,
      function: handleLink,
    },
    {
      id: 3,
      title: "Entre em Contato",
      icon: <AntDesign name="contacts" size={30} color={theme.Colors.Purple} />,
      function: handleContact,
    },
    {
      id: 4,
      title: "Postos",
      icon: (
        <FontAwesome5 name="building" size={30} color={theme.Colors.Purple} />
      ),
      function: handleHelp,
    },
    {
      id: 5,
      title: "Idioma",
      icon: (
        <MaterialIcons name="translate" size={30} color={theme.Colors.Purple} />
      ),
      function: handleLanguage,
    },
    {
      id: 6,
      title: "Perfil",
      icon: <AntDesign name="contacts" size={30} color={theme.Colors.Purple} />,
      function: handleProfile,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header />
      <Container>
        <TitleWithDescription
          title="Seja bem vindo(a)!"
          description="Plataforma de Apoio ao Migrante na Bahia"
        />
        <Content>
          <FlatList
            data={MenuItens}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ButtonMenu
                icon={item.icon}
                title={item.title}
                onPress={item.function}
              />
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </Content>
      </Container>
    </View>
  );
}

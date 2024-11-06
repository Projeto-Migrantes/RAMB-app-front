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
import { useTranslation } from "react-i18next";
import "@utils/i18n";
import { useEffect, useState } from "react";
import api from "../../../axiosConfig";

export function Home() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('pt'); //teste para tradução de idioma
  const [pdfUrl, setPdfUrl] = useState('');
  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await api.get(
          `/pdfs/${language}`
        );
        setPdfUrl(response.data.url);

      } catch (error) {
        setPdfUrl('');
      }
    };
  
    fetchPDF();
  }, []);

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
    const url = pdfUrl;
    Linking.openURL(url);
  }
  const MenuItens = [
    {
      id: 1,
      title: `${t("Instituições de Apoio")}`,
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
      title: `${t("Manual Migrante")}`,
      icon: <AntDesign name="book" size={30} color={theme.Colors.Purple} />,
      function: handleLink,
    },
    {
      id: 3,
      title: `${t("Entre em Contato")}`,
      icon: <AntDesign name="contacts" size={30} color={theme.Colors.Purple} />,
      function: handleContact,
    },
    {
      id: 4,
      title: `${t("Postos")}`,
      icon: (
        <FontAwesome5 name="building" size={30} color={theme.Colors.Purple} />
      ),
      function: handleHelp,
    },
    {
      id: 5,
      title: `${t("Idioma")}`,
      icon: (
        <MaterialIcons name="translate" size={30} color={theme.Colors.Purple} />
      ),
      function: handleLanguage,
    },
    {
      id: 6,
      title: `${t("Perfil")}`,
      icon: <AntDesign name="contacts" size={30} color={theme.Colors.Purple} />,
      function: handleProfile,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header />
      <Container>
        <TitleWithDescription
          title={t("Seja bem vindo(a)!")}
          description={t("Plataforma de Apoio ao Migrante na Bahia")}
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

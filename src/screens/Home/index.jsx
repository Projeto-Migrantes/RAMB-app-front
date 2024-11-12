import { Header } from "@components/Header";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import theme from "@theme/index";
import { BackHandler, FlatList, Linking, View } from "react-native";
import { Container, Content } from "./styles";
import { TitleWithDescription } from "@components/TitleWithDescription";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ButtonMenu } from "./components/ButtonMenu";
import { useTranslation } from "react-i18next";
import "@utils/i18n";
import React, { useEffect, useState } from "react";
import api from "../../../axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Home() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [pdfUrl, setPdfUrl] = useState("");

  const [language, setLanguage] = useState("pt");

  const initialize = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
        i18n.changeLanguage(savedLanguage);
        const response = await api.get(`/pdfs/${savedLanguage}`);
        setPdfUrl(response.data.url);
      }
    } catch (error) {
      alert(t("Aconteceu um erro, tente novamente"), error);
      setPdfUrl("");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      initialize();
      const onBackPress = () => {
        return true; // Retornar true para desabilitar o botão de voltar
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          navigation.navigate("login");
        }
        const response = await api.get(`/pdfs/${language}`);
        setPdfUrl(response.data.url);
      } catch (error) {
        alert(t("Aconteceu um erro, tente novamente"), error);
        setPdfUrl("");
      }
    };

    if (language) {
      fetchPdf();
    }
  }, [language]);

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

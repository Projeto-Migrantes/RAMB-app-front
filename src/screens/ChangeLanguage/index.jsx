import { Header } from "@components/Header";
import { Container, TypeWriterStyled } from "./styles";
import { ButtonLanguage } from "@components/ButtonLanguage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import theme from "@theme/index";
import React, { useEffect, useState } from "react";
import FlagBrazil from "@assets/BrazilFlag.svg";
import FlagSpain from "@assets/SpainFlag.svg";
import FlagUsa from "@assets/UsaFlag.svg";
import FlagFrance from "@assets/FranceFlag.svg";
import i18n from "../../utils/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function ChangeLanguage() {
  const [language, setLanguage] = useState("");
  const [token, setToken] = useState(null);
  const [activeButton, setActiveButton] = useState("");
  const navigation = useNavigation();
  const loadToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  };
  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
        setActiveButton(savedLanguage);
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadToken();
    }, [])
  );

  const ChangeLanguage = async (value) => {
    setActiveButton(value);
    setLanguage(value);
    i18n.changeLanguage(value);
    await AsyncStorage.setItem("language", value);
    if (token) {
      navigation.navigate("home");
    } else {
      navigation.navigate("login");
    }
  };

  const texts = [
    "Escolha seu Idioma",
    "Choose your Language",
    "Choisissez votre Langue",
    "Elige tu Idioma",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [currentTextIndex]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header />
      <Container>
        <TypeWriterStyled typing={1} minDelay={100} maxDelay={100}>
          {texts[currentTextIndex]}
        </TypeWriterStyled>

        <ButtonLanguage
          title="Português"
          imgSrc={FlagBrazil}
          isActive={activeButton === "pt"}
          onPress={() => ChangeLanguage("pt")}
        />
        <ButtonLanguage
          title="English"
          imgSrc={FlagUsa}
          isActive={activeButton === "en"}
          onPress={() => ChangeLanguage("en")}
        />
        <ButtonLanguage
          title="Français"
          imgSrc={FlagFrance}
          isActive={activeButton === "fr"}
          onPress={() => ChangeLanguage("fr")}
        />
        <ButtonLanguage
          title="Español"
          imgSrc={FlagSpain}
          isActive={activeButton === "es"}
          onPress={() => ChangeLanguage("es")}
        />
      </Container>
    </View>
  );
}

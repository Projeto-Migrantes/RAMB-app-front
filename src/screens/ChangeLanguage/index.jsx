import { Header } from "@components/Header";
import { Container, Title, TypeWriterStyled } from "./styles";
import { Button } from "@components/Button";
import { ButtonLanguage } from "@components/ButtonLanguage";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import theme from "@theme/index";
import { useEffect, useState } from "react";
import FlagBrazil from "@assets/BrazilFlag.svg";
import FlagSpain from "@assets/SpainFlag.svg";
import FlagUsa from "@assets/UsaFlag.svg";
import FlagFrance from "@assets/FranceFlag.svg";
import TypeWriter from "react-native-typewriter";
import { Containerdois } from "../../components/ButtonLanguage/styles";
import { Titledois } from "../../components/ButtonLanguage/styles";

export function ChangeLanguage() {
  const navigation = useNavigation();
  const [title, setLanguage] = useState("Português");
  const [selectedLanguage, setSelectedLanguage] = useState("Português");
  
  function handleChangeScreen() {
    navigation.navigate("login");
  }
  function handleLanguageChange(language,Containerdois,Titledois) {
    setLanguage(language);
    setSelectedLanguage(language);
    Containerdois()
  }
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
         onPress={() => handleLanguageChange("Português")}
         imgSrc={FlagBrazil}
         isSelected={selectedLanguage === "Português" }
        />
        <ButtonLanguage
          title="English"
          onPress={() => handleLanguageChange("English")}
          imgSrc={FlagUsa}
          isSelected={selectedLanguage === "English"}
        />
        <ButtonLanguage
          title="Français"
          onPress={() => handleLanguageChange("Français")}
          imgSrc={FlagFrance}
          isSelected={selectedLanguage === "Français"}
        />
        <ButtonLanguage
          title="Español"
          onPress={() => handleLanguageChange("Español")}
          imgSrc={FlagSpain}
          isSelected={selectedLanguage === "Español"}
        />

        <Button
          variant="primary"
          title="Escolher"
          onPress={handleChangeScreen}
        />
      </Container>
    </View>
  );
}

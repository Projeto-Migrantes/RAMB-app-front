import { Header } from "@components/Header";
import { Container, Title, TypeWriterStyled } from "./styles";
import { Button } from "@components/Button";
import { ButtonLanguage } from "@components/ButtonLanguage";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import theme from "@theme/index";
import { TitleWithDescription } from "@components/TitleWithDescription";
import TypeWriter from "react-native-typewriter";
import { useEffect, useState } from "react";
import FlagBrazil from "@assets/BrazilFlag.svg";
import FlagSpain from "@assets/SpainFlag.svg";
import FlagUsa from "@assets/UsaFlag.svg";
import FlagFrance from "@assets/FranceFlag.svg";

export function ChangeLanguage() {
  const navigation = useNavigation();

  function handleChangeScreen() {
    navigation.navigate("login");
  }

    const alterarCor = (cor) => {
      color = cor
      
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
          onPress={alterarCor} 
          imgSrc={FlagBrazil}
        />
        <ButtonLanguage
          title="English"
          onPress={alterarCor('#4968FF')}
          imgSrc={FlagUsa}
        />
        <ButtonLanguage
          title="Français"
          onPress={alterarCor}    
          imgSrc={FlagFrance}
        />
        <ButtonLanguage
          title="Español"
          onPress ={alterarCor}
          imgSrc={FlagSpain}
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

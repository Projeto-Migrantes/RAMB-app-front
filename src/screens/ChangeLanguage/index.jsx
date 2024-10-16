import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Button } from "@components/Button";
import { ButtonLanguage } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import theme from "@theme/index";
import { TitleWithDescription } from "@components/TitleWithDescription";
import FlagBrazil from "@assets/BrazilFlag.svg";
import FlagSpain from "@assets/SpainFlag.svg";
import FlagUsa from "@assets/UsaFlag.svg";
import FlagFrance from "@assets/FranceFlag.svg";
export function ChangeLanguage() {
  const navigation = useNavigation();

  function handleChangeScreen() {
    navigation.navigate("login");
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header />
      <Container>
        <TitleWithDescription
          title="Escolha o seu Idioma:"
        />
        <ButtonLanguage
          title="Português" 
          onPress={handleChangeScreen}
          imgSrc={FlagBrazil}
        />
        <ButtonLanguage
          title="English" 
          onPress={handleChangeScreen}
          imgSrc={FlagUsa}
        />
           <ButtonLanguage
          title="Français" 
          onPress={handleChangeScreen}
          imgSrc={FlagFrance}
        />
          <ButtonLanguage
          title="Español" 
          onPress={handleChangeScreen}
          imgSrc={FlagSpain}
          />
         
        <Button
          
          title="Escolher"
          onPress={handleChangeScreen}
        />
      </Container>
    </View>
  );
}

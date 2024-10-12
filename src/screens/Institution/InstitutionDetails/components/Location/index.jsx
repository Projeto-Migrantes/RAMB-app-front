import {
  ButtonMenu,
  Container,
  TextDescription,
  TextMap,
  TextTitle,
  TitleContainer,
} from "./styles";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import theme from "@theme/index";
import { Linking } from "react-native";
import Maps from "@assets/maps.svg";

export function Location({ description, link }) {
  return (
    <Container>
      <TitleContainer>
        <SimpleLineIcons
          name="location-pin"
          size={20}
          color={theme.Colors.Blue}
        />
        <TextTitle>Localização</TextTitle>
      </TitleContainer>
      <TextDescription>{description}</TextDescription>
      <ButtonMenu onPress={() => Linking.openURL(link)}>
        <TextMap>Ver no Mapa</TextMap>
        <Maps width={20} height={20} />
      </ButtonMenu>
    </Container>
  );
}

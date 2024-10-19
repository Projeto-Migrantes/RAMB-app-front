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
import { useTranslation } from "react-i18next";
import "@utils/i18n";

export function Location({ description, link }) {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <TitleContainer>
        <SimpleLineIcons
          name="location-pin"
          size={20}
          color={theme.Colors.Blue}
        />
        <TextTitle>{t("Localização")}</TextTitle>
      </TitleContainer>
      <TextDescription>{description}</TextDescription>
      <ButtonMenu onPress={() => Linking.openURL(link)}>
        <TextMap>{t("Ver no Mapa")}</TextMap>
        <Maps width={20} height={20} />
      </ButtonMenu>
    </Container>
  );
}

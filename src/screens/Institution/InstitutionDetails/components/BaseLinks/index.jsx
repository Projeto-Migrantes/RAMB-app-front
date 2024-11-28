import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import {
  ButtonMenu,
  Container,
  TextDescription,
  TextMap,
  TextTitle,
  TitleContainer,
} from "./styles";
import theme from "@theme/index";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useTranslation } from "react-i18next";
import "@utils/i18n";
import Maps from "@assets/maps.svg";

const iconMap = {
  hour: <AntDesign name="clockcircleo" size={20} color={theme.Colors.Orange} />,
  instagram: <AntDesign name="instagram" size={20} color={theme.Colors.Orange} />,
  email: <Fontisto name="email" size={20} color={theme.Colors.Orange} />,
  phone: <Feather name="phone" size={20} color={theme.Colors.Orange} />,
  language: <Ionicons name="language" size={20} color={theme.Colors.Orange} />,
  site: <AntDesign name="earth" size={20} color={theme.Colors.Orange} />,
  group: <Ionicons name="people-outline" size={20} color={theme.Colors.Orange} />,
  services: (
    <AntDesign name="infocirlceo" size={20} color={theme.Colors.Orange} />
  ),
  price: <FontAwesome name="money" size={20} color={theme.Colors.Orange} />,
  location: (
    <SimpleLineIcons name="location-pin" size={20} color={theme.Colors.Orange} />
  ),
};

const handlePressMap = {
  instagram: (description) => {
    const sanitizedUser = description.replace(/^@/, "");
    const url = `https://www.instagram.com/${sanitizedUser}`;
    Linking.openURL(url);
  },
  email: (description) => {
    const url = `mailto:${description}`;
    Linking.openURL(url);
  },
  site: (description) => {
    const url = `${description}`;
    Linking.openURL(url);
  },
};

const formatLink = (url) => {
  return url.replace(/(^\w+:|^)\/\//, "");
};

const formatPhoneNumber = (phoneNumber) => {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}`;
  }
  return phoneNumber;
};

export function BaseLink({ variant, title, description, link }) {
  const { t, i18n } = useTranslation();
  const handlePress = handlePressMap[variant];
  const formattedDescription =
    variant === "phone" ? formatPhoneNumber(description) : description;
  const displayDescription =
    variant === "instagram"
      ? `@${description.replace(/^@/, "")}`
      : variant === "site"
      ? formatLink(description)
      : formattedDescription;

  return (
    <Container>
      <TitleContainer>
        {iconMap[variant]}
        <TextTitle>{title}</TextTitle>
      </TitleContainer>
      {variant === "location" ? (
        <>
          <TextDescription>{description}</TextDescription>
          <ButtonMenu onPress={() => Linking.openURL(link)}>
            <TextMap>{t("Ver no Mapa")}</TextMap>
            <Maps name="map" width={20} height={20} color={theme.Colors.Blue_300} />
          </ButtonMenu>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => handlePress && handlePress(description)}
        >
          <TextDescription>{displayDescription}</TextDescription>
        </TouchableOpacity>
      )}
    </Container>
  );
}

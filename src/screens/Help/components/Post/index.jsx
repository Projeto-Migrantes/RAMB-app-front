import {
  Card,
  CardDescription,
  DescriptionCard,
  Title,
  TitleCard,
  TitleUnderLine,
  Underline,
} from "./styles";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Feather from "@expo/vector-icons/Feather";
import theme from "@theme";
import { useTranslation } from "react-i18next";
import "@utils/i18n";

export function Post({ title, descriptionLocation, descriptionPhone }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <TitleUnderLine>
        <Title>{title}</Title>
        <Underline />
      </TitleUnderLine>

      <Card>
        <SimpleLineIcons
          name="location-pin"
          size={36}
          color={theme.Colors.Blue}
        />
        <TitleCard>{t("Localização")}</TitleCard>
        <DescriptionCard>{descriptionLocation}</DescriptionCard>
      </Card>

      <Card>
        <Feather name="phone" size={36} color={theme.Colors.Blue} />
        <TitleCard>{t("Telefone")}</TitleCard>
        <DescriptionCard>{descriptionPhone}</DescriptionCard>
      </Card>
    </>
  );
}

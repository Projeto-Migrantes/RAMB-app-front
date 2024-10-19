import { Header } from "@components/Header";
import theme from "@theme/index";
import { ScrollView, View } from "react-native";
import {
  Container,
  Content,
  Informartion,
  InstitutionImage,
  TextCategory,
  TextDescription,
  TextTitle,
} from "./styles";
import Img from "@assets/test.png";
import { BaseLink } from "./components/BaseLinks";
import { useTranslation } from "react-i18next";
import "@utils/i18n";

export function InstitutionDetails() {
  const { t, i18n } = useTranslation();
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <Content>
            <InstitutionImage source={Img} />
          </Content>
          <TextCategory>ONGs</TextCategory>
          <TextTitle>CSM - UNIFACS</TextTitle>
          <TextDescription>
            Lorem ipsum dolor ssdasd asd asd asd asd asdasd asd asd asd aasdasd
            asd asdsdf sdfit amet consectetur. Nunc ut proin tristiqueLorem
            ipsum dolor ssdasd asd asd asd asd asdasd asd asd asd aasdasd asd
            asdsdf sdfit amet consectetur. Nunc ut proin tristique
          </TextDescription>
          <Informartion>
            <BaseLink
              variant="location"
              title={t("Localização")}
              description="Unifacs - Campus Tancredo Neves - Av. Tancredo Neves, 2131 - Caminho das Árvores, Salvador - BA, 41820-021"
              link="https://google.com.br"
            />
            <BaseLink
              variant="hour"
              title={t("Horário de Funcionamento")}
              description="Segunda a Sexta, 9h às 18h"
            />
            <BaseLink
              variant="phone"
              title={t("Telefone")}
              description="71991672506"
            />
            <BaseLink
              variant="email"
              title={t("E-mail")}
              description="seuemail@exemplo.com"
            />
            <BaseLink
              variant="services"
              title={t("Serviços Oferecidos")}
              description="Apoio Psicológico, Apoio Jurídico, Atendimento Social"
            />
            <BaseLink
              variant="price"
              title={t("Custo do Serviço")}
              description="Gratuito"
            />
            <BaseLink
              variant="group"
              title={t("Público Alvo")}
              description="Crianças e adolescentes"
            />

            <BaseLink
              variant="language"
              title={t("Idioma falado pela Equipe")}
              description="português e inglês"
            />
            <BaseLink
              variant="site"
              title={t("Site")}
              description="https://github.com/siquara"
            />
            <BaseLink
              variant="instagram"
              title="Instagram"
              description="@seu_usuario"
            />
          </Informartion>
        </Container>
      </ScrollView>
    </View>
  );
}

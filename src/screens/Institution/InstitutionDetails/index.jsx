import { Header } from "@components/Header";
import theme from "@theme/index";
import { Image, ScrollView, Text, View } from "react-native";
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
import { Location } from "./components/Location";
import { Phone } from "./components/Phone";
import { Email } from "./components/Email";
import { Site } from "./components/Site";
import { Instagram } from "./components/Instagram";

export function InstitutionDetails() {
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
            <Location
              link="https://google.com.br"
              description="Unifacs - Campus Tancredo Neves - Av. Tancredo Neves, 2131 - Caminho das Árvores, Salvador - BA, 41820-021"
            />
            <Phone phone="72991672506" />
            <Email email="teste@gmail.com" />
            <Site link="https://www.unifacs.com.br" />
            <Instagram user="@centrodeservicoaomigrante" />
          </Informartion>
        </Container>
      </ScrollView>
    </View>
  );
}

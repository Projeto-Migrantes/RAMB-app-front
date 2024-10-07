import { Button } from "@components/Button";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { FlatList, ScrollView, Text, View } from "react-native";
import {
  Container,
  Content,
  EditOptions,
  EditOptionsText,
  Icon,
  UserName,
  ViewDiv,
} from "./styles";
import { UserDetails } from "./components/UserDetails";
import { useNavigation } from "@react-navigation/native";

const UserDetailsObject = [
  {
    id: 1,
    title: "Email",
    info: "teste@teste.com",
  },
  {
    id: 2,
    title: "Passaporte",
    info: "38974293847293847",
  },
  {
    id: 3,
    title: "Passaporte",
    info: "38974293847293847",
  },
  {
    id: 4,
    title: "Passaporte",
    info: "38974293847293847",
  },
  {
    id: 5,
    title: "Passaporte",
    info: "38974293847293847",
  },
  {
    id: 6,
    title: "Passaporte",
    info: "38974293847293847",
  },
  {
    id: 7,
    title: "Passaporte",
    info: "38974293847293847",
  },
  {
    id: 8,
    title: "Passaporte",
    info: "38974293847293847",
  },
];

export function Profile() {
  const navigation = useNavigation();

  function handleContact() {
    navigation.navigate("contact");
  }
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <Icon name="person-circle-outline" />
          <UserName>Lucca Francis Norman</UserName>
          {UserDetailsObject.map((item) => (
            <UserDetails key={item.id} title={item.title} info={item.info} />
          ))}

          <EditOptions onPress={handleContact}>
            <EditOptionsText>
              Deseja Editar Informações? {"\n"} Entre em contato
            </EditOptionsText>
          </EditOptions>
          <Button variant="terciary" title="Sair" />
        </Container>
      </ScrollView>
    </View>
  );
}

import { Header } from "@components/Header";
import theme from "@theme/index";
import { FlatList, View } from "react-native";
import { TitleWithIcon } from "@components/TitleWithIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container } from "./styles";
import { SearchBar } from "./components/SearchBar";
import { CardInstitution } from "./components/CardInstitution";
import { useNavigation } from "@react-navigation/native";

const organizations = [
  {
    id: 1,
    category: "ONGS",
    name: "CSM- UNIFACS",
    description:
      "Lorem ipsum dolor ssdasd asd asd asd asd asdasd asd asd asd aasdasd asd asdsdf sdfit amet consectetur. Nunc ut proin tristique varius turpis faucibus arcu.",
  },
  {
    id: 2,
    category: "ONGS",
    name: "ONG XYZ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
  {
    id: 3,
    category: "ONGS",
    name: "Assistência Social ABC",
    description:
      "Fusce dictum libero ut mi egestas, sed aliquet nisi euismod. Nullam convallis purus in felis.",
  },
  {
    id: 4,
    category: "ONGS",
    name: "Grupo de Apoio à Infância",
    description:
      "Curabitur vel ante in erat elementum porttitor at non magna. Sed consectetur tortor sit amet.",
  },
  {
    id: 5,
    category: "ONGS",
    name: "Organização Verde",
    description:
      "Aenean lacinia sapien vel libero sagittis, at viverra libero aliquam. Sed accumsan sapien et.",
  },
];

export function Institution() {
  const navigation = useNavigation();
  function handleInstitutionDetails() {
    navigation.navigate("InstitutionDetails");
  }
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <TitleWithIcon
        title="Instituições de Apoio"
        icon={
          <Ionicons
            name="business-sharp"
            size={26}
            color={theme.Colors.Purple}
          />
        }
      />
      <Container>
        <SearchBar />
        <FlatList
          data={organizations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardInstitution
              category={item.category}
              name={item.name}
              description={item.description}
              onPress={handleInstitutionDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50, gap: 15 }}
        />
      </Container>
    </View>
  );
}

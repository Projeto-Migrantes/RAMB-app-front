import { Header } from "@components/Header";
import theme from "@theme/index";
import { FlatList, View } from "react-native";
import { TitleWithIcon } from "@components/TitleWithIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, Filter } from "./styles";
import { SearchBar } from "./components/SearchBar";
import { CardInstitution } from "./components/CardInstitution";
import { useNavigation } from "@react-navigation/native";
import "@utils/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  function handleInstitutionDetails() {
    navigation.navigate("InstitutionDetails");
  }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: "Todas as Categorias", value: "all" },
    { label: "Agência Governamental", value: "Agência Governamental" },
    { label: "Delegacia de Migração", value: "Delegacia de Migração" },
    { label: "Centro de Atenção", value: "Centro de Atenção" },
    {
      label: "Sociedade Civil Organizada",
      value: "Sociedade Civil Organizada",
    },
    { label: "Organização Internacional", value: "Organização Internacional" },
    { label: "Instituição Religiosa", value: "Instituição Religiosa" },
    { label: "Instituição de Ensino", value: "Instituição de Ensino" },
    {
      label: "Procuradoria / Defensoria Pública",
      value: "Procuradoria / Defensoria Pública",
    },
    { label: "Tradutores Juramentos", value: "Tradutores Juramentos" },
    { label: "Outros", value: "Outros" },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <TitleWithIcon
        title={t("Instituições de Apoio")}
        icon={
          <Ionicons
            name="business-sharp"
            size={26}
            color={theme.Colors.Purple}
          />
        }
      />
      <Container>
        <SearchBar placeholder={t("Pesquisar")} />
        <Filter
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={t("Selecionar tipo de Instituição")}
          placeholderStyle={{
            color: theme.Colors.Gray_700,
            fontFamily: theme.Font_Family.Regular,
            fontSize: 18,
          }}
          dropDownContainerStyle={{
            backgroundColor: theme.Colors.Gray_500,
            fontFamily: theme.Font_Family.Regular,
            borderWidth: 0,
            borderRadius: 0,
          }}
          arrowIconStyle={{
            tintColor: theme.Colors.Blue,
          }}
          selectedItemLabelStyle={{
            fontFamily: theme.Font_Family.Bold,
            color: theme.Colors.Blue,
          }}
          labelStyle={{
            fontFamily: theme.Font_Family.Regular,
            fontSize: 16,
            color: theme.Colors.Black,
          }}
        />
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

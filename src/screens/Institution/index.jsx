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
import { useEffect, useState } from "react";
import { use } from "i18next";
import api from "../../../axiosConfig";


export function Institution() {
  const [language, setLanguage] = useState('pt'); //teste para tradução de idioma
  
  const getCategory = (item) => item.Category[`category_${language}`];
  const getDescription = (item) => item.InstitutionDescription[`description_${language}`];

  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await api.get('/institutions');
        setInstitutions(response.data.institutions);
        console.log('Instituições:', response.data.institutions);
        
      } catch (error) {
        console.error('Erro ao buscar instituições:', error);
      }
    };

    fetchInstitutions();
  }, []);


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
          data={institutions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardInstitution
              category={getCategory(item)}
              name={item.name}
              description={getDescription(item)}
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

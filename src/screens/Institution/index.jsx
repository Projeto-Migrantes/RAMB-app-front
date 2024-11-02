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
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(1);
  const [institutionsCategory, setInstitutionsCategory] = useState([]);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
       // const response = await api.get('/institutions');
       // setInstitutions(response.data.institutions);
      //  console.log('Instituições:', response.data.institutions);
        const responseCategory = await api.get(`/institutions/category/${categoryId}`);
        setInstitutionsCategory(responseCategory.data.institutions);
        
      } catch (error) {
        console.error('Erro ao buscar instituições:', error);
      }
    };

    

    const getCategories = async () => {
      try {
        const response = await api.get('/categories');
        setCategories(response.data.categories);
        console.log('Categorias', response.data.categories);
        
      } catch (error) {
        console.error('Erro ao busscar categorias: ', error);
      }
    };

    const getInstutionCategories = async () => {
      
    }

    getCategories();
    fetchInstitutions();
  }, [categoryId]);

  console.log("AJDHASJd: ", institutionsCategory);
  

  console.log("Categories: ", categories[0]?.category_pt);
  console.log("Categories: ", categories[0]?.id);
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  function handleInstitutionDetails() {
    navigation.navigate("InstitutionDetails");
  }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([]);
  
  
  useEffect(() => {
    setItems([

       { label: `${categories[0]?.category_pt}`, value: `${0}` },
       { label: `${categories[1]?.category_pt}`, value: `${categories[1]?.id}` },
       { label: `${categories[2]?.category_pt}`, value: `${categories[2]?.id}` },
       { label: `${categories[3]?.category_pt}`, value: `${categories[3]?.id}` },
       { label: `${categories[4]?.category_pt}`, value: `${categories[4]?.id}` },
       { label: `${categories[5]?.category_pt}`, value: `${categories[5]?.id}` },
       { label: `${categories[6]?.category_pt}`, value: `${categories[6]?.id}` },
       { label: `${categories[7]?.category_pt}`, value: `${categories[7]?.id}` },
       { label: `${categories[8]?.category_pt}`, value: `${categories[8]?.id}` },
       { label: `${categories[9]?.category_pt}`, value: `${categories[9]?.id}` },
       { label: `${categories[10]?.category_pt}`, value: `${categories[10]?.id}` },
       { label: `${categories[11]?.category_pt}`, value: `${categories[11]?.id}` },
       { label: `${categories[12]?.category_pt}`, value: `${categories[12]?.id}` },
       { label: `${categories[13]?.category_pt}`, value: `${categories[13]?.id}` },
       { label: `${categories[14]?.category_pt}`, value: `${categories[14]?.id}` },
       { label: `${categories[15]?.category_pt}`, value: `${categories[15]?.id}` },
       
     ]);
  }, [categories])
  
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
        {/* <SearchBar placeholder={t("Pesquisar")} /> */}
        <Filter
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={(value) => {
            setCategoryId(value);
          }}
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
        {/* <FlatList
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
        /> */}
         <FlatList
          data={institutionsCategory}
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

import { Header } from "@components/Header";
import theme from "@theme/index";
import { FlatList, ScrollView, Text, View } from "react-native";
import { TitleWithIcon } from "@components/TitleWithIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, Filter, LoadingIndicator } from "./styles";
import { CardInstitution } from "./components/CardInstitution";
import { useNavigation } from "@react-navigation/native";
import "@utils/i18n";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import api from "../../../axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Institution() {
  const [language, setLanguage] = useState("pt");

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [institutionsCategory, setInstitutionsCategory] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([]);

  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  const getCategory = (item) => item.Category[`category_${language}`];
  const getDescription = (item) =>
    item.InstitutionDescription[`description_${language}`];
  async function handleInstitutionDetails(id) {
    try {
      await AsyncStorage.setItem("institutionId", id.toString());
      navigation.navigate("InstitutionDetails");
    } catch (error) {
      console.error("Erro ao salvar o Institution ID:", error);
    }
  }
  useEffect(() => {
    const fetchLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem("language");
      setLanguage(savedLanguage);
    };

    fetchLanguage();
  }, []);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        setLoading(true);
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          navigation.navigate("login");
        }
        const responseCategory = await api.get(
          `/institutions/category/${categoryId}`
        );
        setInstitutionsCategory(responseCategory.data.institutions);
        setErrorMessage("");
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setErrorMessage(t("Nenhuma instituição encontrada"));
        } else {
          if (loading) {
            return;
          }
          setErrorMessage(t("Aconteceu um erro, tente novamente"));
        }
        setInstitutionsCategory([]);
        navigation.navigate("home");
      } finally {
        setLoading(false);
      }
    };

    const getCategories = async () => {
      try {
        setLoading(true);
        const response = await api.get("/categories");
        setCategories(response.data.categories);
      } catch (error) {
        alert(t("Aconteceu um erro, tente novamente"), error);
        setLoading(false);
      }
    };

    getCategories();
    fetchInstitutions();
  }, [categoryId]);

  useEffect(() => {
    setItems([
      { label: `${categories[0]?.[`category_${language}`]}`, value: "0" },
      {
        label: `${categories[1]?.[`category_${language}`]}`,
        value: `${categories[1]?.id}`,
      },
      {
        label: `${categories[2]?.[`category_${language}`]}`,
        value: `${categories[2]?.id}`,
      },
      {
        label: `${categories[3]?.[`category_${language}`]}`,
        value: `${categories[3]?.id}`,
      },
      {
        label: `${categories[4]?.[`category_${language}`]}`,
        value: `${categories[4]?.id}`,
      },
      {
        label: `${categories[5]?.[`category_${language}`]}`,
        value: `${categories[5]?.id}`,
      },
      {
        label: `${categories[6]?.[`category_${language}`]}`,
        value: `${categories[6]?.id}`,
      },
      {
        label: `${categories[7]?.[`category_${language}`]}`,
        value: `${categories[7]?.id}`,
      },
      {
        label: `${categories[8]?.[`category_${language}`]}`,
        value: `${categories[8]?.id}`,
      },
      {
        label: `${categories[9]?.[`category_${language}`]}`,
        value: `${categories[9]?.id}`,
      },
      {
        label: `${categories[10]?.[`category_${language}`]}`,
        value: `${categories[10]?.id}`,
      },
      {
        label: `${categories[11]?.[`category_${language}`]}`,
        value: `${categories[11]?.id}`,
      },
      {
        label: `${categories[12]?.[`category_${language}`]}`,
        value: `${categories[12]?.id}`,
      },
      {
        label: `${categories[13]?.[`category_${language}`]}`,
        value: `${categories[13]?.id}`,
      },
      {
        label: `${categories[14]?.[`category_${language}`]}`,
        value: `${categories[14]?.id}`,
      },
      {
        label: `${categories[15]?.[`category_${language}`]}`,
        value: `${categories[15]?.id}`,
      },
    ]);
  }, [categories]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <TitleWithIcon
        title={t("Instituições de Apoio")}
        icon={
          <Ionicons
            name="business-sharp"
            size={26}
            color={theme.Colors.Orange}
          />
        }
      />

      <Container>
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
            tintColor: theme.Colors.Blue_500,
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

        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            {errorMessage ? (
              <Text>{t(errorMessage)}</Text>
            ) : (
                <FlatList
                  data={institutionsCategory}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <CardInstitution
                      category={getCategory(item)}
                      name={item.name}
                      description={getDescription(item)}
                      onPress={() => handleInstitutionDetails(item.id)}
                    />
                  )}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 50, gap: 15 }}
                  ListEmptyComponent={
                    <Text>{t("Nenhuma instituição encontrada.")}</Text>
                  }
                />
            )}
          </>
        )}
      </Container>
    </View>
  );
}

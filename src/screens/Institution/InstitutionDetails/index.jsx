import { Header } from "@components/Header";
import theme from "@theme/index";
import { ScrollView, View } from "react-native";
import {
  Container,
  Informartion,
  LoadingIndicator,
  TextCategory,
  TextDescription,
  TextTitle,
} from "./styles";
import { BaseLink } from "./components/BaseLinks";
import { useTranslation } from "react-i18next";
import "@utils/i18n";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TitleWithIcon } from "@components/TitleWithIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import api from "../../../../axiosConfig";
import { useNavigation } from "@react-navigation/native";

export function InstitutionDetails() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  const [institution, setInstitution] = useState([]);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const fetchInstitutionDetails = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          navigation.navigate("login");
        }
        setLoading(true);
        const id = await AsyncStorage.getItem("institutionId");
        const response = await api.get(`/institutions/${id}`);

        setInstitution(response.data.institution);
      } catch (error) {
        alert(t("Aconteceu um erro, tente novamente"), error);
        navigation.navigate("institution");
      } finally {
        setLoading(false);
      }
    };
    const fetchLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem("language");
      setLanguage(savedLanguage);
    };

    fetchLanguage();
    fetchInstitutionDetails();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <TitleWithIcon
        title={t("Instituição")}
        icon={
          <Ionicons
            name="business-sharp"
            size={26}
            color={theme.Colors.Orange}
          />
        }
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          {loading ? (
            <LoadingIndicator />
          ) : (
            <>
              <TextTitle>{institution.name}</TextTitle>
              <TextCategory>
                {institution.Category &&
                  institution.Category[`category_${language}`]}
              </TextCategory>
              <TextDescription>
                {institution.InstitutionDescription &&
                  institution.InstitutionDescription[`description_${language}`]}
              </TextDescription>
              <Informartion>
                <BaseLink
                  variant="location"
                  title={t("Localização")}
                  description={`${institution?.Address?.street}, nº${institution?.address_number}, ${institution?.address_complement}, ${institution?.Address?.neighborhood}, ${institution?.Address?.city}, ${institution?.Address?.state}, ${institution?.Address?.cep}.`}
                  link={institution.link_maps}
                />
                <BaseLink
                  variant="hour"
                  title={t("Horário de Funcionamento")}
                  description={
                    institution.ServiceHour &&
                    institution.ServiceHour[`service_hours_${language}`]
                  }
                />
                <BaseLink
                  variant="phone"
                  title={t("Telefone")}
                  description={
                    institution.main_phone && institution.secondary_phone
                      ? `${institution.main_phone} | ${institution.secondary_phone}`
                      : institution.main_phone
                  }
                />
                <BaseLink
                  variant="email"
                  title={t("E-mail")}
                  description={institution.email}
                />
                <BaseLink
                  variant="services"
                  title={t("Serviços Oferecidos")}
                  description={
                    institution.ServicesOffered &&
                    institution.ServicesOffered[`services_offered_${language}`]
                  }
                />
                <BaseLink
                  variant="price"
                  title={t("Custo do Serviço")}
                  description={
                    institution.ServiceCost &&
                    institution.ServiceCost[`services_costs_${language}`]
                  }
                />
                <BaseLink
                  variant="services"
                  title={t("Restrição ou Requisito")}
                  description={
                    institution.RequirementRestriction &&
                    institution.RequirementRestriction[
                      `requirements_restrictions_${language}`
                    ]
                  }
                />
                <BaseLink
                  variant="group"
                  title={t("Público Alvo")}
                  description={
                    institution.TargetPopulation &&
                    institution.TargetPopulation[
                      `target_populations_${language}`
                    ]
                  }
                />

                <BaseLink
                  variant="language"
                  title={t("Idioma falado pela Equipe")}
                  description={
                    institution.main_language && institution.second_language
                      ? `${institution.main_language} | ${institution.second_language}`
                      : institution.main_language
                  }
                />
                {institution.site && (
                  <BaseLink
                    variant="site"
                    title={t("Site")}
                    description={institution.site}
                  />
                )}
                {institution.instagram && (
                  <BaseLink
                    variant="instagram"
                    title="Instagram"
                    description={institution.instagram}
                  />
                )}
              </Informartion>
            </>
          )}
        </Container>
      </ScrollView>
    </View>
  );
}

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import theme from "@theme/index";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  Container,
  Content,
  EditOptions,
  EditOptionsText,
  Icon,
  LoadingIndicator,
  UserName,
  ViewDiv,
} from "./styles";
import { UserDetails } from "./components/UserDetails";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import api from "../../../axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format, parseISO } from "date-fns";
import { useTranslation } from "react-i18next";

export function Profile() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  function handleContact() {
    navigation.navigate("contact");
  }

  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const token = await AsyncStorage.getItem("token");
        if (token !== null) {
          const response = await api.get("/migrants/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProfile(response.data.migrant);
        } else {
          alert("Token não encontrado");
          navigation.navigate("login");
        }
      } catch (error) {
        alert("Aconteceu um erro, tente novamente mais tarde");
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <Icon name="person-circle-outline" />
          <UserName>{profile.full_name}</UserName>
          {loading ? (
            <LoadingIndicator />
          ) : (
            <Content>
              <UserDetails title={t("E-mail")} info={profile.email} />
              <UserDetails
                title={t("Data de Nascimento")}
                info={
                  profile.date_birth
                    ? format(parseISO(profile.date_birth), "dd/MM/yyyy")
                    : t("Data não disponível")
                }
              />
              <UserDetails
                title={t("Endereço")}
                info={`${profile?.Address?.street}, nº${profile?.address_number}, ${profile?.address_complement}, ${profile?.Address?.neighborhood}, ${profile?.Address?.city}, ${profile?.Address?.state}, ${profile?.Address?.cep}.`}
              />
              <UserDetails
                title={t("Documento De Identificação")}
                info={`${profile?.MigrantDocument?.document_type} - ${profile?.MigrantDocument?.document_identification}`}
              />
              <UserDetails
                title={t("Nome Social")}
                info={profile.social_name}
              />
              <UserDetails title={t("Telefone")} info={profile.phone} />
              <UserDetails title={t("Gênero")} info={profile.gender} />
              <UserDetails
                title={t("Status Migratório")}
                info={profile.status_migratory}
              />
              <UserDetails title="Estado Civil" info={profile.marital_status} />
              <UserDetails
                title={t("Escolaridade")}
                info={profile.education_level}
              />
              <UserDetails
                title={t("Motivo da Migração")}
                info={profile.migrant_reason}
              />
              <UserDetails
                title={t("Nacionalidade")}
                info={profile.nationality}
              />
            </Content>
          )}

          <EditOptions onPress={handleContact}>
            <EditOptionsText>
              {t("Deseja Editar Informações?")} {"\n"} {t("Entre em Contato")}
            </EditOptionsText>
          </EditOptions>
          <Button variant="terciary" title={t("Sair")} />
        </Container>
      </ScrollView>
    </View>
  );
}

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
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


export function Profile() {
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
      }finally{
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
          {loading ? <LoadingIndicator/> : (
            
          <Content>
            <UserDetails title="Email" info={profile.email} />
            <UserDetails
              title="Data de Nascimento"
              info={
                profile.date_birth
                  ? format(parseISO(profile.date_birth), "dd/MM/yyyy")
                  : "Data não disponível"
              }
            />
                        <UserDetails
              title="Endereço"
              info={`${profile?.Address?.street}, nº${profile?.address_number}, ${profile?.address_complement}, ${profile?.Address?.neighborhood}, ${profile?.Address?.city}, ${profile?.Address?.state}, ${profile?.Address?.cep}.`}
            />
            <UserDetails
              title="Documento De Identificação"
              info={`${profile?.MigrantDocument?.document_type} - ${profile?.MigrantDocument?.document_identification}`}
            />
            <UserDetails title="Nome Social" info={profile.social_name} />
            <UserDetails title="Telefone" info={profile.phone} />
            <UserDetails title="Gênero" info={profile.gender} />
            <UserDetails
              title="Status Migratório"
              info={profile.status_migratory}
            />
            <UserDetails title="Estado Civil" info={profile.marital_status} />
            <UserDetails
              title="Escolaridade"
              info={profile.education_level}
            />
            <UserDetails
              title="Motivo da Migração"
              info={profile.migrant_reason}
            />
            <UserDetails title="Nacionalidade" info={profile.nationality} />
          </Content>
          )}
          
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

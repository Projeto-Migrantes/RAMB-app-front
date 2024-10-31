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
import { useEffect, useState } from "react";
import api from "../../../axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format, parseISO } from 'date-fns';

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

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          const response = await api.get('/migrants/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setProfile(response.data.migrant);
          console.log(response.data);
        } else {
          alert('Token não encontrado');
          navigation.navigate("login")
        }
      } catch (error) {
        console.error(error);
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

            <UserDetails title='Email' info={profile.email} />
            <UserDetails title='Data de Nascimento' info={profile.date_birth ? format(parseISO(profile.date_birth), 'dd/MM/yyyy') : 'Data não disponível'} />
            {/* <UserDetails title='Documento de Identificação ' info={`${profile.MigrantDocument.document_type} - ${profile.MigrantDocument.document_identification}`} /> */}
            {profile.MigrantDocument && (
    //   <UserDetails 
    //     title='Documento de Identificação' 
    //     info={`${profile.MigrantDocument.document_type} - ${profile.MigrantDocument.document_identification}`} 
    //   />
    // )}
            <UserDetails title='Nome Social' info={profile.social_name} />
            <UserDetails title='Telefone' info={profile.phone} />
            <UserDetails title='Gênero' info={profile.gender} />
            <UserDetails title='Status Migratório' info={profile.status_migratory} />
            <UserDetails title='Estado Civil' info={profile.marital_status} />
            <UserDetails title='Nível de Alfabetização' info={profile.education_level} />
{console.log(profile.MigrantDocument.document_type)}

            <UserDetails title='Motivo da Migração' info={profile.migrant_reason} />
            <UserDetails title='Nacionalidade' info={profile.nationality} />
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

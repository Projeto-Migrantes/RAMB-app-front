import { Button } from "@components/Button";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { Text, View, TextInput } from "react-native";
import { TitleWithIcon } from "@components/TitleWithIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Container } from "./styles";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <TitleWithIcon
        title="Entre em Contato"
        icon={
          <AntDesign name="contacts" size={26} color={theme.Colors.Purple} />
        }
      />
      <Container>
        <Text>Página de Entre em contato</Text>
        <Text>Nome</Text>
        <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Digite aqui"
        style={{ borderWidth: 1, borderColor: theme.Colors.Gray, padding: 10, marginBottom: 10 }}
      />
      <Text>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Digite aqui"
          style={{ borderWidth: 1, borderColor: theme.Colors.Gray, padding: 10, marginBottom: 10 }}
        />
        <Text>Telefone</Text>
        <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Digite aqui"
        style={{borderWidth:1, borderColor: theme.Colors.Gray, padding:10, marginBottom:10}}
        />
        <Text>Assunto</Text>
        <TextInput
          value={subject}
          onChangeText={setSubject}
          placeholder="Digite aqui"
          style={{ borderWidth: 1, borderColor: theme.Colors.Gray, padding: 10, marginBottom: 10 }}
        />
        <Text>Mensagem</Text>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Digite aqui"
          multiline
          style={{ borderWidth: 1, borderColor: theme.Colors.Gray, padding: 10, height: 100, marginBottom: 10 }}
        />

        <Button variant="primary" title="Enviar" />
      </Container>
    </View>

  );
}

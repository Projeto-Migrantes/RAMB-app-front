import { Button } from "@components/Button";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { useState } from "react";
import { Container, Label, CommonInput, MessageInput } from "./styles";
import { TitleWithIcon } from "@components/TitleWithIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView, View } from "react-native";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <TitleWithIcon
            title="Entre em Contato"
            icon={
              <AntDesign
                name="contacts"
                size={26}
                color={theme.Colors.Purple}
              />
            }
          />

          <Label>Nome</Label>
          <CommonInput
            value={name}
            onChangeText={setName}
            placeholder="Digite aqui"
          />

          <Label>Email</Label>
          <CommonInput
            value={email}
            onChangeText={setEmail}
            placeholder="Digite aqui"
          />

          <Label>Telefone</Label>
          <CommonInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Digite aqui"
          />

          <Label>Assunto</Label>
          <CommonInput
            value={subject}
            onChangeText={setSubject}
            placeholder="Digite aqui"
          />

          <Label>Mensagem</Label>
          <MessageInput
            value={message}
            onChangeText={setMessage}
            placeholder="Digite aqui"
            multiline
          />

          <Button variant="primary" title="Enviar" />
        </Container>
      </ScrollView>
    </View>
  );
}

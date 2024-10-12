import { Button } from "@components/Button";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { View, Text } from "react-native";
import { TitleWithIcon } from "@components/TitleWithIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Container, CommonInput, MessageInput } from "./styles";
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
        <Text>Nome</Text>
        <CommonInput
          value={name}
          onChangeText={setName}
          placeholder="Digite aqui"
        />

        <Text>Email</Text>
        <CommonInput
          value={email}
          onChangeText={setEmail}
          placeholder="Digite aqui"
        />

        <Text>Telefone</Text>
        <CommonInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Digite aqui"
        />

        <Text>Assunto</Text>
        <CommonInput
          value={subject}
          onChangeText={setSubject}
          placeholder="Digite aqui"
        />

        <Text>Mensagem</Text>
        <MessageInput
          value={message}
          onChangeText={setMessage}
          placeholder="Digite aqui"
          multiline
          style={{ height: 100 }}
        />

        <Button variant="primary" title="Enviar" />
      </Container>
    </View>
  );
}

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Alert, ActivityIndicator } from "react-native";
import theme from "@theme/index";
import { Container, Label, CommonInput, MessageInput } from "./styles";
import { TitleWithIcon } from "@components/TitleWithIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import api from "../../../axiosConfig";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"), 
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos").regex(/^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/, "Telefone deve ter um formato válido"), 
  subject: z.string().min(1, "Assunto é obrigatório"), 
  message: z.string().min(1, "Mensagem é obrigatória")
});

export function Contact() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onSubmit',
    defaultValues: {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  },
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      
      setLoading(true); 
      await api.post('/forms', data);   
      Alert.alert('Formulário Enviado com sucesso!');
      navigation.navigate("home");
    } catch (error) {
      Alert.alert('Erro ao tentar enviar formulário!');
    } finally{
      setLoading(false);
    }
  };

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
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <CommonInput
                placeholder="Digite aqui"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          
          {errors.name && <Label style={{ color: 'red', marginTop: -25, padding: 10 }}>{errors.name.message}</Label>}

          <Label>Email</Label>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <CommonInput
                placeholder="Digite aqui"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
              />
            )}
          />
        
          {errors.email && <Label style={{ color: 'red', marginTop: -25, padding: 10 }}>{errors.email.message}</Label>}

          <Label>Telefone</Label>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, onBlur, value } }) => (
              <CommonInput
                placeholder="Digite aqui"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="phone-pad"
              />
            )}
          />
         
          {errors.phone && <Label style={{ color: 'red', marginTop: -25, padding: 10 }}>{errors.phone.message}</Label>}

          <Label>Assunto</Label>
          <Controller
            control={control}
            name="subject"
            render={({ field: { onChange, onBlur, value } }) => (
              <CommonInput
                placeholder="Digite aqui"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          
          {errors.subject && <Label style={{ color: 'red', marginTop: -25, padding: 10 }}>{errors.subject.message}</Label>}

          <Label>Mensagem</Label>
          <Controller
            control={control}
            name="message"
            render={({ field: { onChange, onBlur, value } }) => (
              <MessageInput
                placeholder="Digite aqui"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline
              />
            )}
          />

          {errors.message && <Label style={{ color: 'red', marginTop: -25, padding: 10 }}>{errors.message.message}</Label>}

          {loading ? (
            <ActivityIndicator size="large" color={theme.Colors.Purple} />
          ) : (
            <Button 
              variant="primary" title="Enviar" onPress={handleSubmit(onSubmit)} disabled={loading} />
          )}
        </Container>
      </ScrollView>
    </View>
  );
}

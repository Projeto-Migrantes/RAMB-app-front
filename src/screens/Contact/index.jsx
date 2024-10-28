import { Button } from "@components/Button";
import { Header } from "@components/Header";
import theme from "@theme/index";
import { Container, Label, CommonInput, MessageInput } from "./styles";
import { TitleWithIcon } from "@components/TitleWithIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

export function Contact() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CommonInput
                placeholder="Digite aqui"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.name && <Label style={{ color: 'red' }}>Campo obrigatório</Label>}

          <Label>Email</Label>
          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
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
          {errors.email && <Label style={{ color: 'red' }}>Campo obrigatório</Label>}

          <Label>Telefone</Label>
          <Controller
            control={control}
            name="phone"
            rules={{ required: true }}
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
          {errors.phone && <Label style={{ color: 'red' }}>Campo obrigatório</Label>}

          <Label>Assunto</Label>
          <Controller
            control={control}
            name="subject"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CommonInput
                placeholder="Digite aqui"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.subject && <Label style={{ color: 'red' }}>Campo obrigatório</Label>}

          <Label>Mensagem</Label>
          <Controller
            control={control}
            name="message"
            rules={{ required: true }}
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
          {errors.message && <Label style={{ color: 'red' }}>Campo obrigatório</Label>}

          <Button variant="primary" title="Enviar" onPress={handleSubmit(onSubmit)} />
        </Container>
      </ScrollView>
    </View>
  );
}
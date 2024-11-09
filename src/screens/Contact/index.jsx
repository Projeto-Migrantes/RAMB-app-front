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
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../../axiosConfig";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";



export function Contact() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(1, t("Nome é obrigatório")),
    email: z.string().email(t("Email inválido")),
    phone: z
      .string()
      .min(10, t("Telefone deve ter pelo menos 10 dígitos"))
      .regex(
        /^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/,
        t("Telefone deve ter um formato válido")
      ),
    subject: z.string().min(1, t("Assunto é obrigatório")),
    message: z.string().min(1, t("Mensagem é obrigatória")),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);

      setLoading(true);
      await api.post("/forms", data);
      Alert.alert("Formulário Enviado com sucesso!");
      navigation.navigate("home");
    } catch (error) {
      Alert.alert("Erro ao tentar enviar formulário!");
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={{ flex: 1, backgroundColor: theme.Colors.White }}>
      <Header showBackButton />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <TitleWithIcon
            title={t("Entre em Contato")}
            icon={
              <AntDesign
                name="contacts"
                size={26}
                color={theme.Colors.Purple}
              />
            }
          />

          <Label>{t("Nome")}</Label>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <CommonInput
                placeholder={t("Digite aqui")}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          {errors.name && (
            <Label style={{ color: "red", marginTop: -25, padding: 10 }}>
              {errors.name.message}
            </Label>
          )}

          <Label>{t("E-mail")}</Label>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <CommonInput
                placeholder={t("Digite aqui")}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
              />
            )}
          />

          {errors.email && (
            <Label style={{ color: "red", marginTop: -25, padding: 10 }}>
              {errors.email.message}
            </Label>
          )}

          <Label>{t("Telefone")}</Label>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, onBlur, value } }) => (
              <CommonInput
                placeholder={t("Digite aqui")}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="phone-pad"
              />
            )}
          />

          {errors.phone && (
            <Label style={{ color: "red", marginTop: -25, padding: 10 }}>
              {errors.phone.message}
            </Label>
          )}

          <Label>{t("Assunto")}</Label>
          <Controller
            control={control}
            name="subject"
            render={({ field: { onChange, onBlur, value } }) => (
              <CommonInput
                placeholder={t("Digite aqui")}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          {errors.subject && (
            <Label style={{ color: "red", marginTop: -25, padding: 10 }}>
              {errors.subject.message}
            </Label>
          )}

          <Label>{t("Mensagem")}</Label>
          <Controller
            control={control}
            name="message"
            render={({ field: { onChange, onBlur, value } }) => (
              <MessageInput
                placeholder={t("Digite aqui")}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline
              />
            )}
          />

          {errors.message && (
            <Label style={{ color: "red", marginTop: -25, padding: 10 }}>
              {errors.message.message}
            </Label>
          )}

          <Button
            variant="primary"
            title={
              loading ? (
                <ActivityIndicator size="large" color={theme.Colors.White} />
              ) : (
                t("Enviar")
              )
            }
            onPress={handleSubmit(onSubmit)}
            disabled={loading}
          />
        </Container>
      </ScrollView>
    </View>
  );
}

import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSavedLanguage = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem('language');
    return savedLanguage || 'pt'; 
  } catch (error) {
    console.error("Erro ao obter o idioma salvo:", error);
    return 'pt'; 
  }
};
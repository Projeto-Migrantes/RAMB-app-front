import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChangeLanguage } from "@screens/ChangeLanguage";
import { Contact } from "@screens/Contact";
import { Help } from "@screens/Help";
import { Home } from "@screens/Home";
import { Institution } from "@screens/Institution";
import { InstitutionDetails } from "@screens/Institution/InstitutionDetails";
import { Login } from "@screens/Login";
import { Profile } from "@screens/Profile";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const [language, setLanguage] = useState(null);
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);
  const [token, setToken] = useState(null);
  const [isTokenLoaded, setIsTokenLoaded] = useState(false);


  useEffect(() => {
    const loadResources = async () => {
      const [savedLanguage, token] = await Promise.all([
        AsyncStorage.getItem("language"),
        AsyncStorage.getItem("token")
      ]);
  
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
      if (token) {
        setToken(token);
      }
  
      setIsLanguageLoaded(true);
      setIsTokenLoaded(true);
    };
  
    loadResources();
  }, []);
  
  if (!isLanguageLoaded || !isTokenLoaded) {
    return null;
  }

  const initialRoute = language != null && language ? token != null ? "home" : "login" : "changeLanguage";

  return (
    <Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="changeLanguage" component={ChangeLanguage} />
      <Screen name="login" component={Login} />
      <Screen name="help" component={Help} />
      <Screen name="home" component={Home} />
      <Screen name="institution" component={Institution} />
      <Screen name="InstitutionDetails" component={InstitutionDetails} />
      <Screen name="contact" component={Contact} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}

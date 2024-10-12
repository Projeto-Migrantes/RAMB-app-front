import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChangeLanguage } from "@screens/ChangeLanguage";
import { Contact } from "@screens/Contact";
import { Help } from "@screens/Help";
import { Home } from "@screens/Home";
import { Institution } from "@screens/Institution";
import { InstitutionDetails } from "@screens/Institution/InstitutionDetails";
import { Login } from "@screens/Login";
import { Profile } from "@screens/Profile";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="changeLanguage"
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

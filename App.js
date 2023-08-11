import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/Auth/LoginScreen";
import HeaderComponent from "./app/components/HeaderComponent";
import LandingPage from "./app/screens/Auth/LandingPage";
import Register from "./app/screens/Auth/Register";
import Homepage from "./app/screens/Homepage/Homepage";
import QuisionerScreenFirst from "./app/screens/QuisionerScreen/QuisionerScreenFirst";
import QuisionerScreenSecond from "./app/screens/QuisionerScreen/QuisionerScreenSecond";
import SurveyCompetitor from "./app/screens/SurveyScreen/SurveyCompetitor";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "fade_from_bottom",
          header: (props) => (
            <HeaderComponent {...props} title={props.route.name} />
          ),
        }}
      >
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerTitle: "Login",
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={Register}
          options={{ headerTitle: "Register" }}
        />
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuisScreenFirst"
          component={QuisionerScreenFirst}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuisScreenSecond"
          component={QuisionerScreenSecond}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SurveyCompetitor"
          component={SurveyCompetitor}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React, { useEffect } from "react";
import { StyleSheet, } from "react-native";
import * as Font from "expo-font";

import { Root } from "native-base";
import "react-native-gesture-handler";
import "react-native-get-random-values";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screen
import {
  HomeScreen,
  LoginScreen,
  SignUpScreen,
  NewProyectScreen,
  ProyectScreen,
} from "./core/screen";

// Context
import { UserProvider } from "./core/context/UserContext";

const { Navigator, Screen } = createStackNavigator();

function App() {
  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }))();
  }, []);

  return (
    <Root>
      <NavigationContainer>
        <UserProvider>
          <Navigator initialRouteName="Login">
            <Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "Iniciar Sesión",
                headerShown: false,
              }}
            />
            <Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                title: "Iniciar Sesión",
                headerStyle: {
                  backgroundColor: "#28303b",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Inicio",
                headerShown: false,
              }}
            />
            <Screen
              name="NewProyect"
              component={NewProyectScreen}
              options={{
                title: "Nuevo Proyecto",
                headerStyle: {
                  backgroundColor: "#28303b",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Screen
              name="Proyect"
              component={ProyectScreen}
              options={({ route }) => ({
                title: route.params.name,
                headerStyle: {
                  backgroundColor: "#28303b",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              })}
            />
          </Navigator>
        </UserProvider>
      </NavigationContainer>
    </Root>
  );
}

export default App;

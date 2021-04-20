import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Button, Item, Form, Input, Container, Text, H1, Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from "react-native";

import globalStyles from "../styles/global";
import { userContext } from "../context/UserContext";

const Login = () => {
  const { signIn } = useContext(userContext);
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function onSubmit() {
    const response = signIn({ email, password });
    if (!response) {
      console.log(response);
      return setError("Credenciales incorrectas");
    }
    await AsyncStorage.setItem("userEmail", email);
    navigate("Home");
  }

  function showAlert() {
    Toast.show({
      text: error,
      buttonText: "OK",
      duration: 5000,
    });
  }

  return (
    <Container style={[globalStyles.container, { backgroundColor: "#00ccff" }]}>
      <View style={globalStyles.contents}>
        <H1 style={globalStyles.title}>Notas</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text.toLowerCase())} />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
          </Item>
        </Form>
        <Button square block style={globalStyles.button} onPress={() => onSubmit()}>
          <Text>Iniciar Sesión</Text>
        </Button>
        <Text style={globalStyles.buttonUrl} onPress={() => navigate("SignUp")}>
          Crear Cuenta
        </Text>
      </View>
      {error && showAlert()}
    </Container>
  );
};

export default Login;

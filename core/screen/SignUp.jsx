import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Button, Item, Form, Input, Container, Text, H1, Toast } from "native-base";
import { useNavigation } from "@react-navigation/native";

import globalStyles from "../styles/global";
import { userContext } from "../context/UserContext";

const SignUp = () => {
  const { createUser } = useContext(userContext);
  const { navigate } = useNavigation();

  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgAlert, setMsgAlert] = useState(null);

  function showAlert() {
    Toast.show({
      text: msgAlert,
      buttonText: "OK",
      duration: 5000,
    });
  }

  function onSubmit() {
    if (!Boolean(name) || !Boolean(email) || !Boolean(password)) {
      setMsgAlert("Todos los campos son obligatorios.");
      setMsgAlert(null);
      return;
    }
    createUser({
      name,
      email,
      password,
    });

    navigate("Login");
  }

  return (
    <Container style={[globalStyles.container, { backgroundColor: "#00ccff" }]}>
      <View style={globalStyles.contents}>
        <H1 style={globalStyles.title}>Notas</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Nombre" onChangeText={(text) => setName(text)} />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
          </Item>
        </Form>
        <Button onPress={onSubmit} square block style={globalStyles.button}>
          <Text>Crear Cuenta</Text>
        </Button>
      </View>
      {msgAlert && showAlert()}
    </Container>
  );
};

export default SignUp;

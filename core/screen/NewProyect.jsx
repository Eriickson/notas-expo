import React, { useContext, useState } from "react";

import { View, Container, Button, Text, H1, Form, Item, Input } from "native-base";
import { AsyncStorage } from "react-native";
import globalStyles from "../styles/global";
import { userContext } from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";

const NewProyectScreen = () => {
  const { newProyect } = useContext(userContext);
  const [nameProyect, setNameProyect] = useState("");
  const { navigate } = useNavigation();

  async function onSubmit() {
    const email = await AsyncStorage.getItem("userEmail");

    newProyect(email, nameProyect);
    navigate("Home");
  }

  return (
    <Container style={[globalStyles.container, { backgroundColor: "#00ccff" }]}>
      <View style={globalStyles.contents}>
        <H1 style={globalStyles.title}>Nuevo Proyecto</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Nombre del Proyecto"
              onChangeText={(text) => setNameProyect(text)}
            />
          </Item>
        </Form>
        <Button square block style={globalStyles.button} onPress={() => onSubmit()}>
          <Text>Crear Proyecto</Text>
        </Button>
      </View>
    </Container>
  );
};

export default NewProyectScreen;

import React, { useState, useContext } from "react";
import { Container, Button, Text, H2, Content, List, Item, Form, Input } from "native-base";
import { StyleSheet } from "react-native";

import globalStyles from "../styles/global";
import { userContext } from "../context/UserContext";
import Task from "../components/Task";

const ProyectScreen = ({ route }) => {
  const { newTask, getTasks } = useContext(userContext);
  const [nameTask, setNameTask] = useState("");

  function onSubmit() {
    newTask(route.params.id, nameTask);
    setNameTask("");
  }

  return (
    <Container style={([globalStyles.container], { backgroundColor: "#00ccff" })}>
      <Form style={{ marginHorizontal: "2.5%", marginTop: 20 }}>
        <Item inlineLabel last style={globalStyles.input}>
          <Input
            placeholder="Nombre de la tarea"
            value={nameTask}
            onChangeText={(text) => setNameTask(text)}
          />
        </Item>
        <Button style={globalStyles.button} square block onPress={() => onSubmit()}>
          <Text>Crear Tarea</Text>
        </Button>
      </Form>
      <H2 style={globalStyles.subtitle}>Tareas: {route.params.name}</H2>
      <Content>
        <List style={styles.content}>
          {getTasks(route.params.id).map((task, i) => (
            <Task key={i} task={task} />
          ))}
        </List>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    marginHorizontal: "2.5%",
  },
});

export default ProyectScreen;

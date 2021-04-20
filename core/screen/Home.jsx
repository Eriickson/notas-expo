import React, { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { Container, Button, Text, H2, Content, List, ListItem, Left, Right } from "native-base";
import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { userContext } from "../context/UserContext";
import { AsyncStorage } from "react-native";

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const { proyects, getProyectsUser } = useContext(userContext);
  const [userProyects, setUserProyects] = useState([]);

  async function initialState() {
    const email = await AsyncStorage.getItem("userEmail");
    const proyectsUser = getProyectsUser(email);
    setUserProyects(proyectsUser);
  }

  useEffect(() => {
    initialState();
  }, [proyects]);

  return (
    <Container style={[globalStyles.container, { backgroundColor: "#00ccff" }]}>
      <Button
        style={[globalStyles.button, { marginTop: 40 }]}
        square
        block
        onPress={() => navigate("NewProyect")}
      >
        <Text style={globalStyles.buttonText}>Nuevo Proyecto</Text>
      </Button>
      <H2 style={globalStyles.subtitle}>Selecciona un Proyecto</H2>
      <Content>
        <List style={styles.content}>
          {userProyects.map((proyect, i) => (
            <ListItem key={i} onPress={() => navigate("Proyect", proyect)}>
              <Left>
                <Text>{proyect.name}</Text>
              </Left>
              <Right></Right>
            </ListItem>
          ))}
        </List>
      </Content>
      <Button
        style={globalStyles.button}
        block
        onPress={async () => {
          await AsyncStorage.removeItem("userEmail");
          navigate("Login");
        }}
      >
        <Text>Cerrar sesión</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    marginHorizontal: "2.5%",
  },
  view: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default HomeScreen;

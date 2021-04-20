import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contents: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: "2.5%",
    flex: 1,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#28303B",
  },
  buttonText: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  buttonUrl: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 60,
  },
  subtitle: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
});

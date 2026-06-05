import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#4939BA",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
    color: "#555",
  },
  bold: {
    fontWeight: "bold",
    color: "#000",
  },
  favButton: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 3,
  },
  favButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

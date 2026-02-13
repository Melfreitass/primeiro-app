import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/logo.png")} style={styles.image} />
      </View>

      <View style={styles.main}>
        <View style={styles.titulo}>
          <Text style={styles.titulo}>Join Us!</Text>
        </View>

        <View style={styles.secaoLogin}>
          <Text style={styles.tituloInput}>Your Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
          ></TextInput>
          <Text style={styles.tituloInput}>Your Email</Text>
          <TextInput
            style={styles.input}
            placeholder="hello@gmail.com"
          ></TextInput>
          <Text style={styles.tituloInput}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="............"
          ></TextInput>
        </View>

        <View style={styles.separacao}>
          <View style={styles.linha}></View>
          <Text style={styles.or}>or</Text>
          <View style={styles.linha}></View>
        </View>

        <View style={styles.redes}>
          <View style={styles.quadrado}>
            <Image
              source={require("./assets/google-logo.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.quadrado}>
            <Image
              source={require("./assets/facebook.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.quadrado}>
            <Image
              source={require("./assets/instagram.png")}
              style={styles.logo}
            />
          </View>
        </View>

        <View style={styles.botao}>
          <Text style={styles.create}>Create an account</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "baseline",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 330,
    width: "100%",
    paddingTop: 30,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  titulo: {
    fontWeight: 700,
    fontSize: 40,
  },
  secaoLogin: {
    backgroundColor: "#ffffff",
    alignItems: "baseline",
    justifyContent: "center",
    width: "100%",
    paddingRight: 50,
    paddingStart: 50,
    paddingTop: 30,
    paddingBottom: 20,
  },
  tituloInput: {
    color: "#4d4d4daf",
    fontWeight: 600,
  },
  input: {
    marginTop: 5,
    height: 40,
    width: "100%",
    borderColor: "#6ab8cf8a",
    borderWidth: 1.8,
    borderRadius: 10,
    backgroundColor: "#84badf34",
    marginBottom: 25,
    paddingLeft: 20,
  },
  separacao: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  linha: {
    backgroundColor: "#6ab7cf6e",
    width: "43%",
    height: 4,
  },
  or: {
    color: "#6ab7cf69",
    fontWeight: 800,
    fontSize: 15,
  },
  redes: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
    gap: 40,
  },
  logo: {
    width: 30,
    height: 30,
  },
  quadrado: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    backgroundColor: "#84badf34",
    borderRadius: 10,
    borderColor: "#2f78d88a",
    borderWidth: 1.8,
  },
  botao: {
    marginTop: 35,
    width: "80%",
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0c93c9",
    shadowColor: "#2d5a96",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: { width: 0, height: 8 },
  },
  create: {
    color: "#ffffff",
    fontWeight: 700,
  },
});

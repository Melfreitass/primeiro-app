import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image 
        source={require('./assets/logo.png')} 
        style={styles.image}
      />
      </View>

      <View style={styles.main}>

        <View style={styles.titulo}> 
          <Text style={styles.titulo}>Join Us!</Text>
        </View>

        <View style={styles.secaoLogin}>
          <TextInput
          style={styles.input}
          placeholder="Digite algo..."
        ></TextInput>
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
    height: 400,
    width: '100%'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%'
  },
  titulo: {
    fontWeight: 700,
    fontSize: 40,
  },
  secaoLogin: {
    backgroundColor: "#000000",
    height: 800,
    alignItems: "baseline",
    justifyContent: "center",
    width: '100%',
    padding: 20
  },
  input: {},
});

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
          <Text style={styles.tituloInput}>Your Name</Text>
          <TextInput
          style={styles.input}
          placeholder="Enter your full name"
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
    backgroundColor: "#ffffff",
    alignItems: "baseline",
    justifyContent: "center",
    width: '100%',
    padding: 50,
    paddingTop: 30
  },
  tituloInput: {
    color: "#4d4d4daf",
    fontWeight: 600
  },
  input: {
    marginTop: 8,
    height: 40,
    width: '100%',
    borderColor: "#6ab8cf8a",
    borderWidth: 1.8,
    borderRadius: 10,
    backgroundColor:"#84badf34",
    paddingLeft: 20,
  }
});

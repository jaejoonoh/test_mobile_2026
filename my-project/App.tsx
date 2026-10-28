import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}><Text style={styles.boxText}>#1</Text></View>
      <View style={styles.box}><Text style={styles.boxText}>#2</Text></View>
      <View style={styles.box}><Text style={styles.boxText}>#3</Text></View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: "column",
    alignItems: "center", justifyContent: "space-around",
    backgroundColor: "ghostwhite",
  },
  box: {
    width: 300, height: 100,
    justifyContent: "center", alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1, borderStyle: "dashed", borderColor: "darkslategray",
  },
  boxText: { color: "darkslategray", fontWeight: "bold" },
});

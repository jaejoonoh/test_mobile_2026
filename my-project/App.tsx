import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>I'm in a box</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100, height: 100,
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  boxText: {color: 'darklategray', fontWeight: 'bold'},
  text:{fontWeight: 'bold'}
});

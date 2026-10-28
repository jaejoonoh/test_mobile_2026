import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Styles';
import Box from './Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box>Box 1 </Box>
      <Box>Box 2 </Box>
      <Box>Box 3 </Box>
    </View>
  );
}
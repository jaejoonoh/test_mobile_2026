import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Box from './Box';
import Row from './Row';
import Column from './Column';

const boxes = new Array(10).fill(null).map((v, i)=> i+1);

export default function App() {
  return (
    <View style={styles.container}>
      <Row>
        <Column><Box>#1</Box><Box>#2</Box></Column>
        <Column><Box>#3</Box><Box>#4</Box></Column>
      </Row>
    </View>
  );
}
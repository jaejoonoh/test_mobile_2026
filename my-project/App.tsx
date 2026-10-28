import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const Box = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;
 
const BoxText = styled.Text`
  color: darkslategray;
  font-weight: bold;
`;
 
const App = () => (
  <Box><BoxText>I'm in a box</BoxText></Box>
);

export default App;

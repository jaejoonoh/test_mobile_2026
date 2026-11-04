
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import styles from './styles';
import Box from './Box';
import Row from './Row';
import Column from './Column';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './router';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Home( { navigation }: Props ) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
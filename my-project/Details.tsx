import React from "react";
import { View, Text, StatusBar } from "react-native";
import { RootStackParamList } from "./router";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details ({ route }: Props) {
    const { title } = route.params;

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>{title}</Text>
        </View>
    );
}
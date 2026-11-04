import React from "react";
import { View, Text, StatusBar } from "react-native";
import { RootStackParamList } from "./router";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details ({ route, navigation }: Props) {
    const { content, title } = route.params;

    React.useEffect(() =>{
        navigation.setOptions({
            title: title,
        });
    }, [navigation, title]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>{content}</Text>
        </View>
    );
}
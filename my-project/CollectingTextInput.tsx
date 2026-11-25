import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import styles from "./styles";

type InputProps = TextInputProps & {
  label: string;
};

function Input({ label, ...rest }: InputProps) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{label}</Text>
      <TextInput style={styles.textInput} {...rest} />
    </View>
  );
}

export default function CollectingTextInput() {
    return (
        <>
        </>
    );
}
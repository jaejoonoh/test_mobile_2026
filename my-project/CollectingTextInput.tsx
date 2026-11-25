import React, { useState } from "react";
import {
  TextInput,
  TextInputProps,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
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
  const [changedText, setChangedText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const headerHeight = useHeaderHeight();

  return (
    // Expo 앱은 Android에서도 edge-to-edge라 창이 키보드에 맞춰 리사이즈되지 않으므로
    // 두 플랫폼 모두 behavior를 지정해야 합니다.
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={headerHeight}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1}}
        keyboardShouldPersistTaps="handled"
      >
        <Text>Checked</Text>
        <Text>Checked</Text>
        <Text>Checked</Text>
        <Text>Checked</Text>
        <Input label="Basic Text Input:" />
        <Input label="Password Input:" secureTextEntry />
        <Input label="Return Key:" returnKeyType="search" />
        <Input label="Placeholder Text:" placeholder="Search" />
        <Input
          label="Input Events:"
          onChangeText={(e) => {
            setChangedText(e);
          }}
          onSubmitEditing={(e) => {
            setSubmittedText(e.nativeEvent.text);
          }}
          onFocus={() => {
            setChangedText("");
            setSubmittedText("");
          }}
        />
        <Text>Changed: {changedText}</Text>
        <Text>Submitted: {submittedText}</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const PasswordInput = ({ value, onChangeText }) => {
  const handleChange = (text) => {
    onChangeText(text);
  };

  return (
    <View style={styles.containerOwner}>
      <Feather name="lock" size={24} color="black" />
      <TextInput
        onChangeText={handleChange}
        value={value}
        placeholder="Digite a senha"
        placeholderTextColor="#333333"
        style={styles.input}
        secureTextEntry={true} // Para ocultar os caracteres da senha
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerOwner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    height: 60,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingLeft: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
});

export default PasswordInput;

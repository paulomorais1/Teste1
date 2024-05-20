import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const PhoneNumberInput = ({ value, onChangeText }) => {
  const formatPhoneNumber = (text) => {
    // Remove tudo que não for dígito
    let cleaned = ("" + text).replace(/\D/g, "");

    // Adiciona parênteses e hífen conforme a digitação
    if (cleaned.length === 11) {
      cleaned = cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (cleaned.length > 11) {
      cleaned = cleaned.slice(0, 11);
      cleaned = cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (cleaned.length >= 7) {
      cleaned = cleaned.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else if (cleaned.length >= 3) {
      cleaned = cleaned.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
    }
    return cleaned;
  };

  const handleChange = (text) => {
    const formatted = formatPhoneNumber(text);
    onChangeText(formatted);
  };

  return (
    <View style={styles.containerOwner}>
      <Feather name="phone" size={24} color="black" />
      <TextInput
        onChangeText={handleChange}
        value={value}
        placeholder= 'Digite o telefone'
        placeholderTextColor="#333333"
        style={styles.input}
        keyboardType="numeric"
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

export default PhoneNumberInput;

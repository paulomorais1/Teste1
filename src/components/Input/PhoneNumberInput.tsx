import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";


const PhoneNumberInput = ({ value, onChangeText }) => {
    const handleChange = (text) => {
        // Remove tudo que não for dígito
        const cleaned = ("" + text).replace(/\D/g, "");
        onChangeText(cleaned);
    };

    const handleLogin = () => {
        // Remove a formatação antes de enviar para o backend
        const cleanedPhoneNumber = value.replace(/\D/g, "");
        // Agora você pode enviar `cleanedPhoneNumber` para o backend
        console.log("Número de telefone sem formatação:", cleanedPhoneNumber);
        // Faça a solicitação de login com `cleanedPhoneNumber`
        // Exemplo:
        // login(cleanedPhoneNumber);
    };

    return (
        <View style={styles.containerOwner}>
            <Feather name="phone" size={24} color="black" />
            <TextInput
                onChangeText={handleChange}
                value={value}
                placeholder="Digite o telefone"
                placeholderTextColor="#333333"
                style={styles.input}
                keyboardType="phone-pad"
                maxLength={11}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerOwner: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        height: 60,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 20,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#000",
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
});

export default PhoneNumberInput;

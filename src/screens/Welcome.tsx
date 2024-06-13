import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native"; // Import NavigationProp

type WelcomeProps = {
    navigation: NavigationProp<any>; // Define type for navigation prop
};

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
    const handleSignInPress = () => {
        navigation.navigate("SignIn");
    };

    const handleSignUpPress = () => {
        navigation.navigate("SignUp");
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={{
                        uri: "https://raw.githubusercontent.com/paulomorais1/Teste1/Teste/assets/logo.png",
                    }}
                    style={[styles.logoImage]}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.titleLogo}>Bem Vindo/a</Text>
                <Text style={styles.textLogo}>
                    Selecione a opção com que deseja entrar
                </Text>
            </View>

            <View style={styles.containerOptions}>
                <TouchableOpacity
                    onPress={handleSignInPress}
                    style={[styles.optionButton, styles.signInButton]}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleSignUpPress}
                    style={[styles.optionButton, styles.signUpButton]}
                >
                    <Text style={[styles.signUpButtonText]}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 50,
    },
    containerLogo: {
        marginBottom: 30,
        height: "25%",
    },
    logoImage: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        flex: 1,
    },
    containerTitle: {
        marginVertical: 15,
        marginBottom: 35,
        alignItems: "center",
    },
    titleLogo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: "black",
    },
    textLogo: {
        fontSize: 16,
        textAlign: "center",
    },
    containerOptions: {
        width: "100%",
        height: "0%",
        marginVertical: 40,
    },
    optionButton: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        height: 60,
        marginBottom: 10,
    },
    signInButton: {
        backgroundColor: "#325426",
    },
    signUpButton: {
        backgroundColor: "#f5f5f5",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
    },
    signUpButtonText: {
        color: "#000",
        fontWeight: "500",
        fontSize: 18,
    },
});

export default Welcome;

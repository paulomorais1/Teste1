import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    Image,
    TouchableOpacity,
    ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthenticationService from "@/services/AuthenticationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PhoneNumberInput from "@/components/Input/PhoneNumberInput";
import PasswordInput from "@/components/Input/PasswordInput";

const SignInScreen = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();


    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    const handleSignIn = async () => {
        if (!phone || !password) {
            showToast("Por favor, preencha todos os campos");
            return;
        }

        const result = await AuthenticationService.login(
            phone ,
            password
        );

        if (typeof result === "string") {
            // Exibir mensagem de erro como toast
            showToast(result);

        } else {
            const user = result;
            setTimeout(() => {
                showToast(`Bem vindo(a), ${user.name}`);
            }, 100);

            await AsyncStorage.setItem("userRole", user.role);

            if ( user.role === "Admin") {
                navigation.navigate("AdminScreen");
            } else if (user.role === "Volunteer") {
                navigation.navigate("VolunteerScreen");
            } else {
                navigation.navigate("DonationScreen");
            }
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === "ios" ? 300 : 0}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={{
                                uri: "https://raw.githubusercontent.com/paulomorais1/Teste1/Teste/assets/logo.png",
                            }}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.signInContainer}>
                        <Text style={styles.title}>Faça o login!</Text>

                        <View style={styles.phoneNumberInputContainer}>
                            <PhoneNumberInput
                                value={phone}
                                onChangeText={setPhone}

                            />
                            <PasswordInput
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        <Text
                            style={styles.link}
                            onPress={() =>
                                navigation.navigate("RecoverPassword")
                            }
                        >
                            Esqueceu a senha
                        </Text>
                        <TouchableOpacity
                            onPress={handleSignIn}
                            style={[styles.button, styles.signInButton]}
                        >
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                        <Text style={styles.signUpText}>
                            Faça a sua parte{" "}
                            <Text
                                style={styles.link}
                                onPress={() => navigation.navigate("SignUp")}
                            >
                                Cadastre-se
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    innerContainer: {
        flex: 1,
        padding: 10,
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 30,
    },
    logo: {
        width: "50%",
        height: 200,
    },
    signInContainer: {
        flex: 1,
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 10,
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        borderRadius: 5,
        marginBottom: 10,
    },
    signInButton: {
        backgroundColor: "#325426",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
    },
    link: {
        color: "blue",
        alignSelf: "flex-end",
        padding: 12,
    },
    signUpText: {
        marginTop: 20,
        alignSelf: "center",
    },
    phoneNumberInputContainer: {
        gap: 20,
    },
});

export default SignInScreen;

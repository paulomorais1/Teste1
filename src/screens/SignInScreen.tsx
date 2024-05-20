
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
    Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthenticationService from "@/services/AuthenticationService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignInScreen = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleSignIn = async () => {
        if (!phone || !password) {
            Alert.alert("Erro", "Por favor, preencha todos os campos");
            return;
        }

        try {
            const user = await AuthenticationService.login(
                phone as unknown as number,
                password
            );

            if (user) {
                await AsyncStorage.setItem("userRole", user.role);

                switch (user.role) {
                    case "Admin":
                        navigation.navigate("AdminScreen");
                        break;
                    case "Volunteer":
                        navigation.navigate("VolunteerScreen");
                        break;
                    case "Donation":
                        navigation.navigate("DonationScreen");
                        break;
                    default:
                        navigation.navigate("DefaultScreen");
                }
            } else {
                Alert.alert(
                    "Erro",
                    "Credenciais incorretas. Por favor, tente novamente."
                );
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            Alert.alert(
                "Erro",
                "Ocorreu um erro ao fazer login. Por favor, tente novamente."
            );
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require("../../assets/logo.png")}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.signInContainer}>
                        <Text style={styles.title}>Faça o login!</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="phone-pad"
                            placeholder="Phone"
                            value={phone}
                            onChangeText={setPhone}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
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
                            Seja um doador{" "}
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
    input: {
        height: 60,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        marginBottom: 10,
        fontSize: 20,
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
        marginBottom: 10,
    },
    signUpText: {
        marginTop: 20,
        alignSelf: "center",
    },
});

export default SignInScreen;

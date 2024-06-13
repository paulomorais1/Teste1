import React, { useState, useMemo } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    ToastAndroid,
} from "react-native";
import NomeInput from "@/components/Input/NomeInput";
import EmailInput from "@/components/Input/EmailInput";
import PhoneNumberInput from "@/components/Input/PhoneNumberInput";
import PasswordInput from "@/components/Input/PasswordInput";
import SignUpService from "@/services/SignUpService"; // Importing the sign-up service
import { useNavigation } from "@react-navigation/native";
import SurNomeInput from "@/components/Input/SurnameInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TRole } from "@/models/role";

const SignUpScreen = () => {
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        role: "Volunteer" as TRole,
        phone: "",
        password: "",
    });
    const navigation = useNavigation();

    const radioButtons = useMemo(
        () => [
            {
                label: "Ser um Voluntário",
                value: "Volunteer" as TRole,
            },
            {
                label: "Ser um Doador",
                value: "Donation" as TRole,
            },
        ],
        []
    );
    const [selectedId, setSelectedId] = useState<TRole | null>(null);

    const showToast = (message: string) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    const handleSignUp = async () => {


        const userData = {
            name: formData.name,
            surname: formData.surname,
            email: formData.email,
            role: selectedId,
            phone: formData.phone,
            password: formData.password,
        };


        const responseMessage = await SignUpService.signUp(userData);

        if (typeof responseMessage === "string") {
            showToast(responseMessage);
            showToast("Cadastro realizado com sucesso");
        } else {
            const user = responseMessage; // Renomeando a variável para evitar sobreposição
            setTimeout(() => {
                showToast(`Cadastrado com sucesso!`);
                navigation.navigate("SignIn");
            }, 1000);
            await AsyncStorage.setItem("userRole", selectedId);
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
                    <Text style={styles.title}>
                        Cadastre-se! E faça a sua parte!
                    </Text>
                    <View style={styles.NameContainer}>
                        <View style={styles.NameInputContainer}>
                            <NomeInput
                                value={formData.name}
                                onChangeText={(name) =>
                                    setFormData({ ...formData, name })
                                }
                            />
                        </View>
                        <View style={styles.NameInputContainer}>
                            <SurNomeInput
                                value={formData.surname}
                                onChangeText={(surname) =>
                                    setFormData({ ...formData, surname })
                                }
                            />
                        </View>
                    </View>

                    <EmailInput
                        value={formData.email}
                        onChangeText={(email) =>
                            setFormData({ ...formData, email })
                        }
                    />
                    <View style={styles.radioContainer}>
                        {radioButtons.map((button) => (
                            <TouchableOpacity
                                key={button.value}
                                style={[
                                    styles.radioButton,
                                    selectedId === button.value &&
                                        styles.selectedRadioButton,
                                    { borderWidth: 1, borderColor: "#325426" },
                                ]}
                                onPress={() => setSelectedId(button.value)}
                            >
                                <Text
                                    style={[
                                        styles.radioText,
                                        selectedId === button.value &&
                                            styles.selectedRadioText,
                                    ]}
                                >
                                    {button.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <PhoneNumberInput
                        value={formData.phone}
                        onChangeText={(phone) =>
                            setFormData({ ...formData, phone })
                        }
                    />
                    <PasswordInput
                        value={formData.password}
                        onChangeText={(password) =>
                            setFormData({ ...formData, password })
                        }
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSignUp}
                        >
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                        <Text style={styles.message}>{message}</Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    innerContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 20,
    },
    title: {
        textAlign: "justify",
        paddingVertical: 30,
        fontSize: 24,
        fontWeight: "bold",
    },
    NameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    NameInputContainer: {
        flex: 1,
        marginRight: 5,
    },
    AddressContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        marginRight: 10,
    },
    buttonContainer: {
        width: "100%",
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#325426",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        position: "relative",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    message: {
        marginTop: 20,
        fontSize: 16,
        color: "green",
    },
    radioContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    radioButton: {
        borderWidth: 1,
        borderColor: "#E0F2DF",
        borderRadius: 5,
        padding: 10,
    },
    radioText: {
        color: "#000",
    },
    selectedRadioButton: {
        backgroundColor: "#325426", // Selected background color
    },

    selectedRadioText: {
        color: "#fbf6f6", // Selected text color
    },
});

export default SignUpScreen;

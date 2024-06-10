import User from "@/models/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

interface SignInResponse {
    body: User['body'];
    message: string;
}

const AuthenticationService = {
    login: async (phone: string, password: string): Promise<User['body'] | string> => { // Ajuste aqui para retornar User['body'] | string
        const showToast = (message: string) => {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        };

        try {
            const requestOptions: RequestInit = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone, password }),
            };

            const response = await fetch(
                "http://192.168.15.10:8080/api/v1/auth/user/sign-in",
                requestOptions
            );

            if (!response.ok) {
                showToast("Usuário ou senha incorretos");
                return `Usuário ou senha incorretos`;
            }

            const data: SignInResponse = await response.json();

            await new Promise((resolve) => setTimeout(resolve, 1200));

            if (data && data.body) {
                await AsyncStorage.setItem("userId", String(data.body.id)); // Ensure id is string
                return data.body;
            } else {
                return "Resposta inválida do servidor";
            }
        } catch (error: any) {
            showToast("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
            return "Ocorreu um erro ao fazer login. Por favor, tente novamente.";
        }
    },
}

export default AuthenticationService;

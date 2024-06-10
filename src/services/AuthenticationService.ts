

import User from "@/models/User";
import { ToastAndroid } from "react-native";

interface SignInResponse {
    body: User;
    message: string;

}

const AuthenticationService = {
    login: async (phone: number, password: string): Promise<User | string> => {
        const showToast = (message ) => {
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
                // Exibir toast de erro
                showToast("Usuário ou senha incorretos");
                return `Usuário ou senha incorretos`;
            }

            const data: SignInResponse = await response.json();

            // Aguardar 1 segundo antes de retornar os dados de login
            await new Promise((resolve) => setTimeout(resolve, 1200));


            if (data && data.body) {
                return data.body;
            } else {
                return "Resposta inválida do servidor";
            }
        } catch (error: any) {
            // Exibir toast de erro genérico
            showToast(
                "Ocorreu um erro ao fazer login. Por favor, tente novamente."
            );
            return "Ocorreu um erro ao fazer login. Por favor, tente novamente.";
        }
    },
}

export default AuthenticationService;

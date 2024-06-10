import { ToastAndroid } from "react-native";
import User from "@/models/User";

interface SignUpResponse {
    body: User;
}

const SignUpService = {
    signUp: async (userData: {
        name: string;
        surname: string;
        email: string;
        role: string;
        phone: number;
        password: string;
    }): Promise<User | string> => {
        const { name, surname, email, role, phone, password } = userData;

        const showToast = (message: string) => {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        };

        try {
            const requestOptions: RequestInit = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, surname, email, role, phone, password }),
            };


            const responseSign = await fetch(
                "http://192.168.15.10:8080/api/v1/auth/user/create",
                requestOptions
            );

            if (!responseSign.ok) {
                showToast("Dados Incorretos");

            }

            const data: SignUpResponse = await responseSign.json();
            await new Promise((resolve) => setTimeout(resolve, 1200));


            if (data && data.body) {
                return data.body;
            } else {
                showToast("Resposta inválida do servidor")
            }
        } catch (error: any) {
            showToast(
                "Ocorreu um erro ao cadastrar usuário. Por favor, tente novamente."
            );


        }
    },
};

export default SignUpService;

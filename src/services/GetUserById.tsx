import User from "@/models/User";
import { ToastAndroid } from "react-native";

const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
};

const GetUserService = {
    getUserById: async (userId: string): Promise<User | string> => {
        try {
            const response = await fetch(`http://192.168.15.10:8080/api/v1/user/get-by-id/${userId}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                showToast("Erro ao buscar usuário");
                return "Erro ao buscar usuário";
            }

            const data: User = await response.json();
            return data;
        } catch (error: any) {
            showToast("Ocorreu um erro ao buscar usuário. Por favor, tente novamente.");
            return "Ocorreu um erro ao buscar usuário. Por favor, tente novamente.";
        }
    }
};

export default GetUserService;

import User from "@/models/User";
import { ToastAndroid } from "react-native";

const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
};

const UserService = {
    getAllUsers: async (): Promise<User[] | string> => {
        try {
            const response = await fetch("http://192.168.15.10:8080/api/v1/user/get-by-id/", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                showToast("Erro ao buscar usuários");
                return "Erro ao buscar usuários";
            }

            const data: User[] = await response.json();
            return data;
        } catch (error: any) {
            showToast("Ocorreu um erro ao buscar usuários. Por favor, tente novamente.");
            return "Ocorreu um erro ao buscar usuários. Por favor, tente novamente.";
        }
    }
};

export default UserService;

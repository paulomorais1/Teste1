import { IDonorAliments } from "@/models/aliments/aliments";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

interface CreateAlimentParams {
    body: IDonorAliments;
}

interface CreateAlimentResponse {
    body: IDonorAliments;
    message: string;
}

const AlimentsService = {
    createAliment: async (
        params: CreateAlimentParams
    ): Promise<IDonorAliments | string> => {
        const showToast = (message: string) => {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        };

        try {
            const requestOptions: RequestInit = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(params.body),
            };

            const response = await fetch(
                "http://192.168.15.10:8080/api/v1/donorAliments/create",
                requestOptions
            );

            if (!response.ok) {
                showToast("Erro ao criar alimento");
                return "";
            }

            const data: CreateAlimentResponse = await response.json();

            await new Promise((resolve) => setTimeout(resolve, 1200));

            if (data && data.body) {
                await AsyncStorage.setItem("userId", String(data.body.userId));
                showToast("Alimento criado com sucesso!");
                return data.body;
            } else {
                showToast("Resposta inválida do servidor ao criar alimento");
                return "";
            }
        } catch (error: any) {
            showToast(
                "Ocorreu um erro ao criar alimento. Por favor, tente novamente."
            );
            return "";
        }
    },
};

export default AlimentsService;

import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Modal,
    StyleSheet,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";
import AlimentsService from "@/services/aliments/create"; // Importe seu serviço corretamente
import { IDonorAliments, DonorAlimentItem } from "@/models/aliments/aliments"; // Importe as interfaces necessárias
import { INames } from "@/models/aliments/names"; // Importe as interfaces necessárias

// Simulando a importação das listas INames e ITypes
const namesAliments: INames[] = [
    "Açúcar",
    "Arroz",
    "Banana",
    "Banha ou óleo",
    "Batata",
    "Café em pó",
    "Carne",
    "Farinha",
    "Feijão",
    "Leite",
    "Manteiga",
    "Pão de fôrma ou francês",
    "Tomate",
];

const foodTypes = ["Cesta Básica", "Outros"];

const DonorAliments = () => {
    const [selectedName, setSelectedName] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [quantity, setQuantity] = useState("");
    const [isNameModalVisible, setIsNameModalVisible] = useState(false);
    const [isTypeModalVisible, setIsTypeModalVisible] = useState(false);
    const [selectedItems, setSelectedItems] = useState<DonorAlimentItem[]>([]);

    const showToast = (message: string) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    const handleNameSelect = (name: string) => {
        setSelectedName(name);
        setIsNameModalVisible(false);
    };

    const handleTypeSelect = (type: string) => {
        setSelectedType(type);
        setIsTypeModalVisible(false);
        setSelectedItems([]); // Reset selected items if type is changed
        setSelectedName(null); // Reset selected name
        setQuantity(""); // Reset quantity
    };

    const handleAddItem = () => {
        if (selectedName && quantity && selectedType === "Outros") {
            const newItem: DonorAlimentItem = {
                nameItems: selectedName as INames,
                quantity: parseInt(quantity),
            };

            setSelectedItems([...selectedItems, newItem]);

            // Reset input fields
            setSelectedName(null);
            setQuantity("");
        }
    };

    const handleRemoveItem = (index: number) => {
        const newItems = [...selectedItems];
        newItems.splice(index, 1);
        setSelectedItems(newItems);
    };

    const handleCloseModal = () => {
        setIsNameModalVisible(false);
        setIsTypeModalVisible(false);
    };

    const handleFinalizeDonation = async () => {
        try {
            let donationBody: IDonorAliments;

            const userId = await AsyncStorage.getItem("userId");

            if (!userId) {
                showToast(
                    "Usuário não encontrado. Por favor, faça login novamente."
                );
                return;
            }

            if (selectedType === "Cesta Básica") {
                // Cesta Básica: Criação de objeto de doação
                donationBody = {
                    userId: userId,
                    date: new Date().toISOString(),
                    type: "Cesta Básica",
                    items: parseInt(quantity), // Apenas a quantidade é necessária aqui
                };
            } else if (selectedType === "Outros" && selectedItems.length > 0) {
                // Outros: Criação de objeto de doação
                donationBody = {
                    userId: userId,
                    date: new Date().toISOString(),
                    type: "Outros",
                    items: selectedItems,
                };
            } else {
                showToast(
                    "Por favor, selecione o tipo de doação e adicione itens."
                );
                return;
            }

            // Chamar o serviço para criar o alimento
            const result = await AlimentsService.createAliment({
                body: donationBody,
            });
            // Lógica para tratar o resultado da criação da doação (result)

            if (result !== "") {
                // Lógica para tratar o resultado da criação da doação (result)
                showToast("Doação finalizada com sucesso!");

                // Limpa estado após finalizar a doação
                setSelectedType(null);
                setSelectedItems([]);
                setSelectedName(null);
                setQuantity("");
            }

            showToast("Doação finalizada com sucesso!");
        } catch (error) {
            showToast(
                "Ocorreu um erro ao finalizar a doação. Por favor, tente novamente."
            );
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === "ios" ? 300 : 0}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Doar Alimento</Text>

                <TouchableOpacity
                    style={styles.selectButton}
                    onPress={() => setIsTypeModalVisible(true)}
                >
                    <Text style={styles.selectButtonText}>
                        {selectedType || "Escolha o tipo de doação"}
                    </Text>
                </TouchableOpacity>

                <Modal
                    visible={isNameModalVisible || isTypeModalVisible}
                    animationType="slide"
                    transparent={true}
                >
                    <TouchableOpacity
                        style={styles.modalOverlay}
                        onPress={handleCloseModal}
                    >
                        <View style={styles.modalContainer}>
                            {isTypeModalVisible && (
                                <FlatList
                                    data={foodTypes}
                                    keyExtractor={(item) => item}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={styles.modalItem}
                                            onPress={() =>
                                                handleTypeSelect(item)
                                            }
                                        >
                                            <Text style={styles.modalItemText}>
                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            )}
                            {isNameModalVisible && (
                                <FlatList
                                    data={namesAliments}
                                    keyExtractor={(item) => item}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={styles.modalItem}
                                            onPress={() =>
                                                handleNameSelect(item)
                                            }
                                        >
                                            <Text style={styles.modalItemText}>
                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            )}
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={handleCloseModal}
                            >
                                <Text style={styles.closeButtonText}>
                                    Fechar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>

                {selectedType === "Outros" && (
                    <>
                        <TouchableOpacity
                            style={styles.selectButton}
                            onPress={() => setIsNameModalVisible(true)}
                        >
                            <Text style={styles.selectButtonText}>
                                {selectedName || "Selecione o Alimento"}
                            </Text>
                        </TouchableOpacity>

                        <TextInput
                            style={styles.input}
                            placeholder="Quantidade"
                            keyboardType="numeric"
                            value={quantity}
                            onChangeText={setQuantity}
                        />

                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={handleAddItem}
                        >
                            <Text style={styles.buttonText}>Adicionar</Text>
                        </TouchableOpacity>

                        <FlatList
                            data={selectedItems}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <View style={styles.selectedItem}>
                                    <Text>{`${item.nameItems} `}</Text>
                                    <Text>{`${item.quantity}`}</Text>
                                    <TouchableOpacity
                                        style={styles.removeButton}
                                        onPress={() => handleRemoveItem(index)}
                                    >
                                        <Text style={styles.buttonTextRemove}>
                                            Remover
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </>
                )}

                {selectedType === "Cesta Básica" && (
                    <TextInput
                        style={styles.input}
                        placeholder="Quantidade"
                        keyboardType="numeric"
                        value={quantity}
                        onChangeText={setQuantity}
                    />
                )}

                {/* Botão para finalizar a doação */}
                <TouchableOpacity
                    style={styles.finalizeButton}
                    onPress={handleFinalizeDonation}
                >
                    <Text style={styles.finalizeButtonText}>
                        Finalizar Doação
                    </Text>
                </TouchableOpacity>
            </View>
            <ImageBackground
                source={{
                    uri: "https://st5.depositphotos.com/28752036/66300/v/600/depositphotos_663002578-stock-illustration-food-donation-concept-humanitarian-assistance.jpg",
                }}
                style={styles.backgroundImage}
            ></ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 90,
        width: "100%",
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
    backgroundImage: {
        zIndex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: "rgba(250, 249, 249, 0.907)",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
    },
    selectButton: {
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
    },
    selectButtonText: {
        fontSize: 16,
        color: "#555",
    },
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: "#325426",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "#E0F2DF",
        fontSize: 16,
    },
    buttonTextRemove: {
        color: "#325426",
        fontSize: 16,
    },
    selectedItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
    },
    removeButton: {
        backgroundColor: "#E0F2DF",
        padding: 10,
        borderRadius: 5,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        width: "80%",
        maxHeight: "60%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
    },
    modalItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    modalItemText: {
        fontSize: 18,
    },
    closeButton: {
        padding: 15,
        backgroundColor: "#E0F2DF",
        borderRadius: 5,
        marginTop: 20,
    },
    closeButtonText: {
        fontSize: 16,
        color: "#325426",
        textAlign: "center",
    },
    finalizeButton: {
        backgroundColor: "#325426",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 20,
    },
    finalizeButtonText: {
        color: "#E0F2DF",
        fontSize: 16,
    },
});

export default DonorAliments;

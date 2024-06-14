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

// Simulando a importação das listas INames e ITypes
const namesAliments = [
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
    const [donationType, setDonationType] = useState<"single" | "basket">(
        "single"
    );
    const [selectedName, setSelectedName] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [quantity, setQuantity] = useState("");
    const [isNameModalVisible, setIsNameModalVisible] = useState(false);
    const [isTypeModalVisible, setIsTypeModalVisible] = useState(false);
    const [selectedItems, setSelectedItems] = useState<
        { name: string; quantity: number }[]
    >([]);

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
        if (selectedName && quantity) {
            setSelectedItems([
                ...selectedItems,
                { name: selectedName, quantity: parseInt(quantity) },
            ]);
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
                            {selectedType || "Escolha o seu tipo de doação"}
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
                                                <Text
                                                    style={styles.modalItemText}
                                                >
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
                                                <Text
                                                    style={styles.modalItemText}
                                                >
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
                                        <Text>{`${item.name} - ${item.quantity}`}</Text>
                                        <TouchableOpacity
                                            style={styles.removeButton}
                                            onPress={() =>
                                                handleRemoveItem(index)
                                            }
                                        >
                                            <Text style={styles.buttonText}>
                                                Remover
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />
                        </>
                    )}

                    {selectedType === "Cesta Básica" && (
                        <>
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
                                        <Text>{`${item.name} - ${item.quantity}`}</Text>
                                        <TouchableOpacity
                                            style={styles.removeButton}
                                            onPress={() =>
                                                handleRemoveItem(index)
                                            }
                                        >
                                            <Text style={styles.buttonText}>
                                                Remover
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />
                        </>
                    )}
                </View>
                <ImageBackground
                source={{
                    uri: "https://st5.depositphotos.com/28752036/66300/v/600/depositphotos_663002578-stock-illustration-food-donation-concept-humanitarian-assistance.jpg",
                }}
                style={styles.backgroundImage}
            >
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical:90,
        width:'100%',
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal:15,

        },
        backgroundImage: {

            resizeMode: "cover",
            justifyContent: "center",
            backgroundColor: 'rgba(250, 249, 249, 0.907)'
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
        backgroundColor: "#2196F3",
        borderRadius: 5,
        marginTop: 20,
    },
    closeButtonText: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
});

export default DonorAliments;

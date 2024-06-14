import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
} from "react-native";
import Avatar from "./Perfil/Avatar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GetUserService from "@/services/GetUserById";
import User from "@/models/User";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



const ProfileScreen: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [userDataLoaded, setUserDataLoaded] = useState<boolean>(false);
    const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
    const navigation = useNavigation();

    const handleLogout = async () => {
        navigation.navigate("SignIn");
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = await AsyncStorage.getItem("userId");

                if (!userId) {
                    setError("ID do usuário não encontrado no AsyncStorage.");
                    setLoading(false);
                    return;
                }

                const userData = await GetUserService.getUserById(userId);


                if (typeof userData === "string") {
                    setError(userData); // Define o erro com a mensagem retornada
                    setLoading(false);
                    return;
                }

                setLoggedInUser(userData);
                setUserDataLoaded(true); // Define que os dados do usuário foram carregados com sucesso
                setLoading(false);
            } catch (error) {
                setError("Erro ao recuperar dados do usuário.");
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === "ios" ? 249 : 0}
        >
            <View>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.profileHeader}>
                        <Avatar />
                        {loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : error ? (
                        <View>
                            <Text>{error}</Text>
                        </View>
                    ) : userDataLoaded ? ( // Verifica se os dados do usuário foram carregados com sucesso
                        <View style={styles.profileInfo}>
                            {loggedInUser && loggedInUser && (
                                <View style={styles.profileInfo}>
                                    {loggedInUser.body.name && (
                                        <Text
                                            style={[
                                                styles.profileInfoText,
                                                { marginHorizontal: 10 },
                                            ]}
                                        >
                                            {loggedInUser.body.name}{" "}
                                            {loggedInUser.body.surname}
                                        </Text>
                                    )}

                                    {loggedInUser.body.phone && (
                                        <Text style={styles.profileInfoText}>
                                            {loggedInUser.body.phone}
                                        </Text>
                                    )}
                                </View>
                            )}

                            {!loggedInUser ||
                                (!loggedInUser.body.name &&
                                    !loggedInUser.body.phone &&
                                    !loggedInUser.body.surname && (
                                        <Text>
                                            Dados do usuário não encontrados
                                        </Text>
                                    ))}
                        </View>
                    ) : (
                        <Text>Carregando dados do usuário...</Text>
                    )}
                    </View>

                    <View style={styles.profileMenu}>
                        <TouchableOpacity style={styles.menuItem}>
                            <AntDesign name="idcard" size={24} color="black" />
                            <Text style={styles.menuItemText}>
                                Personal Information
                            </Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <MaterialIcons
                                name="security"
                                size={24}
                                color="black"
                            />
                            <Text style={styles.menuItemText}>
                                Privacy & Security
                            </Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <MaterialIcons
                                name="support-agent"
                                size={24}
                                color="black"
                            />
                            <Text style={styles.menuItemText}>Support</Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={handleLogout}
                    >
                        <MaterialCommunityIcons
                            name="logout"
                            size={24}
                            color="white"
                        />
                        <Text style={styles.logoutButtonText}>Logout</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    profileHeader: {
        width: "100%",
        height: 269,
        backgroundColor: "#E0F2DF",
        borderRadius: 0,
        alignItems: "center",
    },
    profileInfo: {
        flex:1,
        textAlign: "center",
        alignSelf:"center",
       marginTop:10
    },
    profileInfoText: {
        fontSize: 16,
        textAlign: "center",
        marginTop:5

    },
    profileMenu: {
        marginTop: 20,
        width: "85%",
        gap: 20,
    },
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
    },
    menuItemText: {
        fontSize: 16,
        color: "#337ab7",
    },
    logoutButton: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#325426",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
    },
    logoutButtonText: {
        marginLeft: 10,
        fontSize: 16,
        color: "#fff",
    },
});

export default ProfileScreen;

import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";
import User from "@/models/User";
import GetAllUserService from "@/services/GetAllUserService";

const UserCard = ({ user }: { user: User }) => {
    // Função para traduzir os papéis
    const translateRole = (role) => {
        switch (role) {
            case "Volunteer":
                return "Voluntário";
            case "Donation":
                return "Doação";
            default:
                return role;
        }
    };

    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.userImageContainer}>
                <Image
                    source={{
                        uri: "https://raw.githubusercontent.com/paulomorais1/Teste1/Teste/assets/logo.png",
                    }}
                    style={styles.userImage}
                />
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>
                    {user.name} {user.surname}
                </Text>
                <Text style={styles.userRole}>{translateRole(user.role)}</Text>
                <Text style={styles.userContact}>Email: {user.email}</Text>
                <Text style={styles.userContact}>Telefone: {user.phone}</Text>
            </View>
        </TouchableOpacity>
    );
};

const UsersScreen = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await GetAllUserService.getAllUsers();
                if (typeof fetchedUsers === "string") {
                    console.error(fetchedUsers);
                } else {
                    setUsers(fetchedUsers);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Filtrar usuários para obter apenas os que têm papel 'Volunteer' ou 'Donation'
    const filteredUsers = users.filter(
        (user) => user.role === "Volunteer" || user.role === "Donation"
    );

    return (
        <View style={styles.container}>
            {isLoading ? (
                <Text>Carregando...</Text>
            ) : (
                <FlatList
                    data={filteredUsers}
                    keyExtractor={(user) => user.id.toString()}
                    renderItem={({ item }) => <UserCard user={item} />}
                    style={styles.list}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    list: {
        flex: 1,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    userImageContainer: {
        width: 80,
        height: 80,
        borderRadius: 25,
        overflow: "hidden",
        marginRight: 15,
    },
    userImage: {
        width: "100%",
        height: "100%",
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    userRole: {
        fontSize: 14,
        marginBottom: 5,
    },
    userContact: {
        fontSize: 12,
        color: "#777",
    },
});

export default UsersScreen;

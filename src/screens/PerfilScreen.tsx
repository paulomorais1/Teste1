import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Avatar from "./Perfil/Avatar";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Avatar />
            </View>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Personal Information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Cards management</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Privacy & Security</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Referral code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f9f9f9",
    },
    profileHeader: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 390,
        height: 269,
        backgroundColor: "#E0F2DF", // primary-100
        borderRadius: 0,
        alignItems: "center",
        marginBottom: 20,
    },

    profileName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    profilePhone: {
        fontSize: 18,
        color: "#666",
        marginTop: 10,
    },
    menuItem: {
        marginTop: 20,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    menuItemText: {
        fontSize: 16,
        color: "#337ab7",
    },
    logoutButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: "#ff0000",
        borderRadius: 5,
    },
    logoutButtonText: {
        fontSize: 16,
        color: "#fff",
    },
});

export default ProfileScreen;

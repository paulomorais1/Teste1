import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import Avatar from "./Perfil/Avatar";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
    const navigation = useNavigation();
    const handleLogout = async () => {
        navigation.navigate("SignIn");
     };
  
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === "ios" ? 249 : 0} // Ajuste conforme a altura do cabeçalho
        >
            <View >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.profileHeader}>
                        <Avatar />
                    </View>
                    <View style={styles.profileMenu}>
                        <TouchableOpacity style={styles.menuItem}>
                            <AntDesign name="idcard" size={24} color="black" />
                            <Text style={styles.menuItemText}>Personal Information</Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <MaterialIcons name="security" size={24} color="black" />
                            <Text style={styles.menuItemText}>Privacy & Security</Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <MaterialIcons name="support-agent" size={24} color="black" />
                            <Text style={styles.menuItemText}>Support</Text>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.logoutButton}
                       onPress={handleLogout}>
                        <MaterialCommunityIcons name="logout" size={24} color="white" />
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
        width: '100%',
        height: 249,
        backgroundColor: "#E0F2DF", // primary-100
        borderRadius: 0,
        alignItems: "center",
    },
    profileMenu: {
        marginTop: 20,
        width: '85%',
        gap: 20,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        flexDirection: 'row',
        alignItems: 'center',
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

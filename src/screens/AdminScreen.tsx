import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BeneficiaryManagement from "../components/Admin/BeneficiaryManagement";
import DonorManagement from "../components/Admin/DonorManagement";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AdminPainel from "../components/Admin/AdminPainel";
import PerfilScreen from "./PerfilScreen";

const Tab = createBottomTabNavigator();

const AdminScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "#325426",
            }}
        >
            <Tab.Screen
                name="Painel Management"
                component={AdminPainel}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Beneficiary Management"
                component={BeneficiaryManagement}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="group-add"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Donor Management"
                component={DonorManagement}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="donate" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil Screen"
                component={PerfilScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="settings"
                            size={size}
                            color={color}
                        />
                    ),
                    headerShown: false 
                }}
            />
        </Tab.Navigator>
    );
};

export default AdminScreen;

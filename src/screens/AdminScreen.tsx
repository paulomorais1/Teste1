import React from "react";

import PerfilScreen from "./PerfilScreen";
import ListUsers from "../components/Admin/ListUsers";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";



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
                name="Lista de usuários"
                component={ListUsers}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="group-add"
                            size={size}
                            color={color}
                        />
                    ),
                    headerShown: false

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

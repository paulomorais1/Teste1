import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PerfilScreen from "./PerfilScreen";
import ListUsers from "../components/Admin/ListUsers";




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

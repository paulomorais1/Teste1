import React from "react";

import PerfilScreen from "./PerfilScreen";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DonorAliments from "@/components/Donor/DonorAliments";



const Tab = createBottomTabNavigator();


const DonnorScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "#325426",
            }}
        >

            <Tab.Screen
                name="Doação de alimentos"
                component={DonorAliments}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="cart-heart"
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

export default DonnorScreen;

import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Welcome from "../screens/Welcome";
import RecoverScreen from "../screens/RecoverPassword";

import MainNavigator from "./MainNavigator";
import AdminScreen from "../screens/AdminScreen";
import VolunteerScreen from "../screens/VolunteerScreen";
import DonationScreen from "../screens/DonorScreen";
import PerfilScreen from "@/screens/PerfilScreen";

const Stack = createStackNavigator();

// Definindo o tipo das opções de navegação para evitar erros
type NavigationOptions = {
    headerShown: boolean;
    title?: string;
};

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="PerfilScreen">
            
            <Stack.Screen
                name="PerfilScreen"
                component={PerfilScreen}
                options={{ title: "Perfil Screen", headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ title: "Sign In", headerShown: false }}
            />
            <Stack.Screen
                name="AdminScreen"
                component={AdminScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VolunteerScreen"
                component={VolunteerScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DonationScreen"
                component={DonationScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ title: "Sign Up", headerShown: true }}
            />
            <Stack.Screen
                name="RecoverPassword"
                component={RecoverScreen}
                options={{ title: "Recover Password", headerShown: true }}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;

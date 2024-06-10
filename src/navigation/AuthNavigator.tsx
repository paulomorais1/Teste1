import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderBackButton from "@/components/button/HeaderBackButton";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Welcome from "../screens/Welcome";
import RecoverScreen from "../screens/RecoverPassword";
import AdminScreen from "../screens/AdminScreen";
import VolunteerScreen from "../screens/VolunteerScreen";
import DonationScreen from "../screens/DonorScreen";
import PerfilScreen from "@/screens/PerfilScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen
                name="PerfilScreen"
                component={PerfilScreen}
                options={{ title: "Perfil Screen", headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() => navigation.goBack()}
                            tintColor="#000" // Cor do ícone
                        />
                    ),
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() => navigation.goBack()}
                            tintColor="#000" // Cor do ícone
                        />
                    ),
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="AdminScreen"
                component={AdminScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() => navigation.goBack()}
                            tintColor="#000" // Cor do ícone
                        />
                    ),
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="VolunteerScreen"
                component={VolunteerScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() => navigation.goBack()}
                            tintColor="#000" // Cor do ícone
                        />
                    ),
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={({ navigation }) => ({
                    title: "",
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() => navigation.goBack()}
                            tintColor="#000" // Cor do ícone
                        />
                    ),
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="DonationScreen"
                component={DonationScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() => navigation.goBack()}
                            tintColor="#000" // Cor do ícone
                        />
                    ),
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() => navigation.navigate("SignIn")}
                            tintColor="#000" // Cor do ícone
                        />
                    ),
                    headerShown: true,
                })}
            />
            <Stack.Screen
                name="RecoverPassword"
                component={RecoverScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerLeft: () => (
                        <HeaderBackButton
                            onPress={() => navigation.navigate("SignIn")}
                            tintColor="#000" // Cor do ícone
                        />
                    ),
                    headerShown: true,
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;

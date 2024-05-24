// navigation/MainNavigator.tsx

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OverviewScreen from "../screens/OverviewScreen";
import AdminScreen from "../screens/AdminScreen";
import BeneficiariesScreen from "../screens/BeneficiariesScreen";

import NotificationsScreen from "../screens/NotificationsScreen";
import FeedbackScreen from "../screens/FeedbackScreen";

import VolunteerScreen from "../screens/VolunteerScreen";
import DonationScreen from "../screens/DonorScreen";
import PerfilScreen from "@/screens/PerfilScreen";

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Overview" component={OverviewScreen} />
            <Stack.Screen name="AdminDashboard" component={AdminScreen} />
            <Stack.Screen name="DonationScreen" component={DonationScreen} />
            <Stack.Screen name="VolunteerScreen" component={VolunteerScreen} />
            <Stack.Screen
                name="Beneficiaries"
                component={BeneficiariesScreen}
            />

            <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
            <Stack.Screen name="Feedback" component={FeedbackScreen} />
        </Stack.Navigator>
    );
};

export default MainNavigator;

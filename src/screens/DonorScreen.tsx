import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DonorAliments from "../components/Donor/DonorAliments";
import DonorGeneric from "@/components/Donor/DonorGeneric";

const Tab = createBottomTabNavigator();

const DonationScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="DonorAliments" component={DonorAliments} />
            <Tab.Screen name="DonorGeneric" component={DonorGeneric} />
        </Tab.Navigator>
    );
};

export default DonationScreen;

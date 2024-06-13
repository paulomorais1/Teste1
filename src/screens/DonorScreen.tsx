import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DonorAliments from "@/components/Donor/DonorAliments";
import DonationTypes from "@/components/Donor/DonationTypes";
import DonationStatistics from "@/components/Donor/DonationStatistics";



const Tab = createBottomTabNavigator();

const DonationScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="DonorAliments" component={DonorAliments} />
            <Tab.Screen name="DonationTypes" component={DonationTypes} />
            <Tab.Screen name="DonationStatistics" component={DonationStatistics} />
        </Tab.Navigator>
    );
};

export default DonationScreen;

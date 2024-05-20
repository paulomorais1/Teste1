import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DonorAliments from '../components/Donor/DonorAliments';

const Tab = createBottomTabNavigator();

const DonationScreen = () => {
   return (
      <Tab.Navigator>
         <Tab.Screen name="DonorAliments" component={DonorAliments} />
         <Tab.Screen name="DonorAliments" component={DonorG} />
      </Tab.Navigator>
   );
};

export default DonationScreen;

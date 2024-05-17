import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VolunteerDetails from '../components/Volunteer/VolunteerDetails';
import VolunteerList from '../components/Volunteer/VolunteerList';

const Tab = createBottomTabNavigator();

const VolunteerScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="VolunteerDetails" component={VolunteerDetails} />
      <Tab.Screen name="VolunteerList" component={VolunteerList} />
    </Tab.Navigator>
  );
};

export default VolunteerScreen;

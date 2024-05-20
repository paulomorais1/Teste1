import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VolunteerDetails from '../components/Volunteer/VolunteerDetails';
import VolunteerList from '../components/Volunteer/VolunteerList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const VolunteerScreen = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: '#325426',
   }}>
      <Tab.Screen name="VolunteerDetails" component={VolunteerDetails} 
        options={{
          tabBarIcon: ({color, size}) => (
             <MaterialIcons name="volunteer-activism" size={size} color={color} />
          ),
       }}/>
      
      <Tab.Screen name="VolunteerList" component={VolunteerList}  options={{
          tabBarIcon: ({color, size}) => (
             <MaterialIcons name="settings" size={size} color={color} />
          ),
       }} />
    </Tab.Navigator>
  );
};

export default VolunteerScreen;

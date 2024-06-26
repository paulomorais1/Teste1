import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BeneficiaryManagement from '../components/Admin/BeneficiaryManagement';
import DonorManagement from '../components/Admin/DonorManagement';
import ReportsScreen from './ReportsScreen';
import MaterialIcons from 'react-native-vector-icons/FontAwesome5'; // Importando FontAwesome5 para usar os ícones
import AdminPainel from '../components/Admin/AdminPainel';

const Tab = createBottomTabNavigator();

const AdminScreen = () => {
   return (
      <Tab.Navigator
         screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#325426',
         }}>
         <Tab.Screen
            name="Painel Management"
            component={AdminPainel}
            options={{
               tabBarIcon: ({color, size}) => (
                  <MaterialIcons name="home" size={size} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Beneficiary Management"
            component={BeneficiaryManagement}
            options={{
               tabBarIcon: ({color, size}) => (
                  <MaterialIcons name="users" size={size} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Donor Management"
            component={DonorManagement}
            options={{
               tabBarIcon: ({color, size}) => (
                  <MaterialIcons name="donate" size={size} color={color} />
               ),
            }}
         />
         <Tab.Screen
            name="Reports"
            component={ReportsScreen}
            options={{
               tabBarIcon: ({color, size}) => (
                  <MaterialIcons name="cog" size={size} color={color} />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

export default AdminScreen;

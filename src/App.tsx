import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import * as SplashScreen from 'expo-splash-screen';

import {
   useFonts,
   Poppins_300Light,
   Poppins_400Regular,
   Poppins_500Medium,
   Poppins_700Bold,
   Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import {DMSans_400Regular} from '@expo-google-fonts/dm-sans';
import {DMSerifDisplay_400Regular} from '@expo-google-fonts/dm-serif-display';

const App: React.FC = () => {
   const [fontsLoaded, error] = useFonts({
      Poppins_300Light,
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_700Bold,
      Poppins_800ExtraBold,
      DMSans_400Regular,
      DMSerifDisplay_400Regular,
   });

   SplashScreen.preventAutoHideAsync();
   console.log('Fonts Loaded:', fontsLoaded);
   console.log('Font Loading Error:', error);

   const [appIsReady, setAppIsReady] = useState(false);

   useEffect(() => {
      const prepareApp = async () => {
         try {
            console.log('Preventing auto hide of SplashScreen...');
            await SplashScreen.preventAutoHideAsync();

            // Simulate some loading time
            console.log('Simulating loading time...');
            await new Promise(resolve => setTimeout(resolve, 3000));

            // Pode adicionar outras tarefas de inicialização aqui
            console.log('Setting app as ready...');
            setAppIsReady(true);
         } catch (e) {
            console.warn('Error while preparing app:', e);
         } finally {
            console.log('Hiding SplashScreen...');
            await SplashScreen.hideAsync();
         }
      };

      prepareApp();
   }, []);

   if (!fontsLoaded || !appIsReady) {
      console.log('Rendering SplashScreen...');
      return null; // Você pode retornar um componente de carregamento aqui
   }

   console.log('Rendering AuthNavigator...');
   return (
      <NavigationContainer>
         <AuthNavigator />
      </NavigationContainer>
   );
};

export default App;

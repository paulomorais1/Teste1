import * as React from 'react';
import {useState} from 'react';
import {
   View,
   Text,
   TextInput,
   StyleSheet,
   Platform,
   KeyboardAvoidingView,
   ScrollView,
   Image,
   TouchableOpacity,
   Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import AuthenticationService from '../services/AuthenticationService'; // Importando o serviço de autenticação
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = () => {
   const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');
   const navigation = useNavigation();

   const handleSignIn = async () => {
      try {
         if (!phone || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
         }

         const user = await AuthenticationService.login(
            phone as unknown as number,
            password,
         );
         if (user) {
            // Salvar o tipo de usuário no AsyncStorage
            await AsyncStorage.setItem('userRole', user.role);

            // Redirecionar para a página apropriada com base no tipo de usuário
            switch (user.role) {
               case 'Admin':
                  navigation.navigate('AdminScreen');
                  break;

               case 'Volunteer':
                  navigation.navigate('VolunteerScreen');
                  break;
               case 'Donation':
                  navigation.navigate('DonationScreen');
                  break;
               default:
                  navigation.navigate('DefaultScreen'); // Redirecionar para uma página padrão caso o tipo de usuário não seja reconhecido
            }
         } else {
            Alert.alert(
               'Erro',
               'Credenciais incorretas. Por favor, tente novamente.',
            );
         }
      } catch (error) {
         console.error('Erro ao fazer login:', error);
         Alert.alert(
            'Erro',
            'Ocorreu um erro ao fazer login. Por favor, tente novamente.',
         );
      }
   };

   const navigateToRecoverPassword = () => {
      navigation.navigate('RecoverPassword');
   };

   const navigateToSignUp = () => {
      navigation.navigate('SignUp');
   };

   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.container}
         keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
         <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
               <View style={styles.containerLogo}>
                  <Image
                     source={require('../../assets/logo.png')}
                     style={[styles.logoImage]}
                     resizeMode="contain"
                  />
               </View>
               <View style={styles.containerSignin}>
                  <Text style={styles.title}>Faça o login!</Text>
                  <View style={styles.inputContainer}>
                     <TextInput
                        style={styles.input}
                        keyboardType="phone-pad"
                        placeholder="Phone"
                        value={phone}
                        onChangeText={setPhone}
                     />
                  </View>
                  <View style={styles.inputContainer}>
                     <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                     />
                  </View>
                  <Text
                     style={styles.recoverLink}
                     onPress={navigateToRecoverPassword}>
                     Esqueceu a senha
                  </Text>
                  <TouchableOpacity
                     onPress={handleSignIn}
                     style={[styles.optionButton, styles.signInButton]}>
                     <Text style={styles.buttonText}>Entrar</Text>
                  </TouchableOpacity>

                  <Text style={[styles.signupText]}>
                     Seja um doador{' '}
                     <Text style={styles.signupLink} onPress={navigateToSignUp}>
                        Cadastre-se
                     </Text>
                  </Text>
               </View>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

const styles = StyleSheet.create({
   scrollContainer: {
      flexGrow: 1,
   },
   container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10, // Adicionando padding em vez de gap
   },
   containerSignin: {
      flex: 1,
      padding: 30,
      marginBottom: 10, // Adicionando marginBottom em vez de gap
   },
   containerLogo: {
      alignItems: 'center',
      justifyContent: 'center',
   },
   logoImage: {
      width: '50%',
      height: 200,
   },
   title: {
      fontWeight: '500',
      alignSelf: 'flex-start',
      fontSize: 24,
      marginBottom: 10,
   },
   inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 20,
   },
   input: {
      flex: 1,
      height: 60,
      borderColor: 'gray',
      marginLeft: 10,
      fontSize: 20,
   },
   optionButton: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      height: 60,
      marginBottom: 10,
   },
   signInButton: {
      backgroundColor: '#325426',
   },
   buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
   },
   signupText: {
      marginTop: 20,
      alignSelf: 'center',
   },
   signupLink: {
      color: 'blue',
   },
   recoverLink: {
      marginBottom: 10,
      alignSelf: 'flex-end',
      color: 'blue',
   },
});

export default SignInScreen;

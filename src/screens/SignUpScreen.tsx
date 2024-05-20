import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import NomeInput from '@/components/Input/NomeInput';
import EmailInput from '@/components/Input/EmailInput';
import PhoneNumberInput from '@/components/Input/PhoneNumberInput';
import PasswordInput from '@/components/Input/PasswordInput';
import EnderecoInput from '@/components/Input/EndenrecoInput';

const SignUpScreen = () => {
   const [message, setMessage] = useState('');
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      address: '',
      phone: '',
   });

   const handleSignUp = async () => {
      // Implemente o restante da lógica de cadastro aqui
   };

   return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
  >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
         <Text style={styles.title}>Seja um Doador de Alimentos</Text>
         <NomeInput
            value={formData.name}
            onChangeText={name => setFormData({...formData, name})}
         />
         <EmailInput
            value={formData.email}
            onChangeText={email => setFormData({...formData, email})}
         />
         <PasswordInput
            value={formData.password}
            onChangeText={password => setFormData({...formData, password})}
         />
         <EnderecoInput
            value={formData.address}
            onChangeText={address => setFormData({...formData, address})}
         />
         <PhoneNumberInput
            value={formData.phone}
            onChangeText={phone => setFormData({...formData, phone})}
         />
         <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
               <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={styles.message}>{message}</Text>
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
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#FFF',
      gap:20
   },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
   },
   input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 20,
   },
   buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      width: '100%',
      marginBottom: 20,
   },
   button: {
      width: '100%',
      height: 50,
      backgroundColor: '#325426',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
   },
   buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
   },
   message: {
      marginTop: 20,
      fontSize: 16,
      color: 'green',
   },
});

export default SignUpScreen;

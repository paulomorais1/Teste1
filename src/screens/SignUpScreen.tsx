import React, {useState} from 'react';
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   StyleSheet,
} from 'react-native';

const SignUpScreen: React.FC = () => {
   const [message, setMessage] = useState('');
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      address: '',
      phone: '',
   });

   const handleSignUp = async () => {
      try {
         console.log('Enviando solicitação de cadastro...', formData);

         const requestOptions: RequestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
         };

         const response = await fetch(
            'http://localhost:8080/api/v1/auth/user/create',
            requestOptions,
         );

         if (!response.ok) {
            throw new Error(
               'Erro ao cadastrar usuário. Status: ' + response.status,
            );
         }

         const data = await response.json();
         console.log('Resposta da solicitação de cadastro:', data);

         setMessage(`Obrigado por se tornar um doador, ${formData.name}!`);
      } catch (error:any) {
         console.error('Erro ao cadastrar usuário:', error.message);
         setMessage(
            'Ocorreu um erro ao cadastrar usuário. Por favor, tente novamente.',
         );
      }
   };

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Seja um Doador de Alimentos</Text>
         <TextInput
            style={styles.input}
            placeholder="Nome"
            value={formData.name}
            onChangeText={name => setFormData({...formData, name})}
         />
         <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={email => setFormData({...formData, email})}
            keyboardType="email-address"
         />
         <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={password => setFormData({...formData, password})}
         />
         <TextInput
            style={styles.input}
            placeholder="Endereço"
            value={formData.address}
            onChangeText={address => setFormData({...formData, address})}
         />
         <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={formData.phone}
            keyboardType="phone-pad"
            onChangeText={phone => setFormData({...formData, phone})}
         />
         <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
               <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={styles.message}>{message}</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#FFF',
      paddingTop: 20,
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

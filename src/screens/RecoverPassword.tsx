import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const RecoverScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRecoverPassword = () => {
    // Implementar lógica para enviar solicitação de recuperação de senha
    // Aqui você pode chamar uma função que envia um email de recuperação para o email fornecido
    setMessage(`Um email de recuperação foi enviado para ${email}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.tituloForgot}>Redefinir sua senha</Text>
        <Text style={styles.textForgot}>
          Digite seu e-mail, enviaremos um código de verificação para o seu
          e-mail
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRecoverPassword}>
          <Text style={styles.buttonText}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinha os elementos no início verticalmente
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  containerTitle: {
    height: '80%',
    width: '100%',
    gap: 10,
   
  },
  tituloForgot: {
    paddingTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    color: '#000',
  },
  textForgot: {
    fontSize: 16,
    paddingTop: 10,
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Alinha o botão no final da tela
    width: '100%',
    marginBottom: 20, // Adiciona margem inferior ao container do botão
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

export default RecoverScreen;

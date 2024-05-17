import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const AdminPainel: React.FC = () => {
  // Funções para lidar com as ações de navegação para outras telas
  const handleBeneficiaryManagement = () => {
    // Implementar navegação para a tela de gerenciamento de beneficiários
  };

  const handleDonorManagement = () => {
    // Implementar navegação para a tela de gerenciamento de doadores
  };

  const handleReportGeneration = () => {
    // Implementar navegação para a tela de geração de relatórios
  };

  const handleNotificationSystem = () => {
    // Implementar navegação para a tela do sistema de notificações
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Administração</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleBeneficiaryManagement}>
          <Text style={styles.buttonText}>Gerenciamento de Beneficiários</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDonorManagement}>
          <Text style={styles.buttonText}>Gerenciamento de Doadores</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Relatórios</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleReportGeneration}>
          <Text style={styles.buttonText}>Geração de Relatórios</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notificações</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNotificationSystem}>
          <Text style={styles.buttonText}>Sistema de Notificações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#325426',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AdminPainel;

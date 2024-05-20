"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var AdminPainel = function () {
    // Funções para lidar com as ações de navegação para outras telas
    var handleBeneficiaryManagement = function () {
        // Implementar navegação para a tela de gerenciamento de beneficiários
    };
    var handleDonorManagement = function () {
        // Implementar navegação para a tela de gerenciamento de doadores
    };
    var handleReportGeneration = function () {
        // Implementar navegação para a tela de geração de relatórios
    };
    var handleNotificationSystem = function () {
        // Implementar navegação para a tela do sistema de notificações
    };
    return (<react_native_1.View style={styles.container}>
      <react_native_1.View style={styles.section}>
        <react_native_1.Text style={styles.sectionTitle}>Administração</react_native_1.Text>

        <react_native_1.TouchableOpacity style={styles.button} onPress={handleBeneficiaryManagement}>
          <react_native_1.Text style={styles.buttonText}>Gerenciamento de Beneficiários</react_native_1.Text>
        </react_native_1.TouchableOpacity>
        <react_native_1.TouchableOpacity style={styles.button} onPress={handleDonorManagement}>
          <react_native_1.Text style={styles.buttonText}>Gerenciamento de Doadores</react_native_1.Text>
        </react_native_1.TouchableOpacity>
      </react_native_1.View>
      <react_native_1.View style={styles.section}>
        <react_native_1.Text style={styles.sectionTitle}>Relatórios</react_native_1.Text>
        <react_native_1.TouchableOpacity style={styles.button} onPress={handleReportGeneration}>
          <react_native_1.Text style={styles.buttonText}>Geração de Relatórios</react_native_1.Text>
        </react_native_1.TouchableOpacity>
      </react_native_1.View>
      <react_native_1.View style={styles.section}>
        <react_native_1.Text style={styles.sectionTitle}>Notificações</react_native_1.Text>
        <react_native_1.TouchableOpacity style={styles.button} onPress={handleNotificationSystem}>
          <react_native_1.Text style={styles.buttonText}>Sistema de Notificações</react_native_1.Text>
        </react_native_1.TouchableOpacity>
      </react_native_1.View>
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
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
exports.default = AdminPainel;

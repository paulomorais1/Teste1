import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';



const EnderecoInput = ({ value, onChangeText }) => {
   const formatAddress = (text) => {
      return text.replace(/[^a-zA-Z0-9\s]/g, '');
   };

   return (
      <View style={styles.containerOwner}>
         <View style={[styles.row, { marginBottom:10}]}>
         <View style={[styles.column, styles.widerColumn]}>
               <TextInput
                  style={styles.input}
                  placeholder="Rua"
                  placeholderTextColor="#333333"
                  value={value.street}
                  onChangeText={text => onChangeText({...value, street: formatAddress(text)})}
               />
            </View>
            <View style={styles.column}>
               <TextInput
                  style={styles.input}
                  placeholder="Número"
                  placeholderTextColor="#333333"
                  value={value.number}
                  onChangeText={text => onChangeText({...value, number: formatAddress(text)})}
                  keyboardType='number-pad'
               />
            </View>
         </View>
         <View style={styles.row}>
            <View style={styles.column}>
               <TextInput
                  style={styles.input}
                  placeholder="Bairro"
                  placeholderTextColor="#333333"
                  value={value.district}
                  onChangeText={text => onChangeText({...value, district: formatAddress(text)})}

               />
            </View>
            <View style={styles.column}>
               <Feather name="map-pin" size={24} color="black" style={styles.icon} />
               <TextInput
                  style={styles.input}
                  placeholder="CEP"
                  placeholderTextColor="#333333"
                  value={value.cep}
                  onChangeText={text => onChangeText({...value, cep: formatAddress(text)})}
                  keyboardType='number-pad'
               />
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   containerOwner: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
   },
   row: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      gap:10
   },
   column: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 10,
      height: 60,
      borderWidth: 1,
      borderColor: "#ccc",
      paddingLeft: 20,
   },
   widerColumn: {
    flex: 2, // Largura da coluna alterada para 2 vezes a largura padrão
 },
   icon: {
      marginRight: 10,
   },
   input: {
      flex: 1,
      fontSize: 16,
      color: "#000",
   },
});

export default EnderecoInput;

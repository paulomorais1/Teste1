// EnderecoInput.js

import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const EnderecoInput = ({ value, onChangeText }) => {
   const formatAddress = (text) => {
      return text.replace(/[^a-zA-Z0-9\s]/g, '');
   };

   return (
      <View style={styles.containerOwner}>
         <Feather name="map-pin" size={24} color="black" />
         <TextInput
            style={styles.input}
            placeholder="Endereço"
            placeholderTextColor="#333333"
            value={value}
            onChangeText={text => onChangeText(formatAddress(text))}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   containerOwner: {
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",
     borderRadius: 10,
     height: 60,
     padding: 15,
     borderWidth: 1,
     borderColor: "#ccc",
     paddingLeft: 20,
   },
   input: {
     flex: 1,
     marginLeft: 10,
     fontSize: 16,
     color: "#000",
   },
 });
export default EnderecoInput;

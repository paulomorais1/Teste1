// NomeInput.js

import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const NomeInput = ({ value, onChangeText }) => {
   const formatName = (text) => {
      return text.replace(/\b\w/g, char => char.toUpperCase());
   };

   return (
      <View style={styles.containerOwner}>
         <Feather name="user" size={24} color="black" />
         <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#333333"
            value={value}
            onChangeText={text => onChangeText(formatName(text))}
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

export default NomeInput;

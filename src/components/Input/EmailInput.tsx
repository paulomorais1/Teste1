// EmailInput.js

import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const EmailInput = ({ value, onChangeText }) => {
   const formatEmail = (text) => {
      return text.trim();
   };

   return (
      <View style={styles.containerOwner}>
         <Feather name="mail" size={24} color="black" />
         <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#333333"
            value={value}
            onChangeText={text => onChangeText(formatEmail(text))}
            keyboardType="email-address"
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

export default EmailInput;

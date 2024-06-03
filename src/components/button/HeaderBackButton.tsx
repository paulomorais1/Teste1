import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HeaderBackButton = ({ onPress, tintColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialIcons name="arrow-back" size={30} color={tintColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default HeaderBackButton;

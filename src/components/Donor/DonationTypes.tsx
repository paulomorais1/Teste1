import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DonationTypes = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipos de doações</Text>
      {/* {data.map((item, index) => (
        <View style={styles.donationTypeItem} key={index}>
          <Text style={styles.donationTypeLabel}>{item.name}</Text>
        </View>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  donationTypeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  donationTypeLabel: {
    fontSize: 16,
  },
});

export default DonationTypes;

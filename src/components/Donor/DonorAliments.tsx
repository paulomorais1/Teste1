import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DonorAliments = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doações</Text>
      {/* {data.map((item, index) => (
        <View style={styles.donationItem} key={index}>
          <Text style={styles.donationLabel}>{item.name}</Text>
          <Text style={styles.donationValue}>{item.value}</Text>
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
  donationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  donationLabel: {
    fontSize: 16,
  },
  donationValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DonorAliments;

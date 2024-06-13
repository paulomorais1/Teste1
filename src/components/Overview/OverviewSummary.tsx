import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OverviewSummary: React.FC = ({ data }) => {
  if (!data || data.length === 0) {
    return <Text>No data available</Text>; // Retorna uma mensagem se data for indefinido ou vazio
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview</Text>
      {data.map((item, index) => (
        <View style={styles.item} key={index}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.value}>{item.value}</Text>
          <Text style={styles.percentage}>{item.percentage}</Text>
        </View>
      ))}
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  percentage: {
    fontSize: 16,
    color: '#999',
  },
});

export default OverviewSummary;

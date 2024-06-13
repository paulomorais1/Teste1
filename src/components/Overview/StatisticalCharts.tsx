// components/Overview/StatisticalCharts.tsx

import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const StatisticalCharts: React.FC = ({data}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Statistics</Text>
          {data.map((item, index) => (
            <View style={styles.statsItem} key={index}>
              <Text style={styles.statsLabel}>{item.year}</Text>
              <Text style={styles.statsValue}>{item.value}</Text>
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
      statsItem: {
        width: '33%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      statsLabel: {
        fontSize: 16,
      },
      statsValue: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    });
export default StatisticalCharts;

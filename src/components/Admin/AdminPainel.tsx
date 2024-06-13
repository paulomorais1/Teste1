import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OverviewSummary from '../Overview/OverviewSummary';

const AdminPainel: React.FC = ({data}) => {


  return (
    <View style={styles.container}>
            {/* <OverviewSummary data={data}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

});

export default AdminPainel;

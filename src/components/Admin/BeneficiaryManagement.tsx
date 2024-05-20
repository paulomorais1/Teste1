// components/Admin/BeneficiaryManagement.tsx

import React, {useState} from 'react';
import {View, Text} from 'react-native';

const BeneficiaryManagement: React.FC = () => {
  const [name] = useState('');
  return (
    <View>
      <Text>Beneficiary Management Component</Text>
      <Text>{name} </Text>
    </View>
  );
};

export default BeneficiaryManagement;

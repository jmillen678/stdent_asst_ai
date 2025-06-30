import React from 'react';
import { View, Text } from 'react-native';

export default function HealthStatus({status}) {
  return (
    <View>
      <Text>Status: {status}</Text>
    </View>
  );
}

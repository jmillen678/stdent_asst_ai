import React from 'react';
import { View } from 'react-native';
import HealthStatus from '../components/HealthStatus';

export default function HomeScreen() {
  return (
    <View>
      <HealthStatus status="ok" />
    </View>
  );
}

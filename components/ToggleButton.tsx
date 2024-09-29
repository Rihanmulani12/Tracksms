import React from 'react';
import { Button, View } from 'react-native';

interface ToggleButtonProps {
  title: string; 
  onPress: () => void; 
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ title, onPress }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};


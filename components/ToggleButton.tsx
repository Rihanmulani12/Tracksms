import React from 'react';
import { Button, View } from 'react-native';

interface ToggleButtonProps {
  title: string; // Title for the button
  onPress: () => void; // Function to call when button is pressed
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ title, onPress }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};


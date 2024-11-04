import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Bar } from 'react-native-progress';

// Define the props interface
interface ProgressBarProps {
  progress: number; // Progress should be a number between 0 and 1
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <Bar
        progress={progress} // Use the progress prop here
        width={350}
        color="rgb(185,134,220)"
        unfilledColor="rgba(90,69,104,0.41)"
        borderWidth={0}
        height={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 50,
    marginVertical: 10,
  },
  label: {
    color: 'white',
    marginBottom: 5,
  },
});

export default ProgressBar;
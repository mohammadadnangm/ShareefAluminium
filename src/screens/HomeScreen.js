import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>M Shareef Sons</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Handle button 1 press and navigate to the corresponding screen
          navigation.navigate('ColarBoxSizeScreen');
        }}
      >
        <Text style={styles.buttonText}>Colar Box Size</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Handle button 2 press and navigate to the corresponding screen
          navigation.navigate('GlassSizeColarBoxScreen');
        }}
      >
        <Text style={styles.buttonText}>Glass Size Colar Box</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Handle button 3 press and navigate to the corresponding screen
          navigation.navigate('EconomySizeScreen');
        }}
      >
        <Text style={styles.buttonText}>Economy Size</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Handle button 4 press and navigate to the corresponding screen
          navigation.navigate('GlassSizeEconomyScreen');
        }}
      >
        <Text style={styles.buttonText}>Glass Size Economy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

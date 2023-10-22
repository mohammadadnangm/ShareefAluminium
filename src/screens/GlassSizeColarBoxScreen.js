import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const GlassSizeColarBoxScreen = () => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [glassHeight, setGlassHeight] = useState('');
  const [glassWidth, setGlassWidth] = useState('');

  const calculateGlassSizes = () => {
    if (height && width) {
      const h = parseFloat(height);
      const w = parseFloat(width);

      setGlassHeight((h - 5.75).toString());
      setGlassWidth(((w - 6) / 2 + 0.5).toString());
    }
  };

  const clearFields = () => {
    setHeight('');
    setWidth('');
    setGlassHeight('');
    setGlassWidth('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Enter Height Of Colar Box Window:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Height"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <Text style={styles.label}>Enter Width Of Colar Box Window:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Width"
        keyboardType="numeric"
        value={width}
        onChangeText={(text) => setWidth(text)}
      />
      <Button title="Calculate Glass Sizes" onPress={calculateGlassSizes} />
      <Button title="Clear" onPress={clearFields} color="#FF5733" />
      <Text style={styles.resultLabel}>Colar Box Glass Height:</Text>
      <Text style={styles.result}>{glassHeight}</Text>
      <Text style={styles.resultLabel}>Colar Box Glass Width:</Text>
      <Text style={styles.result}>{glassWidth}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  result: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default GlassSizeColarBoxScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const EconomySizeScreen = () => {
  const [height, setHeight] = useState('');
  const [upsideWidth, setUpsideWidth] = useState('');
  const [downsideWidth, setDownsideWidth] = useState('');
  const [ef27Size, setEf27Size] = useState('');
  const [ef26Size, setEf26Size] = useState('');
  const [ef22Ef28Size, setEf22Ef28Size] = useState('');
  const [ef25Size, setEf25Size] = useState('');
  const [ef24Size, setEf24Size] = useState('');

  const calculateSizes = () => {
    if (height && upsideWidth && downsideWidth) {
      const h = parseFloat(height);
      const wUp = parseFloat(upsideWidth);
      const wDown = parseFloat(downsideWidth);

      setEf27Size((wUp - 0.375).toString());
      setEf26Size((wDown - 0.375).toString());
      setEf22Ef28Size((h - 0.875).toString());
      setEf25Size(((wUp - 3.25) / 2).toString());
      setEf24Size(((wDown - 3.25) / 2).toString());
    }
  };

  const clearFields = () => {
    setHeight('');
    setUpsideWidth('');
    setDownsideWidth('');
    setEf27Size('');
    setEf26Size('');
    setEf22Ef28Size('');
    setEf25Size('');
    setEf24Size('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Welcome To the M.Shareef Sons Aluminium & Glass Works(KARACHI)</Text>
      <Text style={styles.label}>Enter The Height Of Your Window:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Height"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <Text style={styles.label}>Enter The Width Of Your Window (Up side):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Width (Up side)"
        keyboardType="numeric"
        value={upsideWidth}
        onChangeText={(text) => setUpsideWidth(text)}
      />
      <Text style={styles.label}>Enter The Width Of Your Window (Down side):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Width (Down side)"
        keyboardType="numeric"
        value={downsideWidth}
        onChangeText={(text) => setDownsideWidth(text)}
      />
      <Button title="Calculate Sizes" onPress={calculateSizes} />
      <Button title="Clear" onPress={clearFields} color="#FF5733" />
      <Text style={styles.resultLabel}>Size of EF27:</Text>
      <Text style={styles.result}>{ef27Size}</Text>
      <Text style={styles.resultLabel}>Size of EF26:</Text>
      <Text style={styles.result}>{ef26Size}</Text>
      <Text style={styles.resultLabel}>Size of EF22,EF28:</Text>
      <Text style={styles.result}>{ef22Ef28Size}</Text>
      <Text style={styles.resultLabel}>Size of EF25:</Text>
      <Text style={styles.result}>{ef25Size}</Text>
      <Text style={styles.resultLabel}>Size of EF24:</Text>
      <Text style={styles.result}>{ef24Size}</Text>
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

export default EconomySizeScreen;

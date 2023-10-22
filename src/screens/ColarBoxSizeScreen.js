import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const ColorBoxSizeScreen = () => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [boxHeight, setBoxHeight] = useState('');
  const [boxWidth, setBoxWidth] = useState('');
  const [m23Size, setM23Size] = useState('');
  const [m24Size, setM24Size] = useState('');
  const [d29Height, setD29Height] = useState('');
  const [d29Width, setD29Width] = useState('');

  const calculateSizes = () => {
    if (height && width) {
      const h = parseFloat(height);
      const w = parseFloat(width);

      setBoxHeight((h + 3).toString());
      setBoxWidth((w + 3).toString());
      setM23Size((h - 1.625).toString());
      setM24Size(((w - 6) / 2).toString());
      setD29Height((h - 1.625).toString());
      setD29Width(((w - 6) / 2 + 3).toString());
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        Welcome To The M.Shareef Sons Aluminium & Glass works(Karachi)
      </Text>
      <Text style={styles.label}>Enter the Height Of Your Window:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Height"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <Text style={styles.label}>Enter the Width Of Your Window:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Width"
        keyboardType="numeric"
        value={width}
        onChangeText={(text) => setWidth(text)}
      />
      <Button title="Calculate Sizes" onPress={calculateSizes} />
      <Text style={styles.resultLabel}>Increase Box's Height:</Text>
      <Text style={styles.result}>{boxHeight}</Text>
      <Text style={styles.resultLabel}>Increase Box's Width:</Text>
      <Text style={styles.result}>{boxWidth}</Text>
      <Text style={styles.resultLabel}>Size of M 23 & M 28:</Text>
      <Text style={styles.result}>{m23Size}</Text>
      <Text style={styles.resultLabel}>Size of M 24:</Text>
      <Text style={styles.result}>{m24Size}</Text>
      <Text style={styles.resultLabel}>Height of D29:</Text>
      <Text style={styles.result}>{d29Height}</Text>
      <Text style={styles.resultLabel}>Width of D29:</Text>
      <Text style={styles.result}>{d29Width}</Text>
      <Button title="Clear" onPress={() => {
        setHeight('');
        setWidth('');
        setBoxHeight('');
        setBoxWidth('');
        setM23Size('');
        setM24Size('');
        setD29Height('');
        setD29Width('');
      }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
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

export default ColorBoxSizeScreen;

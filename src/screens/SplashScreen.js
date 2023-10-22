// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenComponent = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 4000); // 3 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      {/* <Image
        source={require('./path_to_your_background_image.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      /> */}
      {/* Color Overlay */}
      <View style={styles.overlay} />

      {/* Centered Content */}
      <View style={styles.centeredContent}>
        <Text style={styles.logoText}>M. Shareef Sons</Text>
        <Text style={styles.subtitleText}>Aluminium and Glass Works</Text>
        <Text style={styles.poweredText}>Powered By crudics.com</Text>
        <Text style={styles.byText}>By Zoobi Bhatti</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Customize text color
  },
  subtitleText: {
    fontSize: 18,
    color: 'white', // Customize text color
    marginTop: 10,
  },
  poweredText: {
    fontSize: 14,
    color: 'white', // Customize text color
    position: 'absolute',
    bottom: 20,
    textAlign: 'left',
  },
  byText: {
    fontSize: 14,
    color: 'white', // Customize text color
    position: 'absolute',
    bottom: 20,
    textAlign: 'right',
  },
});

export default SplashScreenComponent;

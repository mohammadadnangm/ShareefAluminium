import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen'; 
import ColarBoxSizeScreen from './screens/ColarBoxSizeScreen';
import GlassSizeColarBoxScreen from './screens/GlassSizeColarBoxScreen';
import EconomySizeScreen from './screens/EconomySizeScreen';
import GlassSizeEconomyScreen from './screens/GlassSizeEconomyScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ColarBoxSizeScreen" component={ColarBoxSizeScreen} />
      <Stack.Screen name="GlassSizeColarBoxScreen" component={GlassSizeColarBoxScreen} />
      <Stack.Screen name="EconomySizeScreen" component={EconomySizeScreen} />
      <Stack.Screen name="GlassSizeEconomyScreen" component={GlassSizeEconomyScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LaunchScreen from '../screens/launch';
import HomeNavigator from './HomeNavigator';
import { HOMENAVIGATOR, LAUNCH } from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={LAUNCH}
    >
      <Stack.Screen name={LAUNCH} component={LaunchScreen} />
      <Stack.Screen name={HOMENAVIGATOR} component={HomeNavigator} />
    </Stack.Navigator>
  );
}

export default AuthNavigator

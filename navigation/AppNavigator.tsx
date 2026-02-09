import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { appRoutes, authRoutes } from '../routes';
import Layout from '../screens/layout';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Layout: undefined;
  GetStarted: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      {/* Auth Routes (Login, Register) */}
      {authRoutes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
        />
      ))}

      {/* Layout Route with nested tab navigation */}
      <Stack.Screen
        name="Layout"
        component={Layout}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


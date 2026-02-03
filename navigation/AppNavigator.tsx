import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { appRoutes, authRoutes } from '../routes';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  GetStarted: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted"
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

      {/* App Routes (Dashboard) */}
      {appRoutes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
}

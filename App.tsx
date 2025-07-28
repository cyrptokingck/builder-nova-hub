import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

// Import screens
import OnboardingWalkthrough1 from './screens/OnboardingWalkthrough1';
import OnboardingWalkthrough2 from './screens/OnboardingWalkthrough2';
import OnboardingWalkthrough3 from './screens/OnboardingWalkthrough3';
import OnboardingWalkthrough4 from './screens/OnboardingWalkthrough4';
import OnboardingWalkthrough5 from './screens/OnboardingWalkthrough5';
import LandingScreen from './screens/LandingScreen';
import CrearCuentaScreen from './screens/CrearCuentaScreen';
import IniciarSesionScreen from './screens/IniciarSesionScreen';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="#CAF206" />
      <Stack.Navigator
        initialRouteName="OnboardingWalkthrough1"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        {/* Onboarding Flow */}
        <Stack.Screen 
          name="OnboardingWalkthrough1" 
          component={OnboardingWalkthrough1} 
        />
        <Stack.Screen 
          name="OnboardingWalkthrough2" 
          component={OnboardingWalkthrough2} 
        />
        <Stack.Screen 
          name="OnboardingWalkthrough3" 
          component={OnboardingWalkthrough3} 
        />
        <Stack.Screen 
          name="OnboardingWalkthrough4" 
          component={OnboardingWalkthrough4} 
        />
        <Stack.Screen 
          name="OnboardingWalkthrough5" 
          component={OnboardingWalkthrough5} 
        />
        
        {/* Main App Flow */}
        <Stack.Screen 
          name="Landing" 
          component={LandingScreen} 
        />
        <Stack.Screen 
          name="CrearCuenta" 
          component={CrearCuentaScreen} 
        />
        <Stack.Screen 
          name="IniciarSesion" 
          component={IniciarSesionScreen} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

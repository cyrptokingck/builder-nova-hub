import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

// Import all screens
import OnboardingWalkthrough1 from './screens/OnboardingWalkthrough1';
import OnboardingWalkthrough2 from './screens/OnboardingWalkthrough2';
import OnboardingWalkthrough3 from './screens/OnboardingWalkthrough3';
import OnboardingWalkthrough4 from './screens/OnboardingWalkthrough4';
import OnboardingWalkthrough5 from './screens/OnboardingWalkthrough5';
import LandingScreen from './screens/LandingScreen';
import CrearCuentaScreen from './screens/CrearCuentaScreen';
import IniciarSesionScreen from './screens/IniciarSesionScreen';
import ComencemosScreen from './screens/ComencemosScreen';
import DashboardScreen from './screens/DashboardScreen';
import ComprarTicketsScreen from './screens/ComprarTicketsScreen';
import MiSaldoScreen from './screens/MiSaldoScreen';
import MiPerfilScreen from './screens/MiPerfilScreen';
import NotificacionesScreen from './screens/NotificacionesScreen';

// Define navigation types
export type RootStackParamList = {
  OnboardingWalkthrough1: undefined;
  OnboardingWalkthrough2: undefined;
  OnboardingWalkthrough3: undefined;
  OnboardingWalkthrough4: undefined;
  OnboardingWalkthrough5: undefined;
  Landing: undefined;
  CrearCuenta: undefined;
  IniciarSesion: undefined;
  Comencemos: undefined;
  Dashboard: undefined;
  ComprarTickets: undefined;
  MiSaldo: undefined;
  MiPerfil: undefined;
  Notificaciones: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="#CAF206" />
      <Stack.Navigator
        initialRouteName="OnboardingWalkthrough1"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
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
          name="Comencemos" 
          component={ComencemosScreen} 
        />
        
        {/* Dashboard and App Features */}
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
        />
        <Stack.Screen 
          name="ComprarTickets" 
          component={ComprarTicketsScreen} 
        />
        <Stack.Screen 
          name="MiSaldo" 
          component={MiSaldoScreen} 
        />
        <Stack.Screen 
          name="MiPerfil" 
          component={MiPerfilScreen} 
        />
        <Stack.Screen 
          name="Notificaciones" 
          component={NotificacionesScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

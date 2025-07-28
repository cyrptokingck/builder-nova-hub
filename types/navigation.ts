import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

// Root Stack Parameter List
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
  ComprarTickets: {
    sorteoId?: string;
    precioAcumulado?: number;
  };
  MiSaldo: undefined;
  MiPerfil: undefined;
  Notificaciones: undefined;
  RetirarSaldo: undefined;
  SeleccionarNumeros: {
    ticketCount: number;
  };
  ConfirmarCompra: {
    selectedNumbers: number[][];
    ticketCount: number;
    totalAmount: number;
  };
};

// Navigation Props for each screen
export type OnboardingWalkthrough1NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OnboardingWalkthrough1"
>;

export type OnboardingWalkthrough2NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OnboardingWalkthrough2"
>;

export type OnboardingWalkthrough3NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OnboardingWalkthrough3"
>;

export type OnboardingWalkthrough4NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OnboardingWalkthrough4"
>;

export type OnboardingWalkthrough5NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OnboardingWalkthrough5"
>;

export type LandingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Landing"
>;

export type CrearCuentaScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "CrearCuenta"
>;

export type IniciarSesionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "IniciarSesion"
>;

export type DashboardScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Dashboard"
>;

export type ComprarTicketsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ComprarTickets"
>;

export type MiSaldoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MiSaldo"
>;

export type MiPerfilScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MiPerfil"
>;

// Route Props
export type ComprarTicketsRouteProp = RouteProp<
  RootStackParamList,
  "ComprarTickets"
>;
export type SeleccionarNumerosRouteProp = RouteProp<
  RootStackParamList,
  "SeleccionarNumeros"
>;
export type ConfirmarCompraRouteProp = RouteProp<
  RootStackParamList,
  "ConfirmarCompra"
>;

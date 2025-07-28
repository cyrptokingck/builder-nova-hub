import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IniciarSesionScreenNavigationProp } from '../types/navigation';
import { Colors, Theme } from '../constants/Colors';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
}

const IniciarSesionScreen: React.FC = () => {
  const navigation = useNavigation<IniciarSesionScreenNavigationProp>();
  
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Contraseña muy corta';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (): Promise<void> => {
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        Alert.alert(
          'Bienvenido',
          'Has iniciado sesión correctamente',
          [
            {
              text: 'Continuar',
              onPress: () => navigation.navigate('Dashboard'),
            },
          ]
        );
      }, 1500);
    }
  };

  const handleForgotPassword = (): void => {
    Alert.alert(
      'Restablecer contraseña',
      'Se enviará un enlace de restablecimiento a tu email',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Enviar', onPress: () => console.log('Reset password') },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>12:00</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBars}>
            <View style={styles.signalBar} />
            <View style={styles.signalBar} />
            <View style={styles.signalBar} />
            <View style={[styles.signalBar, { opacity: 0.4 }]} />
          </View>
          <View style={styles.wifiIcon} />
          <View style={styles.battery}>
            <View style={styles.batteryLevel} />
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Iniciar sesión</Text>
          <Text style={styles.subtitle}>
            Accede a tu cuenta para continuar jugando y ganando con LottoCoin.
          </Text>
        </View>

        <View style={styles.form}>
          {/* Email Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          </View>

          {/* Password Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.passwordInput, errors.password && styles.inputError]}
                placeholder="Contraseña"
                value={formData.password}
                onChangeText={(text) => setFormData({ ...formData, password: text })}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLoading}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff size={20} color={Colors.textSecondary} />
                ) : (
                  <Eye size={20} color={Colors.textSecondary} />
                )}
              </TouchableOpacity>
            </View>
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          </View>

          {/* Forgot Password */}
          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity onPress={handleForgotPassword} disabled={isLoading}>
              <Text style={[styles.forgotPasswordText, isLoading && styles.disabledText]}>
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity 
          style={[styles.loginButton, isLoading && styles.disabledButton]} 
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text style={[styles.loginButtonText, isLoading && styles.disabledButtonText]}>
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </Text>
        </TouchableOpacity>
        
        <View style={styles.signupContainer}>
          <Text style={styles.signupPrompt}>¿No tienes una cuenta? </Text>
          <TouchableOpacity 
            onPress={() => navigation.navigate('CrearCuenta')}
            disabled={isLoading}
          >
            <Text style={[styles.signupLink, isLoading && styles.disabledText]}>
              Crear cuenta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.md,
  },
  timeText: {
    color: Colors.textPrimary,
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.semibold,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.xs,
  },
  signalBars: {
    flexDirection: 'row',
    gap: 2,
  },
  signalBar: {
    width: 4,
    height: 12,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
  },
  wifiIcon: {
    width: 16,
    height: 12,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
    marginLeft: 4,
  },
  battery: {
    width: 24,
    height: 12,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryLevel: {
    width: 16,
    height: 8,
    backgroundColor: Colors.white,
    borderRadius: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.lg,
    paddingVertical: Theme.spacing.md,
  },
  backButton: {
    padding: Theme.spacing.sm,
  },
  content: {
    flex: 1,
    paddingHorizontal: Theme.spacing.lg,
  },
  titleContainer: {
    marginBottom: Theme.spacing.xxl,
  },
  title: {
    fontSize: Theme.fontSize.xxl,
    fontWeight: Theme.fontWeight.bold,
    color: Colors.textPrimary,
    marginBottom: Theme.spacing.sm,
  },
  subtitle: {
    fontSize: Theme.fontSize.md,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  form: {
    gap: Theme.spacing.lg,
  },
  fieldContainer: {
    gap: Theme.spacing.xs,
  },
  label: {
    fontSize: Theme.fontSize.sm,
    fontWeight: Theme.fontWeight.medium,
    color: Colors.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gray300,
    borderRadius: Theme.borderRadius.lg,
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: Theme.spacing.sm,
    fontSize: Theme.fontSize.md,
    color: Colors.textPrimary,
  },
  inputError: {
    borderColor: Colors.error,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray300,
    borderRadius: Theme.borderRadius.lg,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: Theme.spacing.sm,
    fontSize: Theme.fontSize.md,
    color: Colors.textPrimary,
  },
  eyeButton: {
    padding: Theme.spacing.sm,
  },
  errorText: {
    fontSize: Theme.fontSize.xs,
    color: Colors.error,
    marginTop: 2,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    paddingTop: Theme.spacing.md,
  },
  forgotPasswordText: {
    color: Colors.textPrimary,
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.medium,
    textDecorationLine: 'underline',
  },
  disabledText: {
    opacity: 0.5,
  },
  bottomSection: {
    paddingHorizontal: Theme.spacing.lg,
    paddingBottom: Theme.spacing.lg,
    gap: Theme.spacing.md,
  },
  loginButton: {
    backgroundColor: Colors.primary,
    borderRadius: Theme.borderRadius.full,
    paddingVertical: Theme.spacing.lg,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.6,
  },
  loginButtonText: {
    color: Colors.textPrimary,
    fontSize: Theme.fontSize.lg,
    fontWeight: Theme.fontWeight.semibold,
  },
  disabledButtonText: {
    opacity: 0.8,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupPrompt: {
    color: Colors.textSecondary,
    fontSize: Theme.fontSize.md,
  },
  signupLink: {
    color: Colors.textPrimary,
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.semibold,
    textDecorationLine: 'underline',
  },
});

export default IniciarSesionScreen;

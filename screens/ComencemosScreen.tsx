import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RNApp";
import { Colors } from "../constants/Colors";

type ComencemosScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Comencemos"
>;

export default function ComencemosScreen(): JSX.Element {
  const navigation = useNavigation<ComencemosScreenNavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const codeInputRefs = useRef<Array<TextInput | null>>([]);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleSendCode = async () => {
    if (phoneNumber.length < 10) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsCodeSent(true);
      setIsLoading(false);
      
      Animated.sequence([
        Animated.timing(fadeAnim, { duration: 300, toValue: 0, useNativeDriver: true }),
        Animated.timing(fadeAnim, { duration: 300, toValue: 1, useNativeDriver: true }),
      ]).start();
    }, 2000);
  };

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...verificationCode];
    newCode[index] = text;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (text && index < 5) {
      codeInputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerifyCode = () => {
    const code = verificationCode.join("");
    if (code.length === 6) {
      navigation.navigate("Dashboard");
    }
  };

  const isPhoneValid = phoneNumber.length >= 10;
  const isCodeComplete = verificationCode.every(digit => digit !== "");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
          </View>

          <Animated.View style={[styles.formContainer, { opacity: fadeAnim }]}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>¡Comencemos!</Text>
              <Text style={styles.subtitle}>
                {!isCodeSent 
                  ? "Ingresa tu número de teléfono para verificar tu identidad" 
                  : "Ingresa el código de 6 dígitos que enviamos a tu teléfono"
                }
              </Text>
            </View>

            {!isCodeSent ? (
              <View style={styles.phoneContainer}>
                <View style={styles.phoneInputContainer}>
                  <Text style={styles.countryCode}>+52</Text>
                  <TextInput
                    style={styles.phoneInput}
                    placeholder="10 dígitos"
                    placeholderTextColor={Colors.textSecondary}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                    maxLength={10}
                  />
                </View>
                
                <TouchableOpacity
                  style={[
                    styles.sendButton,
                    !isPhoneValid && styles.sendButtonDisabled
                  ]}
                  onPress={handleSendCode}
                  disabled={!isPhoneValid || isLoading}
                >
                  <Text style={[
                    styles.sendButtonText,
                    !isPhoneValid && styles.sendButtonTextDisabled
                  ]}>
                    {isLoading ? "Enviando..." : "Enviar código"}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.codeContainer}>
                <Text style={styles.phoneDisplay}>+52 {phoneNumber}</Text>
                
                <View style={styles.codeInputContainer}>
                  {verificationCode.map((digit, index) => (
                    <TextInput
                      key={index}
                      ref={(ref) => (codeInputRefs.current[index] = ref)}
                      style={[
                        styles.codeInput,
                        digit && styles.codeInputFilled
                      ]}
                      value={digit}
                      onChangeText={(text) => handleCodeChange(text, index)}
                      keyboardType="number-pad"
                      maxLength={1}
                      textAlign="center"
                    />
                  ))}
                </View>

                <TouchableOpacity
                  style={styles.resendButton}
                  onPress={() => setIsCodeSent(false)}
                >
                  <Text style={styles.resendText}>¿No recibiste el código? Reenviar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.verifyButton,
                    !isCodeComplete && styles.verifyButtonDisabled
                  ]}
                  onPress={handleVerifyCode}
                  disabled={!isCodeComplete}
                >
                  <Text style={[
                    styles.verifyButtonText,
                    !isCodeComplete && styles.verifyButtonTextDisabled
                  ]}>
                    Verificar
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  keyboardContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backText: {
    fontSize: 24,
    color: Colors.textPrimary,
    fontWeight: "600",
  },
  formContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  phoneContainer: {
    gap: 24,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.inputBackground,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginRight: 12,
  },
  phoneInput: {
    flex: 1,
    height: 56,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  sendButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonDisabled: {
    backgroundColor: Colors.disabled,
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  sendButtonTextDisabled: {
    color: Colors.textSecondary,
  },
  codeContainer: {
    gap: 24,
  },
  phoneDisplay: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: 8,
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  codeInput: {
    flex: 1,
    height: 56,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    backgroundColor: Colors.inputBackground,
    fontSize: 20,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  codeInputFilled: {
    borderColor: Colors.primary,
  },
  resendButton: {
    alignSelf: "center",
    paddingVertical: 12,
  },
  resendText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "500",
  },
  verifyButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  verifyButtonDisabled: {
    backgroundColor: Colors.disabled,
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  verifyButtonTextDisabled: {
    color: Colors.textSecondary,
  },
});

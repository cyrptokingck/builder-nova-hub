import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { Colors } from "../constants/Colors";

type TerminosScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Terminos"
>;

export default function TerminosScreen(): JSX.Element {
  const navigation = useNavigation<TerminosScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Términos y Condiciones</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.headerContent}>
            <Text style={styles.mainTitle}>Términos y Condiciones de Uso</Text>
            <Text style={styles.subtitle}>
              Bienvenido a LottoCoin. Por favor, lee atentamente estos términos antes de utilizar nuestra plataforma.
            </Text>
          </View>

          <View style={styles.sectionsContainer}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>1. Aceptación de los términos</Text>
              <Text style={styles.sectionText}>
                Al crear una cuenta en LottoCoin, aceptas quedar vinculado a estas condiciones de uso y todas las políticas aplicables.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>2. Naturaleza del servicio</Text>
              <Text style={styles.sectionText}>
                LottoCoin es una plataforma de lotería basada en criptomonedas donde los usuarios compran boletos con USDT para participar en sorteos semanales. No somos un casino ni una casa de apuestas tradicional.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>3. Elegibilidad</Text>
              <Text style={styles.sectionText}>
                Debes ser mayor de edad según las leyes de tu país de residencia y no residir en jurisdicciones donde este tipo de actividades estén prohibidas o restringidas.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>4. Funcionamiento de los sorteos</Text>
              <Text style={styles.sectionText}>
                Los sorteos se realizan mediante algoritmos públicos y contratos inteligentes verificables en la red TRON. Las probabilidades de ganar y las reglas del juego están disponibles públicamente y son auditables.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>5. Boletos y recargas</Text>
              <Text style={styles.sectionText}>
                Los boletos se adquieren exclusivamente con saldo USDT en tu cuenta. Las recargas deben realizarse únicamente en la red TRON (TRC-20). No nos hacemos responsables por depósitos realizados en otras redes.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>6. Premios y retiros</Text>
              <Text style={styles.sectionText}>
                Todos los premios son distribuidos automáticamente a través de contratos inteligentes. Los retiros están sujetos a tarifas de red y tiempos de procesamiento claramente definidos en la plataforma.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>7. Uso adecuado de la plataforma</Text>
              <Text style={styles.sectionText}>
                Está prohibido cualquier intento de manipulación, uso fraudulento, creación de múltiples cuentas con fines abusivos, o cualquier actividad que comprometa la integridad del sistema.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>8. Limitación de responsabilidad</Text>
              <Text style={styles.sectionText}>
                LottoCoin no garantiza resultados específicos ni ganancias. La participación en sorteos conlleva riesgos inherentes y cada usuario participa bajo su propia responsabilidad y criterio.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>9. Cambios en los términos</Text>
              <Text style={styles.sectionText}>
                Nos reservamos el derecho de actualizar estos términos en cualquier momento. Te notificaremos de cambios importantes a través de la aplicación o por correo electrónico.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>10. Contacto legal</Text>
              <Text style={styles.sectionText}>
                Para consultas legales o disputas relacionadas con estos términos, puedes contactarnos en: <Text style={styles.email}>legal@lottocoin.com</Text>
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Última actualización: Enero 2024</Text>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => navigation.navigate("ComprarTickets")}
            >
              <Text style={styles.buyButtonText}>Comprar 1 boleto</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.disclaimer}>
            <Text style={styles.disclaimerText}>
              Tu participación está sujeta a reglas públicas. No se garantizan premios. Ver términos del sorteo
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray200,
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  headerContent: {
    paddingVertical: 32,
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
  },
  sectionsContainer: {
    marginBottom: 32,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  email: {
    color: Colors.primary,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    marginBottom: 32,
  },
  footerText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 24,
  },
  buyButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    minWidth: 200,
    alignItems: "center",
  },
  buyButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  disclaimer: {
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: Colors.gray200,
  },
  disclaimerText: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 18,
  },
});

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

type PrivacidadScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Privacidad"
>;

export default function PrivacidadScreen(): JSX.Element {
  const navigation = useNavigation<PrivacidadScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Política de Privacidad</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.headerContent}>
            <Text style={styles.mainTitle}>Política de Privacidad</Text>
            <Text style={styles.subtitle}>
              En LottoCoin valoramos tu privacidad y nos comprometemos a proteger tu información personal.
            </Text>
          </View>

          <View style={styles.sectionsContainer}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>1. Datos que recopilamos</Text>
              <Text style={styles.sectionText}>
                Recopilamos únicamente la información necesaria para brindarte nuestros servicios:
              </Text>
              <View style={styles.listContainer}>
                <Text style={styles.listItem}>• Dirección de correo electrónico</Text>
                <Text style={styles.listItem}>• Contraseña encriptada (nunca almacenamos contraseñas en texto plano)</Text>
                <Text style={styles.listItem}>• Dirección TRC-20 (opcional, solo si decides proporcionarla)</Text>
                <Text style={styles.listItem}>• Dirección IP para seguridad y prevención de fraudes</Text>
                <Text style={styles.listItem}>• Datos de uso de la aplicación para mejorar nuestros servicios</Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>2. Cómo usamos tus datos</Text>
              <Text style={styles.sectionText}>
                Utilizamos tu información personal para:
              </Text>
              <View style={styles.listContainer}>
                <Text style={styles.listItem}>• Crear y mantener tu cuenta de usuario</Text>
                <Text style={styles.listItem}>• Enviarte notificaciones importantes sobre tu cuenta y sorteos</Text>
                <Text style={styles.listItem}>• Mostrarte tu historial de participación y transacciones</Text>
                <Text style={styles.listItem}>• Procesar depósitos, retiros y compras de boletos</Text>
                <Text style={styles.listItem}>• Proporcionar soporte técnico cuando lo necesites</Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>3. Con quién compartimos la información</Text>
              <Text style={styles.sectionText}>
                <Text style={styles.bold}>No vendemos tus datos personales.</Text> Solo compartimos información con proveedores técnicos de confianza y únicamente cuando es estrictamente necesario para prestar nuestros servicios (por ejemplo, procesadores de pago o servicios de infraestructura en la nube).
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>4. Seguridad de los datos</Text>
              <Text style={styles.sectionText}>
                Implementamos medidas de seguridad técnicas y organizativas apropiadas, incluyendo cifrado de datos, autenticación segura y mejores prácticas de la industria para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>5. Tus derechos</Text>
              <Text style={styles.sectionText}>
                Tienes derecho a:
              </Text>
              <View style={styles.listContainer}>
                <Text style={styles.listItem}>• Acceder a la información que tenemos sobre ti</Text>
                <Text style={styles.listItem}>• Modificar o actualizar tus datos personales</Text>
                <Text style={styles.listItem}>• Solicitar la eliminación de tu cuenta y datos asociados</Text>
                <Text style={styles.listItem}>• Exportar tus datos en un formato legible</Text>
                <Text style={styles.listItem}>• Retirar tu consentimiento para ciertos usos de datos</Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>6. Cookies y analítica</Text>
              <Text style={styles.sectionText}>
                Podemos usar cookies y herramientas de analítica para mejorar tu experiencia de usuario, detectar errores y optimizar el rendimiento de la plataforma. Puedes controlar las cookies a través de la configuración de tu navegador.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>7. Retención de datos</Text>
              <Text style={styles.sectionText}>
                Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos para los cuales fue recopilada, incluyendo requisitos legales, contables o de informes.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>8. Cambios en esta política</Text>
              <Text style={styles.sectionText}>
                Te notificaremos cualquier cambio importante en esta política de privacidad a través de la aplicación o por correo electrónico con al menos 30 días de anticipación.
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>9. Contacto de privacidad</Text>
              <Text style={styles.sectionText}>
                Para cualquier consulta, solicitud o reclamo relacionado con tu privacidad y datos personales, puedes contactarnos en: <Text style={styles.email}>privacidad@lottocoin.com</Text>
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
  bold: {
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  listContainer: {
    marginTop: 8,
    paddingLeft: 8,
  },
  listItem: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: 4,
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

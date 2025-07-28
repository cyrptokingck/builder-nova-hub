import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RNApp";
import { Colors } from "../constants/Colors";

type MiPerfilScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MiPerfil"
>;

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  notifications: {
    winnings: boolean;
    draws: boolean;
    promotions: boolean;
    account: boolean;
  };
}

export default function MiPerfilScreen(): JSX.Element {
  const navigation = useNavigation<MiPerfilScreenNavigationProp>();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: "Juan Pérez",
    email: "juan.perez@email.com",
    phone: "+52 555 123 4567",
    dateOfBirth: "1990-05-15",
    notifications: {
      winnings: true,
      draws: true,
      promotions: false,
      account: true,
    },
  });

  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);

  const handleSaveProfile = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    Alert.alert("¡Éxito!", "Perfil actualizado correctamente");
  };

  const handleCancelEdit = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleNotificationChange = (key: keyof UserProfile["notifications"]) => {
    setEditedProfile({
      ...editedProfile,
      notifications: {
        ...editedProfile.notifications,
        [key]: !editedProfile.notifications[key],
      },
    });
  };

  const handleLogout = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Cerrar sesión", 
          style: "destructive",
          onPress: () => navigation.navigate("Landing")
        }
      ]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Eliminar cuenta",
      "Esta acción es irreversible. ¿Estás seguro de que quieres eliminar tu cuenta?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Eliminar", 
          style: "destructive",
          onPress: () => Alert.alert("Info", "Función de eliminación en desarrollo")
        }
      ]
    );
  };

  const menuItems = [
    { 
      id: "security", 
      title: "Seguridad y privacidad", 
      icon: "🔒", 
      onPress: () => Alert.alert("Info", "Próximamente disponible") 
    },
    { 
      id: "payment", 
      title: "Métodos de pago", 
      icon: "💳", 
      onPress: () => Alert.alert("Info", "Próximamente disponible") 
    },
    { 
      id: "history", 
      title: "Historial de sorteos", 
      icon: "📋", 
      onPress: () => Alert.alert("Info", "Próximamente disponible") 
    },
    { 
      id: "support", 
      title: "Ayuda y soporte", 
      icon: "❓", 
      onPress: () => Alert.alert("Info", "Próximamente disponible") 
    },
    { 
      id: "terms", 
      title: "Términos y condiciones", 
      icon: "📄", 
      onPress: () => Alert.alert("Info", "Próximamente disponible") 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Mi Perfil</Text>
        {!isEditing ? (
          <TouchableOpacity
            onPress={() => setIsEditing(true)}
            style={styles.editButton}
          >
            <Text style={styles.editText}>Editar</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.editActions}>
            <TouchableOpacity
              onPress={handleCancelEdit}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSaveProfile}
              style={styles.saveButton}
            >
              <Text style={styles.saveText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.profileCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {profile.name.split(' ').map(n => n[0]).join('')}
              </Text>
            </View>
            
            <View style={styles.profileInfo}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Nombre completo</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.textInput}
                    value={editedProfile.name}
                    onChangeText={(text) =>
                      setEditedProfile({ ...editedProfile, name: text })
                    }
                    placeholder="Nombre completo"
                    placeholderTextColor={Colors.textSecondary}
                  />
                ) : (
                  <Text style={styles.inputValue}>{profile.name}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Correo electrónico</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.textInput}
                    value={editedProfile.email}
                    onChangeText={(text) =>
                      setEditedProfile({ ...editedProfile, email: text })
                    }
                    placeholder="correo@email.com"
                    placeholderTextColor={Colors.textSecondary}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                ) : (
                  <Text style={styles.inputValue}>{profile.email}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Teléfono</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.textInput}
                    value={editedProfile.phone}
                    onChangeText={(text) =>
                      setEditedProfile({ ...editedProfile, phone: text })
                    }
                    placeholder="+52 555 123 4567"
                    placeholderTextColor={Colors.textSecondary}
                    keyboardType="phone-pad"
                  />
                ) : (
                  <Text style={styles.inputValue}>{profile.phone}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Fecha de nacimiento</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.textInput}
                    value={editedProfile.dateOfBirth}
                    onChangeText={(text) =>
                      setEditedProfile({ ...editedProfile, dateOfBirth: text })
                    }
                    placeholder="YYYY-MM-DD"
                    placeholderTextColor={Colors.textSecondary}
                  />
                ) : (
                  <Text style={styles.inputValue}>{profile.dateOfBirth}</Text>
                )}
              </View>
            </View>
          </View>

          <View style={styles.notificationsSection}>
            <Text style={styles.sectionTitle}>Notificaciones</Text>
            
            <View style={styles.notificationItem}>
              <View style={styles.notificationLeft}>
                <Text style={styles.notificationTitle}>Premios ganados</Text>
                <Text style={styles.notificationSubtitle}>
                  Recibe alertas cuando ganes un premio
                </Text>
              </View>
              <Switch
                value={editedProfile.notifications.winnings}
                onValueChange={() => handleNotificationChange("winnings")}
                trackColor={{ false: Colors.disabled, true: Colors.primary }}
                thumbColor={Colors.background}
              />
            </View>

            <View style={styles.notificationItem}>
              <View style={styles.notificationLeft}>
                <Text style={styles.notificationTitle}>Sorteos</Text>
                <Text style={styles.notificationSubtitle}>
                  Recuerda fechas de sorteos y resultados
                </Text>
              </View>
              <Switch
                value={editedProfile.notifications.draws}
                onValueChange={() => handleNotificationChange("draws")}
                trackColor={{ false: Colors.disabled, true: Colors.primary }}
                thumbColor={Colors.background}
              />
            </View>

            <View style={styles.notificationItem}>
              <View style={styles.notificationLeft}>
                <Text style={styles.notificationTitle}>Promociones</Text>
                <Text style={styles.notificationSubtitle}>
                  Ofertas especiales y descuentos
                </Text>
              </View>
              <Switch
                value={editedProfile.notifications.promotions}
                onValueChange={() => handleNotificationChange("promotions")}
                trackColor={{ false: Colors.disabled, true: Colors.primary }}
                thumbColor={Colors.background}
              />
            </View>

            <View style={styles.notificationItem}>
              <View style={styles.notificationLeft}>
                <Text style={styles.notificationTitle}>Cuenta</Text>
                <Text style={styles.notificationSubtitle}>
                  Alertas de seguridad y actividad
                </Text>
              </View>
              <Switch
                value={editedProfile.notifications.account}
                onValueChange={() => handleNotificationChange("account")}
                trackColor={{ false: Colors.disabled, true: Colors.primary }}
                thumbColor={Colors.background}
              />
            </View>
          </View>

          <View style={styles.menuSection}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                onPress={item.onPress}
              >
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuArrow}>→</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.dangerSection}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>Cerrar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleDeleteAccount}
            >
              <Text style={styles.deleteText}>Eliminar cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
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
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  editText: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: "500",
  },
  editActions: {
    flexDirection: "row",
    gap: 8,
  },
  cancelButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  cancelText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  saveButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  saveText: {
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight: "500",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  profileCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  profileInfo: {
    width: "100%",
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.textSecondary,
  },
  inputValue: {
    fontSize: 16,
    color: Colors.textPrimary,
    paddingVertical: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.textPrimary,
    backgroundColor: Colors.inputBackground,
  },
  notificationsSection: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  notificationLeft: {
    flex: 1,
    marginRight: 16,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  notificationSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  menuSection: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 16,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  menuArrow: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  dangerSection: {
    gap: 12,
  },
  logoutButton: {
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    color: Colors.textPrimary,
    fontWeight: "500",
  },
  deleteButton: {
    backgroundColor: Colors.destructive + "20",
    borderWidth: 1,
    borderColor: Colors.destructive,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  deleteText: {
    fontSize: 16,
    color: Colors.destructive,
    fontWeight: "500",
  },
});

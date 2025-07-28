import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RNApp";
import { Colors } from "../constants/Colors";

type NotificacionesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Notificaciones"
>;

interface Notification {
  id: string;
  type: "win" | "draw" | "promotion" | "account" | "system";
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  priority: "high" | "medium" | "low";
}

export default function NotificacionesScreen(): JSX.Element {
  const navigation = useNavigation<NotificacionesScreenNavigationProp>();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "win",
      title: "¡Felicidades! Has ganado un premio",
      message:
        "Tu boleto #12345 ganó $800 en el sorteo del 15 de enero. El premio se ha depositado en tu cuenta.",
      timestamp: "2024-01-15T18:30:00Z",
      isRead: false,
      priority: "high",
    },
    {
      id: "2",
      type: "draw",
      title: "Resultados del sorteo disponibles",
      message:
        "Ya están disponibles los resultados del sorteo #456. Revisa tus boletos para ver si ganaste.",
      timestamp: "2024-01-15T15:00:00Z",
      isRead: false,
      priority: "medium",
    },
    {
      id: "3",
      type: "promotion",
      title: "Oferta especial: 20% de descuento",
      message:
        "Por tiempo limitado, obtén 20% de descuento en la compra de 5 o más boletos. ¡No te lo pierdas!",
      timestamp: "2024-01-14T10:00:00Z",
      isRead: true,
      priority: "medium",
    },
    {
      id: "4",
      type: "account",
      title: "Depósito exitoso",
      message: "Se han agregado $500 a tu cuenta. Tu nuevo saldo es $1,250.50.",
      timestamp: "2024-01-13T14:20:00Z",
      isRead: true,
      priority: "low",
    },
    {
      id: "5",
      type: "draw",
      title: "Próximo sorteo: 20 de enero",
      message:
        "El siguiente sorteo será el 20 de enero a las 8:00 PM. Asegúrate de comprar tus boletos antes de las 6:00 PM.",
      timestamp: "2024-01-12T09:00:00Z",
      isRead: true,
      priority: "medium",
    },
    {
      id: "6",
      type: "system",
      title: "Mantenimiento programado",
      message:
        "El sistema estará en mantenimiento el 22 de enero de 2:00 AM a 4:00 AM. Durante este tiempo no podrás acceder a la aplicación.",
      timestamp: "2024-01-10T16:00:00Z",
      isRead: true,
      priority: "low",
    },
  ]);

  const filters = [
    { id: "all", name: "Todas" },
    { id: "unread", name: "No leídas" },
    { id: "win", name: "Premios" },
    { id: "draw", name: "Sorteos" },
    { id: "promotion", name: "Promociones" },
    { id: "account", name: "Cuenta" },
  ];

  const getFilteredNotifications = () => {
    switch (selectedFilter) {
      case "unread":
        return notifications.filter((n) => !n.isRead);
      case "win":
      case "draw":
      case "promotion":
      case "account":
        return notifications.filter((n) => n.type === selectedFilter);
      default:
        return notifications;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
    Alert.alert(
      "¡Listo!",
      "Todas las notificaciones han sido marcadas como leídas",
    );
  };

  const deleteNotification = (id: string) => {
    Alert.alert(
      "Eliminar notificación",
      "¿Estás seguro de que quieres eliminar esta notificación?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: () =>
            setNotifications(notifications.filter((n) => n.id !== id)),
        },
      ],
    );
  };

  const clearAllNotifications = () => {
    Alert.alert(
      "Limpiar todas las notificaciones",
      "¿Estás seguro de que quieres eliminar todas las notificaciones?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar todas",
          style: "destructive",
          onPress: () => setNotifications([]),
        },
      ],
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "win":
        return "🏆";
      case "draw":
        return "🎱";
      case "promotion":
        return "🎁";
      case "account":
        return "💰";
      case "system":
        return "⚙️";
      default:
        return "📢";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return Colors.destructive;
      case "medium":
        return Colors.warning;
      case "low":
        return Colors.success;
      default:
        return Colors.textSecondary;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return "Hoy";
    } else if (diffDays === 2) {
      return "Ayer";
    } else if (diffDays <= 7) {
      return `Hace ${diffDays - 1} días`;
    } else {
      return date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
      });
    }
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  const filteredNotifications = getFilteredNotifications();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.title}>Notificaciones</Text>
          {unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity onPress={markAllAsRead} style={styles.markAllButton}>
          <Text style={styles.markAllText}>Marcar todas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
      >
        <View style={styles.filters}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterButton,
                selectedFilter === filter.id && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedFilter(filter.id)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedFilter === filter.id && styles.filterButtonTextActive,
                ]}
              >
                {filter.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          {filteredNotifications.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateIcon}>📭</Text>
              <Text style={styles.emptyStateTitle}>No hay notificaciones</Text>
              <Text style={styles.emptyStateMessage}>
                {selectedFilter === "all"
                  ? "No tienes notificaciones en este momento"
                  : `No tienes notificaciones de tipo "${filters.find((f) => f.id === selectedFilter)?.name}"`}
              </Text>
            </View>
          ) : (
            <>
              {filteredNotifications.map((notification) => (
                <TouchableOpacity
                  key={notification.id}
                  style={[
                    styles.notificationCard,
                    !notification.isRead && styles.notificationCardUnread,
                  ]}
                  onPress={() => markAsRead(notification.id)}
                  onLongPress={() => deleteNotification(notification.id)}
                >
                  <View style={styles.notificationHeader}>
                    <View style={styles.notificationLeft}>
                      <Text style={styles.notificationIcon}>
                        {getNotificationIcon(notification.type)}
                      </Text>
                      <View style={styles.notificationContent}>
                        <Text
                          style={[
                            styles.notificationTitle,
                            !notification.isRead &&
                              styles.notificationTitleUnread,
                          ]}
                        >
                          {notification.title}
                        </Text>
                        <Text style={styles.notificationTimestamp}>
                          {formatTimestamp(notification.timestamp)}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.notificationRight}>
                      <View
                        style={[
                          styles.priorityDot,
                          {
                            backgroundColor: getPriorityColor(
                              notification.priority,
                            ),
                          },
                        ]}
                      />
                      {!notification.isRead && (
                        <View style={styles.unreadDot} />
                      )}
                    </View>
                  </View>
                  <Text style={styles.notificationMessage}>
                    {notification.message}
                  </Text>
                </TouchableOpacity>
              ))}

              {filteredNotifications.length > 0 && (
                <TouchableOpacity
                  style={styles.clearAllButton}
                  onPress={clearAllNotifications}
                >
                  <Text style={styles.clearAllButtonText}>
                    Limpiar todas las notificaciones
                  </Text>
                </TouchableOpacity>
              )}
            </>
          )}
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
    paddingBottom: 16,
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
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  unreadBadge: {
    backgroundColor: Colors.destructive,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  unreadBadgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  markAllButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  markAllText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "500",
  },
  filtersContainer: {
    maxHeight: 60,
    marginBottom: 16,
  },
  filters: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  filterButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterButtonText: {
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight: "500",
  },
  filterButtonTextActive: {
    color: Colors.textPrimary,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyStateIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  emptyStateMessage: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: "center",
    maxWidth: 280,
  },
  notificationCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  notificationCardUnread: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary + "10",
  },
  notificationHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  notificationLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },
  notificationIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  notificationTitleUnread: {
    fontWeight: "600",
  },
  notificationTimestamp: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  notificationRight: {
    alignItems: "center",
    gap: 8,
  },
  priorityDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
  notificationMessage: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginLeft: 32,
  },
  clearAllButton: {
    backgroundColor: Colors.destructive + "20",
    borderWidth: 1,
    borderColor: Colors.destructive,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },
  clearAllButtonText: {
    fontSize: 16,
    color: Colors.destructive,
    fontWeight: "500",
  },
});

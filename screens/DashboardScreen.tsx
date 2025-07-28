import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DashboardScreenNavigationProp } from "../types/navigation";
import { Colors, Theme } from "../constants/Colors";
import { Home, FileText, Wallet, Grid3X3 } from "lucide-react-native";

const { width } = Dimensions.get("window");

interface BoletosActivosProps {
  numbers: string[];
  date: string;
}

interface UltimosResultadosProps {
  numbers: string;
  amount: string;
  currency: string;
  date: string;
}

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const boletosActivos: BoletosActivosProps[] = [
    { numbers: ["08", "23", "32", "36", "36"], date: "Fri, 01 ago" },
    { numbers: ["08", "23", "32", "36", "36"], date: "Fri, 01 ago" },
    { numbers: ["08", "23", "32", "36", "36"], date: "Fri, 01 ago" },
  ];

  const ultimosResultados: UltimosResultadosProps[] = [
    {
      numbers: "08 23 32 36 36 66",
      amount: "15 223 365",
      currency: "USDT",
      date: "Fri, 25 jun 2025",
    },
    {
      numbers: "32 54 60 25 78 95",
      amount: "22",
      currency: "USDT",
      date: "Fri, 18 jun 2025",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Mobile Status Bar */}
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

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.avatar} />
            <Text style={styles.greeting}>Hola, Manuel 👋</Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>💰 1,202,365 USDT</Text>
          </View>
        </View>

        {/* Main Prize Section */}
        <View style={styles.mainPrizeSection}>
          <Text style={styles.prizeLabel}>Esta semana repartimos 🎯</Text>
          <Text style={styles.prizeAmount}>45 000 000</Text>
          <Text style={styles.prizeCurrency}>USDT</Text>
          <Text style={styles.prizeCountdown}>Finaliza en 3d 04h 12m</Text>
        </View>

        {/* Buy Ticket Button */}
        <TouchableOpacity
          style={styles.buyTicketButton}
          onPress={() => navigation.navigate("ComprarTickets")}
        >
          <Text style={styles.buyTicketText}>Comprar boleto</Text>
        </TouchableOpacity>

        <Text style={styles.participantsText}>
          15M de boletos ya participan
        </Text>

        {/* Active Tickets Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Boletos activos</Text>
            <TouchableOpacity>
              <Text style={styles.sectionAction}>All results</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ticketsGrid}>
            {boletosActivos.map((boleto, index) => (
              <View key={index} style={styles.ticketCard}>
                {boleto.numbers.map((number, numberIndex) => (
                  <Text key={numberIndex} style={styles.ticketNumber}>
                    {number}
                  </Text>
                ))}
                <Text style={styles.ticketDate}>{boleto.date}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Last Results Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Últimos resultados</Text>
            <TouchableOpacity>
              <Text style={styles.sectionAction}>All results</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resultsContainer}>
            {ultimosResultados.map((resultado, index) => (
              <View key={index} style={styles.resultRow}>
                <View style={styles.resultInfo}>
                  <Text style={styles.resultNumbers}>{resultado.numbers}</Text>
                  <Text style={styles.resultDate}>{resultado.date}</Text>
                </View>
                <Text style={styles.resultAmount}>
                  {resultado.amount} {resultado.currency}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIconActive}>
            <Home size={24} color={Colors.textPrimary} />
          </View>
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon}>
            <FileText size={24} color={Colors.white} />
          </View>
          <Text style={styles.navText}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("MiSaldo")}
        >
          <View style={styles.navIcon}>
            <Wallet size={24} color={Colors.white} />
          </View>
          <Text style={styles.navText}>Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("MiPerfil")}
        >
          <View style={styles.navIcon}>
            <Grid3X3 size={24} color={Colors.white} />
          </View>
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.md,
  },
  timeText: {
    color: Colors.textPrimary,
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.semibold,
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: Theme.spacing.xs,
  },
  signalBars: {
    flexDirection: "row",
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
    justifyContent: "center",
    alignItems: "center",
  },
  batteryLevel: {
    width: 16,
    height: 8,
    backgroundColor: Colors.white,
    borderRadius: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: Theme.spacing.lg,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Theme.spacing.md,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: Theme.spacing.sm,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  greeting: {
    fontSize: Theme.fontSize.sm,
    color: Colors.textPrimary,
  },
  balanceContainer: {
    backgroundColor: Colors.textPrimary,
    paddingHorizontal: Theme.spacing.sm,
    paddingVertical: Theme.spacing.xs,
    borderRadius: Theme.borderRadius.full,
  },
  balanceText: {
    color: Colors.primary,
    fontSize: Theme.fontSize.sm,
    fontWeight: Theme.fontWeight.semibold,
  },
  mainPrizeSection: {
    alignItems: "center",
    marginBottom: Theme.spacing.lg,
  },
  prizeLabel: {
    fontSize: Theme.fontSize.sm,
    color: Colors.textSecondary,
    marginBottom: Theme.spacing.xs,
  },
  prizeAmount: {
    fontSize: 40,
    fontWeight: Theme.fontWeight.bold,
    color: Colors.primary,
  },
  prizeCurrency: {
    fontSize: Theme.fontSize.xl,
    color: Colors.textSecondary,
    marginBottom: Theme.spacing.xs,
  },
  prizeCountdown: {
    fontSize: Theme.fontSize.sm,
    color: Colors.error,
  },
  buyTicketButton: {
    width: "100%",
    backgroundColor: Colors.primary,
    borderRadius: Theme.borderRadius.full,
    paddingVertical: Theme.spacing.lg,
    alignItems: "center",
    marginBottom: Theme.spacing.md,
  },
  buyTicketText: {
    color: Colors.textPrimary,
    fontSize: Theme.fontSize.lg,
    fontWeight: Theme.fontWeight.semibold,
  },
  participantsText: {
    textAlign: "center",
    fontSize: Theme.fontSize.sm,
    color: Colors.primary,
    marginBottom: Theme.spacing.lg,
  },
  section: {
    marginBottom: Theme.spacing.lg,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Theme.spacing.md,
  },
  sectionTitle: {
    fontSize: Theme.fontSize.lg,
    fontWeight: Theme.fontWeight.semibold,
    color: Colors.textPrimary,
  },
  sectionAction: {
    fontSize: Theme.fontSize.sm,
    color: Colors.textSecondary,
  },
  ticketsGrid: {
    flexDirection: "row",
    gap: Theme.spacing.md,
  },
  ticketCard: {
    flex: 1,
    backgroundColor: Colors.gray100,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.sm,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.gray200,
  },
  ticketNumber: {
    fontSize: Theme.fontSize.sm,
    fontWeight: Theme.fontWeight.semibold,
    color: Colors.textPrimary,
  },
  ticketDate: {
    fontSize: Theme.fontSize.xs,
    color: Colors.textSecondary,
    marginTop: Theme.spacing.xs,
  },
  resultsContainer: {
    gap: Theme.spacing.sm,
  },
  resultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resultInfo: {
    flex: 1,
  },
  resultNumbers: {
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.semibold,
    color: Colors.textPrimary,
  },
  resultDate: {
    fontSize: Theme.fontSize.xs,
    color: Colors.textSecondary,
  },
  resultAmount: {
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.semibold,
    color: Colors.primary,
  },
  bottomNavigation: {
    backgroundColor: Colors.textPrimary,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: Theme.spacing.md,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
  },
  navItem: {
    alignItems: "center",
    gap: Theme.spacing.xs,
  },
  navIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  navIconActive: {
    width: 48,
    height: 48,
    backgroundColor: Colors.primary,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    fontSize: Theme.fontSize.xs,
    color: Colors.white,
  },
  navTextActive: {
    fontSize: Theme.fontSize.xs,
    color: Colors.primary,
    fontWeight: Theme.fontWeight.medium,
  },
});

export default DashboardScreen;

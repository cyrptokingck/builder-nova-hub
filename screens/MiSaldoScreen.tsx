import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Animated,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { Colors } from "../constants/Colors";

type MiSaldoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MiSaldo"
>;

interface Transaction {
  id: string;
  type: "deposit" | "withdrawal" | "ticket" | "win";
  amount: number;
  description: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

export default function MiSaldoScreen(): JSX.Element {
  const navigation = useNavigation<MiSaldoScreenNavigationProp>();
  const [balance] = useState(1250.5);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [addAmount, setAddAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      type: "deposit",
      amount: 500,
      description: "Depósito con tarjeta",
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: "2",
      type: "ticket",
      amount: -50,
      description: "Compra de boleto #12345",
      date: "2024-01-14",
      status: "completed",
    },
    {
      id: "3",
      type: "win",
      amount: 800,
      description: "Premio - Sorteo #456",
      date: "2024-01-12",
      status: "completed",
    },
    {
      id: "4",
      type: "ticket",
      amount: -100,
      description: "Compra de 2 boletos",
      date: "2024-01-10",
      status: "completed",
    },
    {
      id: "5",
      type: "withdrawal",
      amount: -200,
      description: "Retiro a cuenta bancaria",
      date: "2024-01-08",
      status: "pending",
    },
  ]);

  const paymentMethods = [
    { id: "card", name: "Tarjeta de Crédito/Débito", icon: "💳" },
    { id: "bank", name: "Transferencia Bancaria", icon: "🏦" },
    { id: "paypal", name: "PayPal", icon: "💰" },
    { id: "crypto", name: "Criptomonedas", icon: "₿" },
  ];

  const quickAmounts = [100, 250, 500, 1000];

  const toggleAddFunds = () => {
    setShowAddFunds(!showAddFunds);
    Animated.timing(slideAnim, {
      toValue: showAddFunds ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleQuickAmount = (amount: number) => {
    setAddAmount(amount.toString());
  };

  const handleAddFunds = () => {
    if (!addAmount || !selectedMethod) {
      Alert.alert("Error", "Selecciona un método de pago y monto");
      return;
    }

    Alert.alert(
      "Confirmar depósito",
      `¿Agregar $${addAmount} usando ${paymentMethods.find((m) => m.id === selectedMethod)?.name}?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          onPress: () => {
            Alert.alert("¡Éxito!", "Fondos agregados exitosamente");
            setShowAddFunds(false);
            setAddAmount("");
            setSelectedMethod(null);
          },
        },
      ],
    );
  };

  const handleWithdraw = () => {
    Alert.alert(
      "Retirar fondos",
      "¿Deseas retirar fondos a tu cuenta bancaria registrada?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Continuar",
          onPress: () => Alert.alert("Info", "Función de retiro en desarrollo"),
        },
      ],
    );
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return "💰";
      case "withdrawal":
        return "💸";
      case "ticket":
        return "🎫";
      case "win":
        return "🏆";
      default:
        return "💰";
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "deposit":
      case "win":
        return Colors.success;
      case "withdrawal":
      case "ticket":
        return Colors.destructive;
      default:
        return Colors.textSecondary;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return Colors.success;
      case "pending":
        return Colors.warning;
      case "failed":
        return Colors.destructive;
      default:
        return Colors.textSecondary;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Mi Saldo</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Saldo disponible</Text>
            <Text style={styles.balanceAmount}>${balance.toFixed(2)}</Text>
            <View style={styles.balanceActions}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={toggleAddFunds}
              >
                <Text style={styles.actionButtonText}>💰 Agregar fondos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.withdrawButton]}
                onPress={handleWithdraw}
              >
                <Text style={styles.withdrawButtonText}>💸 Retirar</Text>
              </TouchableOpacity>
            </View>
          </View>

          {showAddFunds && (
            <Animated.View
              style={[
                styles.addFundsCard,
                {
                  opacity: slideAnim,
                  transform: [
                    {
                      translateY: slideAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-20, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Text style={styles.addFundsTitle}>Agregar fondos</Text>

              <Text style={styles.sectionLabel}>Monto</Text>
              <TextInput
                style={styles.amountInput}
                placeholder="$0.00"
                placeholderTextColor={Colors.textSecondary}
                value={addAmount}
                onChangeText={setAddAmount}
                keyboardType="numeric"
              />

              <View style={styles.quickAmounts}>
                {quickAmounts.map((amount) => (
                  <TouchableOpacity
                    key={amount}
                    style={[
                      styles.quickAmountButton,
                      addAmount === amount.toString() &&
                        styles.quickAmountButtonSelected,
                    ]}
                    onPress={() => handleQuickAmount(amount)}
                  >
                    <Text
                      style={[
                        styles.quickAmountText,
                        addAmount === amount.toString() &&
                          styles.quickAmountTextSelected,
                      ]}
                    >
                      ${amount}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.sectionLabel}>Método de pago</Text>
              {paymentMethods.map((method) => (
                <TouchableOpacity
                  key={method.id}
                  style={[
                    styles.paymentMethod,
                    selectedMethod === method.id &&
                      styles.paymentMethodSelected,
                  ]}
                  onPress={() => setSelectedMethod(method.id)}
                >
                  <Text style={styles.paymentMethodIcon}>{method.icon}</Text>
                  <Text style={styles.paymentMethodName}>{method.name}</Text>
                  <View
                    style={[
                      styles.radioButton,
                      selectedMethod === method.id &&
                        styles.radioButtonSelected,
                    ]}
                  />
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                style={[
                  styles.addFundsButton,
                  (!addAmount || !selectedMethod) &&
                    styles.addFundsButtonDisabled,
                ]}
                onPress={handleAddFunds}
                disabled={!addAmount || !selectedMethod}
              >
                <Text
                  style={[
                    styles.addFundsButtonText,
                    (!addAmount || !selectedMethod) &&
                      styles.addFundsButtonTextDisabled,
                  ]}
                >
                  Agregar fondos
                </Text>
              </TouchableOpacity>
            </Animated.View>
          )}

          <View style={styles.transactionsSection}>
            <Text style={styles.sectionTitle}>Historial de transacciones</Text>

            {transactions.map((transaction) => (
              <View key={transaction.id} style={styles.transactionItem}>
                <View style={styles.transactionLeft}>
                  <Text style={styles.transactionIcon}>
                    {getTransactionIcon(transaction.type)}
                  </Text>
                  <View style={styles.transactionDetails}>
                    <Text style={styles.transactionDescription}>
                      {transaction.description}
                    </Text>
                    <Text style={styles.transactionDate}>
                      {transaction.date}
                    </Text>
                  </View>
                </View>
                <View style={styles.transactionRight}>
                  <Text
                    style={[
                      styles.transactionAmount,
                      { color: getTransactionColor(transaction.type) },
                    ]}
                  >
                    {transaction.amount > 0 ? "+" : ""}$
                    {Math.abs(transaction.amount)}
                  </Text>
                  <Text
                    style={[
                      styles.transactionStatus,
                      { color: getStatusColor(transaction.status) },
                    ]}
                  >
                    {transaction.status === "completed"
                      ? "Completado"
                      : transaction.status === "pending"
                        ? "Pendiente"
                        : "Fallido"}
                  </Text>
                </View>
              </View>
            ))}
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
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  balanceCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  balanceLabel: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 24,
  },
  balanceActions: {
    flexDirection: "row",
    gap: 12,
  },
  actionButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    flex: 1,
    alignItems: "center",
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  withdrawButton: {
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  withdrawButtonText: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
  },
  addFundsCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  addFundsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  amountInput: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: Colors.textPrimary,
    backgroundColor: Colors.inputBackground,
    marginBottom: 16,
  },
  quickAmounts: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
  },
  quickAmountButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: Colors.inputBackground,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: "center",
  },
  quickAmountButtonSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  quickAmountText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.textPrimary,
  },
  quickAmountTextSelected: {
    color: Colors.textPrimary,
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: Colors.inputBackground,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 8,
  },
  paymentMethodSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary + "20",
  },
  paymentMethodIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  paymentMethodName: {
    flex: 1,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.border,
  },
  radioButtonSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  addFundsButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 16,
  },
  addFundsButtonDisabled: {
    backgroundColor: Colors.disabled,
  },
  addFundsButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  addFundsButtonTextDisabled: {
    color: Colors.textSecondary,
  },
  transactionsSection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 16,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 8,
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  transactionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  transactionRight: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: "500",
  },
});

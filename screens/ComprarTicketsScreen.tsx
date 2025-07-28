import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Animated,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RNApp";
import { Colors } from "../constants/Colors";

type ComprarTicketsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ComprarTickets"
>;

export default function ComprarTicketsScreen(): JSX.Element {
  const navigation = useNavigation<ComprarTicketsScreenNavigationProp>();
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [quickPicks, setQuickPicks] = useState<number[][]>([]);
  const [ticketCount, setTicketCount] = useState(1);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Generate numbers 1-49 for the lottery
  const lotteryNumbers = Array.from({ length: 49 }, (_, i) => i + 1);

  const toggleNumber = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers([...selectedNumbers, number]);

      // Animate selection
      Animated.sequence([
        Animated.timing(scaleAnim, {
          duration: 100,
          toValue: 1.1,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          duration: 100,
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const generateQuickPick = () => {
    const numbers = [];
    while (numbers.length < 6) {
      const randomNum = Math.floor(Math.random() * 49) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers.sort((a, b) => a - b);
  };

  const addQuickPick = () => {
    if (quickPicks.length < 5) {
      setQuickPicks([...quickPicks, generateQuickPick()]);
    }
  };

  const removeQuickPick = (index: number) => {
    setQuickPicks(quickPicks.filter((_, i) => i !== index));
  };

  const clearSelection = () => {
    setSelectedNumbers([]);
  };

  const getTotalCost = () => {
    const manualTickets = selectedNumbers.length === 6 ? 1 : 0;
    const totalTickets = manualTickets + quickPicks.length;
    return totalTickets * 50; // $50 per ticket
  };

  const handleBuyTickets = () => {
    const totalTickets =
      (selectedNumbers.length === 6 ? 1 : 0) + quickPicks.length;

    if (totalTickets === 0) {
      Alert.alert(
        "Error",
        "Selecciona al menos 6 números o genera un Quick Pick",
      );
      return;
    }

    Alert.alert(
      "Confirmar compra",
      `¿Comprar ${totalTickets} boleto(s) por $${getTotalCost()}?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Comprar",
          onPress: () => {
            Alert.alert("¡Éxito!", "Boletos comprados exitosamente", [
              { text: "OK", onPress: () => navigation.navigate("Dashboard") },
            ]);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Comprar Boletos</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.content}>
          <View style={styles.priceCard}>
            <Text style={styles.priceTitle}>Precio por boleto</Text>
            <Text style={styles.price}>$50.00</Text>
            <Text style={styles.priceSubtitle}>
              Selecciona 6 números del 1 al 49
            </Text>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Selección manual</Text>
              <TouchableOpacity onPress={clearSelection}>
                <Text style={styles.clearText}>Limpiar</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.selectedCount}>
              {selectedNumbers.length}/6 números seleccionados
            </Text>

            <View style={styles.numbersGrid}>
              {lotteryNumbers.map((number) => (
                <TouchableOpacity
                  key={number}
                  style={[
                    styles.numberButton,
                    selectedNumbers.includes(number) &&
                      styles.numberButtonSelected,
                  ]}
                  onPress={() => toggleNumber(number)}
                  disabled={
                    !selectedNumbers.includes(number) &&
                    selectedNumbers.length >= 6
                  }
                >
                  <Animated.Text
                    style={[
                      styles.numberText,
                      selectedNumbers.includes(number) &&
                        styles.numberTextSelected,
                      selectedNumbers.includes(number) && {
                        transform: [{ scale: scaleAnim }],
                      },
                    ]}
                  >
                    {number}
                  </Animated.Text>
                </TouchableOpacity>
              ))}
            </View>

            {selectedNumbers.length === 6 && (
              <View style={styles.selectedNumbers}>
                <Text style={styles.selectedTitle}>Números seleccionados:</Text>
                <View style={styles.selectedRow}>
                  {selectedNumbers
                    .sort((a, b) => a - b)
                    .map((number, index) => (
                      <View key={number} style={styles.selectedBall}>
                        <Text style={styles.selectedBallText}>{number}</Text>
                      </View>
                    ))}
                </View>
              </View>
            )}
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Quick Pick</Text>
              <TouchableOpacity
                style={styles.quickPickButton}
                onPress={addQuickPick}
                disabled={quickPicks.length >= 5}
              >
                <Text style={styles.quickPickButtonText}>+ Generar</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.quickPickSubtitle}>
              Genera números aleatorios automáticamente (máximo 5)
            </Text>

            {quickPicks.map((numbers, index) => (
              <View key={index} style={styles.quickPickRow}>
                <View style={styles.quickPickNumbers}>
                  {numbers.map((number, numIndex) => (
                    <View key={numIndex} style={styles.quickPickBall}>
                      <Text style={styles.quickPickBallText}>{number}</Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity
                  onPress={() => removeQuickPick(index)}
                  style={styles.removeButton}
                >
                  <Text style={styles.removeButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total a pagar:</Text>
          <Text style={styles.totalAmount}>${getTotalCost()}</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.buyButton,
            getTotalCost() === 0 && styles.buyButtonDisabled,
          ]}
          onPress={handleBuyTickets}
          disabled={getTotalCost() === 0}
        >
          <Text
            style={[
              styles.buyButtonText,
              getTotalCost() === 0 && styles.buyButtonTextDisabled,
            ]}
          >
            Comprar boletos
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
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
  content: {
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  priceCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  priceTitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 8,
  },
  priceSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: "center",
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  clearText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "500",
  },
  selectedCount: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  numbersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  numberButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  numberButtonSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  numberText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  numberTextSelected: {
    color: Colors.textPrimary,
  },
  selectedNumbers: {
    marginTop: 20,
    padding: 16,
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  selectedTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  selectedRow: {
    flexDirection: "row",
    gap: 8,
  },
  selectedBall: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedBallText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  quickPickButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  quickPickButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.textPrimary,
  },
  quickPickSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  quickPickRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 8,
  },
  quickPickNumbers: {
    flexDirection: "row",
    gap: 6,
  },
  quickPickBall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  quickPickBallText: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.destructive,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    padding: 24,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
  },
  buyButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  buyButtonDisabled: {
    backgroundColor: Colors.disabled,
  },
  buyButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  buyButtonTextDisabled: {
    color: Colors.textSecondary,
  },
});

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowRight } from "lucide-react-native";

const { width, height } = Dimensions.get("window");

const OnboardingWalkthrough1 = () => {
  const navigation = useNavigation();

  // Animation values for bouncing coins
  const bounceAnim1 = new Animated.Value(0);
  const bounceAnim2 = new Animated.Value(0);
  const bounceAnim3 = new Animated.Value(0);

  React.useEffect(() => {
    // Start bounce animations
    const createBounceAnimation = (
      animValue: Animated.Value,
      delay: number,
    ) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            toValue: -10,
            duration: 1000,
            delay,
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      );
    };

    const animation1 = createBounceAnimation(bounceAnim1, 0);
    const animation2 = createBounceAnimation(bounceAnim2, 300);
    const animation3 = createBounceAnimation(bounceAnim3, 600);

    animation1.start();
    animation2.start();
    animation3.start();

    return () => {
      animation1.stop();
      animation2.stop();
      animation3.stop();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#CAF206" />

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>12:00</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBars}>
            <View style={styles.signalBar} />
            <View style={styles.signalBar} />
            <View style={styles.signalBar} />
            <View style={[styles.signalBar, styles.signalBarWeak]} />
          </View>
          <View style={styles.battery}>
            <View style={styles.batteryLevel} />
          </View>
        </View>
      </View>

      {/* Skip Button */}
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Landing")}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Juega y gana con criptomonedas, cada semana
          </Text>
          <Text style={styles.description}>
            LottoCoin es una plataforma de lotería en USDT (TRC-20) donde los
            premios se reparten siempre de forma garantizada y transparente.
          </Text>
        </View>

        {/* 3D Illustration */}
        <View style={styles.illustrationContainer}>
          {/* Main money bag */}
          <View style={styles.moneyBag}>
            <View style={styles.bagTie} />
            <Text style={styles.dollarSign}>$</Text>
          </View>

          {/* Floating coins */}
          <Animated.View
            style={[
              styles.coin,
              styles.coin1,
              { transform: [{ translateY: bounceAnim1 }] },
            ]}
          >
            <View style={styles.coinInner} />
            <Text style={styles.coinDollar}>$</Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.coin,
              styles.coin2,
              { transform: [{ translateY: bounceAnim2 }] },
            ]}
          >
            <View style={styles.coinInner} />
            <Text style={styles.coinDollar}>$</Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.coin,
              styles.coin3,
              { transform: [{ translateY: bounceAnim3 }] },
            ]}
          >
            <View style={styles.coinInner} />
            <Text style={styles.coinDollar}>$</Text>
          </Animated.View>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Progress Dots */}
        <View style={styles.progressDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={[styles.dot, styles.dotInactive]} />
          <View style={[styles.dot, styles.dotInactive]} />
          <View style={[styles.dot, styles.dotInactive]} />
          <View style={[styles.dot, styles.dotInactive]} />
        </View>

        {/* Next Button */}
        <View style={styles.nextButtonContainer}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate("OnboardingWalkthrough2")}
          >
            <ArrowRight size={24} color="#CAF206" />
          </TouchableOpacity>
        </View>

        {/* Progress Indicator */}
        <View style={styles.progressIndicator}>
          <View style={styles.progressBar} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CAF206", // lotto-background
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  timeText: {
    color: "#000000", // lotto-text-primary
    fontSize: 16,
    fontWeight: "600",
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  signalBars: {
    flexDirection: "row",
    gap: 2,
  },
  signalBar: {
    width: 4,
    height: 12,
    backgroundColor: "#000000",
    borderRadius: 2,
  },
  signalBarWeak: {
    opacity: 0.4,
  },
  battery: {
    width: 24,
    height: 12,
    backgroundColor: "#000000",
    borderRadius: 2,
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  batteryLevel: {
    width: 16,
    height: 8,
    backgroundColor: "white",
    borderRadius: 1,
  },
  skipContainer: {
    alignItems: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  skipText: {
    color: "#6C6C6C", // lotto-text-secondary
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  textContainer: {
    marginBottom: 32,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000", // lotto-text-primary
    textAlign: "center",
    marginBottom: 16,
    maxWidth: 280,
    lineHeight: 36,
  },
  description: {
    fontSize: 18,
    color: "#6C6C6C", // lotto-text-secondary
    textAlign: "center",
    maxWidth: 320,
    lineHeight: 24,
  },
  illustrationContainer: {
    width: 320,
    height: 320,
    position: "relative",
    marginBottom: 32,
  },
  moneyBag: {
    position: "absolute",
    bottom: 64,
    left: "50%",
    marginLeft: -48,
    width: 96,
    height: 128,
    backgroundColor: "#E5E7EB",
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  bagTie: {
    position: "absolute",
    top: -16,
    width: 32,
    height: 32,
    backgroundColor: "#EF4444",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  dollarSign: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#16A34A",
  },
  coin: {
    position: "absolute",
    borderRadius: 50,
    backgroundColor: "#FBBF24",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  coin1: {
    top: 32,
    left: 32,
    width: 48,
    height: 48,
  },
  coin2: {
    top: 16,
    right: 48,
    width: 40,
    height: 40,
  },
  coin3: {
    top: 64,
    left: 16,
    width: 32,
    height: 32,
  },
  coinInner: {
    position: "absolute",
    top: 8,
    left: 8,
    right: 8,
    bottom: 8,
    backgroundColor: "#FDE047",
    borderRadius: 50,
  },
  coinDollar: {
    color: "#92400E",
    fontWeight: "bold",
    fontSize: 14,
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  progressDots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 24,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    width: 24,
    backgroundColor: "#000000",
  },
  dotInactive: {
    width: 8,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  nextButtonContainer: {
    alignItems: "flex-end",
  },
  nextButton: {
    width: 64,
    height: 64,
    backgroundColor: "#000000", // lotto-button-dark
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  progressIndicator: {
    alignItems: "center",
    paddingTop: 16,
  },
  progressBar: {
    width: 32,
    height: 4,
    backgroundColor: "#000000",
    borderRadius: 2,
  },
});

export default OnboardingWalkthrough1;

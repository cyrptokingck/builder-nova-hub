import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OnboardingWalkthrough5NavigationProp } from "../types/navigation";
import { Colors, Theme } from "../constants/Colors";
import { ArrowRight } from "lucide-react-native";

const { width } = Dimensions.get("window");

const OnboardingWalkthrough5: React.FC = () => {
  const navigation = useNavigation<OnboardingWalkthrough5NavigationProp>();

  // Animation values for floating coins
  const bounceAnim1 = new Animated.Value(0);
  const bounceAnim2 = new Animated.Value(0);
  const bounceAnim3 = new Animated.Value(0);
  const bounceAnim4 = new Animated.Value(0);
  // Celebration coins falling from hands
  const fallAnim1 = new Animated.Value(0);
  const fallAnim2 = new Animated.Value(0);
  const fallAnim3 = new Animated.Value(0);
  const fallAnim4 = new Animated.Value(0);

  useEffect(() => {
    const createBounceAnimation = (
      animValue: Animated.Value,
      delay: number,
    ): Animated.CompositeAnimation => {
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

    const createFallAnimation = (
      animValue: Animated.Value,
      delay: number,
    ): Animated.CompositeAnimation => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            toValue: 15,
            duration: 1200,
            delay,
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: true,
          }),
        ]),
      );
    };

    createBounceAnimation(bounceAnim1, 0).start();
    createBounceAnimation(bounceAnim2, 300).start();
    createBounceAnimation(bounceAnim3, 600).start();
    createBounceAnimation(bounceAnim4, 900).start();

    createFallAnimation(fallAnim1, 1200).start();
    createFallAnimation(fallAnim2, 1500).start();
    createFallAnimation(fallAnim3, 1800).start();
    createFallAnimation(fallAnim4, 2100).start();
  }, []);

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
            Jugar también es construir oportunidades
          </Text>
          <Text style={styles.description}>
            LottoCoin es una comunidad. Cada sorteo impulsa inclusión
            financiera, igualdad de oportunidades y diversión transparente.
          </Text>
        </View>

        {/* 3D Illustration - Community building theme */}
        <View style={styles.illustrationContainer}>
          {/* Floating coins */}
          <Animated.View
            style={[
              styles.coin,
              styles.coin1,
              { transform: [{ translateY: bounceAnim1 }] },
            ]}
          >
            <View style={styles.coinInner} />
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
          </Animated.View>

          <Animated.View
            style={[
              styles.coin,
              styles.coin4,
              { transform: [{ translateY: bounceAnim4 }] },
            ]}
          >
            <View style={styles.coinInner} />
            <Text style={styles.coinDollar}>$</Text>
          </Animated.View>

          {/* Main character - Same person from screen 3 but celebrating */}
          <View style={styles.characterContainer}>
            {/* Head */}
            <View style={styles.head}>
              {/* Happy eyes */}
              <View style={styles.eye1} />
              <View style={styles.eye2} />
              {/* Big smile */}
              <View style={styles.bigSmile} />
              {/* Headphones */}
              <View style={styles.headphones}>
                <View style={styles.headphonesBand} />
                <View style={styles.headphonesLeft} />
                <View style={styles.headphonesRight} />
              </View>
            </View>

            {/* Body */}
            <View style={styles.body}>
              {/* Arms raised in celebration */}
              <View style={styles.armLeftCelebrating} />
              <View style={styles.armRightCelebrating} />
              {/* Hands */}
              <View style={styles.handLeft} />
              <View style={styles.handRight} />
            </View>

            {/* Legs */}
            <View style={styles.legsContainer}>
              <View style={styles.legLeft} />
              <View style={styles.legRight} />
              {/* Shoes */}
              <View style={styles.shoeLeft} />
              <View style={styles.shoeRight} />
            </View>
          </View>

          {/* Celebration coins falling from hands */}
          <Animated.View
            style={[
              styles.celebrationCoin,
              styles.celebrationCoin1,
              { transform: [{ translateY: fallAnim1 }] },
            ]}
          >
            <View style={styles.coinInner} />
          </Animated.View>

          <Animated.View
            style={[
              styles.celebrationCoin,
              styles.celebrationCoin2,
              { transform: [{ translateY: fallAnim2 }] },
            ]}
          >
            <View style={styles.coinInner} />
          </Animated.View>

          <Animated.View
            style={[
              styles.celebrationCoin,
              styles.celebrationCoin3,
              { transform: [{ translateY: fallAnim3 }] },
            ]}
          >
            <View style={styles.coinInner} />
          </Animated.View>

          <Animated.View
            style={[
              styles.celebrationCoin,
              styles.celebrationCoin4,
              { transform: [{ translateY: fallAnim4 }] },
            ]}
          >
            <View style={styles.coinInner} />
          </Animated.View>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Progress Dots */}
        <View style={styles.progressDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
        </View>

        {/* Next Button */}
        <View style={styles.nextButtonContainer}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate("Landing")}
          >
            <ArrowRight size={24} color={Colors.primary} />
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
    backgroundColor: Colors.background,
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
  skipContainer: {
    alignItems: "flex-end",
    paddingHorizontal: Theme.spacing.lg,
    paddingVertical: Theme.spacing.md,
  },
  skipText: {
    color: Colors.textSecondary,
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.medium,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Theme.spacing.lg,
  },
  textContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: Theme.fontSize.xxxl,
    fontWeight: Theme.fontWeight.bold,
    color: Colors.textPrimary,
    textAlign: "center",
    marginBottom: Theme.spacing.md,
    maxWidth: width * 0.8,
    lineHeight: 34,
  },
  description: {
    fontSize: Theme.fontSize.md,
    color: Colors.textSecondary,
    textAlign: "center",
    maxWidth: width * 0.85,
    lineHeight: 22,
  },
  illustrationContainer: {
    width: 280,
    height: 280,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  coin: {
    position: "absolute",
    backgroundColor: Colors.coinGold,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    ...Theme.shadows.medium,
  },
  coin1: {
    top: 32,
    left: 32,
    width: 24,
    height: 24,
  },
  coin2: {
    top: 16,
    right: 48,
    width: 32,
    height: 32,
  },
  coin3: {
    top: 80,
    left: 16,
    width: 28,
    height: 28,
  },
  coin4: {
    bottom: 48,
    right: 16,
    width: 36,
    height: 36,
  },
  coinInner: {
    position: "absolute",
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    backgroundColor: Colors.coinGoldInner,
    borderRadius: 50,
  },
  coinDollar: {
    color: Colors.coinText,
    fontWeight: Theme.fontWeight.bold,
    fontSize: 10,
  },
  characterContainer: {
    alignItems: "center",
  },
  head: {
    width: 64,
    height: 64,
    backgroundColor: "#FDBA74",
    borderRadius: 32,
    position: "relative",
    marginBottom: 8,
    ...Theme.shadows.medium,
  },
  eye1: {
    position: "absolute",
    top: 20,
    left: 12,
    width: 8,
    height: 8,
    backgroundColor: Colors.textPrimary,
    borderRadius: 4,
  },
  eye2: {
    position: "absolute",
    top: 20,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: Colors.textPrimary,
    borderRadius: 4,
  },
  bigSmile: {
    position: "absolute",
    top: 28,
    left: "50%",
    marginLeft: -12,
    width: 24,
    height: 12,
    borderWidth: 2,
    borderColor: Colors.textPrimary,
    borderTopColor: "transparent",
    borderRadius: 12,
  },
  headphones: {
    position: "absolute",
    top: -8,
    left: "50%",
    marginLeft: -36,
    width: 72,
    height: 16,
  },
  headphonesBand: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 16,
    borderWidth: 4,
    borderColor: "#3B82F6",
    borderRadius: 50,
    backgroundColor: "transparent",
  },
  headphonesLeft: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 16,
    height: 16,
    backgroundColor: "#1E40AF",
    borderRadius: 8,
  },
  headphonesRight: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 16,
    height: 16,
    backgroundColor: "#1E40AF",
    borderRadius: 8,
  },
  body: {
    width: 80,
    height: 64,
    backgroundColor: "#FBBF24",
    borderRadius: Theme.borderRadius.lg,
    marginBottom: 8,
    position: "relative",
    ...Theme.shadows.medium,
  },
  armLeftCelebrating: {
    position: "absolute",
    top: -8,
    left: -24,
    width: 24,
    height: 56,
    backgroundColor: "#FDBA74",
    borderRadius: 50,
    transform: [{ rotate: "-45deg" }],
  },
  armRightCelebrating: {
    position: "absolute",
    top: -8,
    right: -24,
    width: 24,
    height: 56,
    backgroundColor: "#FDBA74",
    borderRadius: 50,
    transform: [{ rotate: "45deg" }],
  },
  handLeft: {
    position: "absolute",
    top: -24,
    left: -32,
    width: 16,
    height: 16,
    backgroundColor: "#FDBA74",
    borderRadius: 8,
  },
  handRight: {
    position: "absolute",
    top: -24,
    right: -32,
    width: 16,
    height: 16,
    backgroundColor: "#FDBA74",
    borderRadius: 8,
  },
  legsContainer: {
    position: "relative",
    width: 80,
    height: 64,
  },
  legLeft: {
    position: "absolute",
    top: 0,
    left: 8,
    width: 24,
    height: 64,
    backgroundColor: "#3B82F6",
    borderRadius: Theme.borderRadius.lg,
  },
  legRight: {
    position: "absolute",
    top: 0,
    right: 8,
    width: 24,
    height: 64,
    backgroundColor: "#3B82F6",
    borderRadius: Theme.borderRadius.lg,
  },
  shoeLeft: {
    position: "absolute",
    bottom: -8,
    left: 0,
    width: 32,
    height: 16,
    backgroundColor: "#EF4444",
    borderRadius: 50,
  },
  shoeRight: {
    position: "absolute",
    bottom: -8,
    right: 0,
    width: 32,
    height: 16,
    backgroundColor: "#EF4444",
    borderRadius: 50,
  },
  celebrationCoin: {
    position: "absolute",
    backgroundColor: Colors.coinGold,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    ...Theme.shadows.small,
  },
  celebrationCoin1: {
    top: 8,
    left: 48,
    width: 20,
    height: 20,
  },
  celebrationCoin2: {
    top: 0,
    right: 64,
    width: 16,
    height: 16,
  },
  celebrationCoin3: {
    top: 24,
    left: 64,
    width: 12,
    height: 12,
  },
  celebrationCoin4: {
    top: 16,
    right: 80,
    width: 12,
    height: 12,
  },
  bottomSection: {
    paddingHorizontal: Theme.spacing.lg,
    paddingBottom: Theme.spacing.xl,
  },
  progressDots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: Theme.spacing.sm,
    marginBottom: Theme.spacing.lg,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  dotActive: {
    width: 24,
    backgroundColor: Colors.textPrimary,
  },
  nextButtonContainer: {
    alignItems: "flex-end",
  },
  nextButton: {
    width: 56,
    height: 56,
    backgroundColor: Colors.buttonDark,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  progressIndicator: {
    alignItems: "center",
    paddingTop: Theme.spacing.md,
  },
  progressBar: {
    width: 32,
    height: 4,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
  },
});

export default OnboardingWalkthrough5;

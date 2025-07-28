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
import { OnboardingWalkthrough2NavigationProp } from "../types/navigation";
import { Colors, Theme } from "../constants/Colors";
import { ArrowRight } from "lucide-react-native";

const { width } = Dimensions.get("window");

const OnboardingWalkthrough2: React.FC = () => {
  const navigation = useNavigation<OnboardingWalkthrough2NavigationProp>();

  // Animation values for bouncing coins
  const bounceAnim1 = new Animated.Value(0);
  const bounceAnim2 = new Animated.Value(0);
  const bounceAnim3 = new Animated.Value(0);
  const bounceAnim4 = new Animated.Value(0);

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

    createBounceAnimation(bounceAnim1, 0).start();
    createBounceAnimation(bounceAnim2, 300).start();
    createBounceAnimation(bounceAnim3, 600).start();
    createBounceAnimation(bounceAnim4, 900).start();
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
          <Text style={styles.title}>Participa con solo unos céntimos</Text>
          <Text style={styles.description}>
            Compra boletos con pequeñas cantidades y entra en sorteos semanales.
            Cuantos más boletos, más oportunidades.
          </Text>
        </View>

        {/* 3D Leprechaun Illustration */}
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

          <Animated.View
            style={[
              styles.coin,
              styles.coin4,
              { transform: [{ translateY: bounceAnim4 }] },
            ]}
          >
            <View style={styles.coinInner} />
          </Animated.View>

          {/* Main 3D Leprechaun Character */}
          <View style={styles.leprechaunContainer}>
            {/* Hat */}
            <View style={styles.leprechaunHat}>
              <View style={styles.hatBand} />
              <View style={styles.hatBuckle} />
            </View>

            {/* Head */}
            <View style={styles.leprechaunHead}>
              {/* Eyes */}
              <View style={styles.eye1} />
              <View style={styles.eye2} />
              {/* Nose */}
              <View style={styles.nose} />
              {/* Smile */}
              <View style={styles.smile} />
              {/* Beard */}
              <View style={styles.beard} />
            </View>

            {/* Body */}
            <View style={styles.leprechaunBody}>
              {/* Belt */}
              <View style={styles.belt} />
              <View style={styles.beltBuckle} />
            </View>
          </View>

          {/* Pot of gold */}
          <View style={styles.potOfGold}>
            <View style={styles.goldCoins}>
              <View style={styles.potCoin1} />
              <View style={styles.potCoin2} />
              <View style={styles.potCoin3} />
            </View>
          </View>

          {/* Four-leaf clover */}
          <View style={styles.cloverContainer}>
            <View style={styles.cloverLeaf1} />
            <View style={styles.cloverLeaf2} />
            <View style={styles.cloverLeaf3} />
            <View style={styles.cloverLeaf4} />
            <View style={styles.cloverCenter} />
          </View>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Progress Dots */}
        <View style={styles.progressDots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Next Button */}
        <View style={styles.nextButtonContainer}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate("OnboardingWalkthrough3")}
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
    borderRadius: 50,
    backgroundColor: Colors.coinGold,
    justifyContent: "center",
    alignItems: "center",
    ...Theme.shadows.medium,
  },
  coin1: {
    top: 32,
    left: 32,
    width: 32,
    height: 32,
  },
  coin2: {
    top: 16,
    right: 48,
    width: 24,
    height: 24,
  },
  coin3: {
    top: 64,
    left: 16,
    width: 40,
    height: 40,
  },
  coin4: {
    top: 96,
    right: 32,
    width: 28,
    height: 28,
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
  leprechaunContainer: {
    alignItems: "center",
  },
  leprechaunHat: {
    width: 64,
    height: 48,
    backgroundColor: "#16A34A",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginBottom: -8,
    ...Theme.shadows.medium,
  },
  hatBand: {
    position: "absolute",
    bottom: 0,
    left: -4,
    right: -4,
    height: 8,
    backgroundColor: "#15803D",
    borderRadius: 50,
  },
  hatBuckle: {
    position: "absolute",
    top: 8,
    left: "50%",
    marginLeft: -8,
    width: 16,
    height: 24,
    backgroundColor: Colors.coinGold,
    borderRadius: 2,
  },
  leprechaunHead: {
    width: 80,
    height: 80,
    backgroundColor: "#FDBA74",
    borderRadius: 40,
    position: "relative",
    ...Theme.shadows.medium,
  },
  eye1: {
    position: "absolute",
    top: 24,
    left: 12,
    width: 8,
    height: 8,
    backgroundColor: Colors.textPrimary,
    borderRadius: 4,
  },
  eye2: {
    position: "absolute",
    top: 24,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: Colors.textPrimary,
    borderRadius: 4,
  },
  nose: {
    position: "absolute",
    top: 32,
    left: "50%",
    marginLeft: -2,
    width: 4,
    height: 8,
    backgroundColor: "#FB923C",
    borderRadius: 2,
  },
  smile: {
    position: "absolute",
    top: 40,
    left: "50%",
    marginLeft: -12,
    width: 24,
    height: 4,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
  },
  beard: {
    position: "absolute",
    bottom: 8,
    left: "50%",
    marginLeft: -24,
    width: 48,
    height: 32,
    backgroundColor: "#EA580C",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  leprechaunBody: {
    width: 64,
    height: 96,
    backgroundColor: "#16A34A",
    borderRadius: Theme.borderRadius.lg,
    marginTop: -8,
    position: "relative",
    ...Theme.shadows.medium,
  },
  belt: {
    position: "absolute",
    top: 64,
    left: -4,
    right: -4,
    height: 8,
    backgroundColor: Colors.textPrimary,
    borderRadius: 4,
  },
  beltBuckle: {
    position: "absolute",
    top: 60,
    left: "50%",
    marginLeft: -8,
    width: 16,
    height: 16,
    backgroundColor: Colors.coinGold,
    borderRadius: 2,
  },
  potOfGold: {
    position: "absolute",
    bottom: 16,
    right: 32,
    width: 48,
    height: 40,
    backgroundColor: "#374151",
    borderRadius: Theme.borderRadius.lg,
    ...Theme.shadows.medium,
  },
  goldCoins: {
    position: "absolute",
    top: -8,
    left: "50%",
    marginLeft: -32,
    width: 64,
    height: 24,
    backgroundColor: Colors.coinGold,
    borderRadius: 50,
    overflow: "hidden",
  },
  potCoin1: {
    position: "absolute",
    top: 4,
    left: 8,
    width: 12,
    height: 12,
    backgroundColor: Colors.coinGoldInner,
    borderRadius: 6,
  },
  potCoin2: {
    position: "absolute",
    top: 8,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: Colors.coinGoldInner,
    borderRadius: 4,
  },
  potCoin3: {
    position: "absolute",
    bottom: 4,
    left: "50%",
    marginLeft: -8,
    width: 16,
    height: 8,
    backgroundColor: Colors.coinGoldInner,
    borderRadius: 8,
  },
  cloverContainer: {
    position: "absolute",
    top: 128,
    right: 16,
    width: 32,
    height: 32,
    position: "relative",
  },
  cloverLeaf1: {
    position: "absolute",
    top: 0,
    left: 8,
    width: 12,
    height: 12,
    backgroundColor: "#16A34A",
    borderRadius: 6,
  },
  cloverLeaf2: {
    position: "absolute",
    top: 8,
    left: 0,
    width: 12,
    height: 12,
    backgroundColor: "#16A34A",
    borderRadius: 6,
  },
  cloverLeaf3: {
    position: "absolute",
    top: 8,
    right: 0,
    width: 12,
    height: 12,
    backgroundColor: "#16A34A",
    borderRadius: 6,
  },
  cloverLeaf4: {
    position: "absolute",
    bottom: 0,
    left: 8,
    width: 12,
    height: 12,
    backgroundColor: "#16A34A",
    borderRadius: 6,
  },
  cloverCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -2,
    marginLeft: -2,
    width: 4,
    height: 4,
    backgroundColor: "#15803D",
    borderRadius: 2,
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

export default OnboardingWalkthrough2;

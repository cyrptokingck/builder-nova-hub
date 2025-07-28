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

const { width, height } = Dimensions.get("window");

const LandingScreen = () => {
  const navigation = useNavigation();

  // Animation values
  const pulseAnim = new Animated.Value(1);
  const coinBounce1 = new Animated.Value(0);
  const coinBounce2 = new Animated.Value(0);
  const coinBounce3 = new Animated.Value(0);
  const coinBounce4 = new Animated.Value(0);

  React.useEffect(() => {
    // Rocket fire pulse animation
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    );

    // Coin bounce animations with different delays
    const createCoinBounce = (animValue: Animated.Value, delay: number) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            toValue: -15,
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

    pulseAnimation.start();
    createCoinBounce(coinBounce1, 0).start();
    createCoinBounce(coinBounce2, 500).start();
    createCoinBounce(coinBounce3, 1000).start();
    createCoinBounce(coinBounce4, 1500).start();

    return () => {
      pulseAnimation.stop();
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

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LottoCoin</Text>
          <Text style={styles.subtitle}>
            La forma justa, divertida y transparente de jugar con criptomonedas.
          </Text>
        </View>

        {/* 3D Rocket Illustration */}
        <View style={styles.rocketContainer}>
          {/* Rocket Body */}
          <View style={styles.rocketBody}>
            {/* Window */}
            <View style={styles.rocketWindow} />
            {/* Body stripes */}
            <View style={[styles.rocketStripe, { top: 64 }]} />
            <View style={[styles.rocketStripe, { top: 80 }]} />
          </View>

          {/* Rocket Fins */}
          <View style={[styles.rocketFin, styles.rocketFinLeft]} />
          <View style={[styles.rocketFin, styles.rocketFinRight]} />

          {/* Fire/Exhaust */}
          <Animated.View
            style={[styles.rocketFire, { transform: [{ scaleY: pulseAnim }] }]}
          />

          {/* Clouds */}
          <View style={[styles.cloud, styles.cloud1]} />
          <View style={[styles.cloud, styles.cloud2]} />
          <View style={[styles.cloud, styles.cloud3]} />

          {/* Floating Coins */}
          <Animated.View
            style={[
              styles.floatingCoin,
              styles.coin1,
              { transform: [{ translateY: coinBounce1 }] },
            ]}
          >
            <View style={styles.coinInner} />
            <Text style={styles.coinText}>$</Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.floatingCoin,
              styles.coin2,
              { transform: [{ translateY: coinBounce2 }] },
            ]}
          >
            <View style={styles.coinInner} />
            <Text style={styles.coinText}>$</Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.floatingCoin,
              styles.coin3,
              { transform: [{ translateY: coinBounce3 }] },
            ]}
          >
            <View style={styles.coinInner} />
            <Text style={styles.coinText}>$</Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.floatingCoin,
              styles.coin4,
              { transform: [{ translateY: coinBounce4 }] },
            ]}
          >
            <View style={styles.coinInner} />
          </Animated.View>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate("CrearCuenta")}
        >
          <Text style={styles.createAccountText}>Crear cuenta</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginPrompt}>¿Tienes una cuenta? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("IniciarSesion")}
          >
            <Text style={styles.loginLink}>Inicia sesión</Text>
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
    backgroundColor: "#CAF206",
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  timeText: {
    color: "#000000",
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
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  titleContainer: {
    marginBottom: 32,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "#6C6C6C",
    textAlign: "center",
    maxWidth: 280,
    lineHeight: 24,
  },
  rocketContainer: {
    width: 320,
    height: 320,
    position: "relative",
    marginBottom: 32,
  },
  rocketBody: {
    position: "absolute",
    top: 32,
    left: "50%",
    marginLeft: -48,
    width: 96,
    height: 160,
    backgroundColor: "#3B82F6",
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  rocketWindow: {
    position: "absolute",
    top: 24,
    left: "50%",
    marginLeft: -16,
    width: 32,
    height: 32,
    backgroundColor: "#FB923C",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#EA580C",
  },
  rocketStripe: {
    position: "absolute",
    left: 8,
    right: 8,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 2,
  },
  rocketFin: {
    position: "absolute",
    bottom: 80,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 30,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#1E40AF",
  },
  rocketFinLeft: {
    left: 48,
  },
  rocketFinRight: {
    right: 48,
  },
  rocketFire: {
    position: "absolute",
    bottom: 32,
    left: "50%",
    marginLeft: -32,
    width: 64,
    height: 80,
    backgroundColor: "#EF4444",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    opacity: 0.9,
  },
  cloud: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 50,
    opacity: 0.8,
  },
  cloud1: {
    bottom: 0,
    left: "50%",
    marginLeft: -64,
    width: 128,
    height: 64,
  },
  cloud2: {
    bottom: 8,
    left: "50%",
    marginLeft: -32,
    width: 96,
    height: 48,
    opacity: 0.6,
  },
  cloud3: {
    bottom: 8,
    left: "50%",
    marginLeft: -96,
    width: 80,
    height: 40,
    opacity: 0.6,
  },
  floatingCoin: {
    position: "absolute",
    backgroundColor: "#FBBF24",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  coin1: {
    top: 16,
    left: 16,
    width: 48,
    height: 48,
  },
  coin2: {
    top: 48,
    right: 32,
    width: 40,
    height: 40,
  },
  coin3: {
    top: 80,
    left: 32,
    width: 32,
    height: 32,
  },
  coin4: {
    top: 128,
    right: 16,
    width: 24,
    height: 24,
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
  coinText: {
    color: "#92400E",
    fontWeight: "bold",
    fontSize: 12,
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  createAccountButton: {
    width: "100%",
    backgroundColor: "#000000",
    borderRadius: 50,
    paddingVertical: 24,
    alignItems: "center",
    marginBottom: 16,
  },
  createAccountText: {
    color: "#CAF206",
    fontSize: 18,
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  loginPrompt: {
    color: "#6C6C6C",
    fontSize: 16,
  },
  loginLink: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    textDecorationLine: "underline",
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

export default LandingScreen;

import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OnboardingWalkthrough4NavigationProp } from '../types/navigation';
import { Colors, Theme } from '../constants/Colors';
import { ArrowRight, Check } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const OnboardingWalkthrough4: React.FC = () => {
  const navigation = useNavigation<OnboardingWalkthrough4NavigationProp>();
  
  // Animation values for floating coins
  const bounceAnim1 = new Animated.Value(0);
  const bounceAnim2 = new Animated.Value(0);

  useEffect(() => {
    const createBounceAnimation = (animValue: Animated.Value, delay: number): Animated.CompositeAnimation => {
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
        ])
      );
    };

    createBounceAnimation(bounceAnim1, 0).start();
    createBounceAnimation(bounceAnim2, 300).start();
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
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Código abierto, premios garantizados
          </Text>
          <Text style={styles.description}>
            Usamos contratos inteligentes auditados, reglas claras y probabilidades públicas. Todo está verificado y nadie puede manipularlo.
          </Text>
        </View>

        {/* 3D Illustration - Security/Verification theme */}
        <View style={styles.illustrationContainer}>
          {/* Floating coins */}
          <Animated.View 
            style={[
              styles.coin,
              styles.coin1,
              { transform: [{ translateY: bounceAnim1 }] }
            ]}
          >
            <View style={styles.coinInner} />
            <Text style={styles.coinDollar}>$</Text>
          </Animated.View>

          <Animated.View 
            style={[
              styles.coin,
              styles.coin2,
              { transform: [{ translateY: bounceAnim2 }] }
            ]}
          >
            <View style={styles.coinInner} />
            <Text style={styles.coinDollar}>$</Text>
          </Animated.View>

          {/* Security Shield with checkmark */}
          <View style={styles.securityShield}>
            <View style={styles.shieldCheckmark}>
              <Check size={20} color={Colors.success} />
            </View>
            {/* Gold coins on shield */}
            <View style={styles.shieldCoin1} />
            <View style={styles.shieldCoin2} />
          </View>

          {/* Document/Contract */}
          <View style={styles.document}>
            <View style={styles.documentHeader} />
            <View style={styles.documentLine1} />
            <View style={styles.documentLine2} />
            <View style={styles.documentLine3} />
            <View style={styles.documentSignature} />
          </View>

          {/* Lock with coin */}
          <View style={styles.lockContainer}>
            {/* Lock shackle */}
            <View style={styles.lockShackle} />
            {/* Lock body */}
            <View style={styles.lockBody}>
              {/* Keyhole */}
              <View style={styles.keyhole} />
              <View style={styles.keyholeSlot} />
            </View>
            {/* Coin with dollar sign */}
            <View style={styles.lockCoin}>
              <View style={styles.lockCoinInner} />
              <Text style={styles.lockCoinText}>$</Text>
            </View>
          </View>

          {/* Additional floating elements */}
          <View style={styles.floatingElement1} />
          <View style={styles.floatingElement2} />
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Progress Dots */}
        <View style={styles.progressDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
        </View>

        {/* Next Button */}
        <View style={styles.nextButtonContainer}>
          <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => navigation.navigate('OnboardingWalkthrough5')}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.lg,
    paddingTop: Theme.spacing.md,
  },
  timeText: {
    color: Colors.textPrimary,
    fontSize: Theme.fontSize.md,
    fontWeight: Theme.fontWeight.semibold,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.xs,
  },
  signalBars: {
    flexDirection: 'row',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryLevel: {
    width: 16,
    height: 8,
    backgroundColor: Colors.white,
    borderRadius: 1,
  },
  skipContainer: {
    alignItems: 'flex-end',
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Theme.spacing.lg,
  },
  textContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: Theme.fontSize.xxxl,
    fontWeight: Theme.fontWeight.bold,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Theme.spacing.md,
    maxWidth: width * 0.8,
    lineHeight: 34,
  },
  description: {
    fontSize: Theme.fontSize.md,
    color: Colors.textSecondary,
    textAlign: 'center',
    maxWidth: width * 0.85,
    lineHeight: 22,
  },
  illustrationContainer: {
    width: 280,
    height: 280,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coin: {
    position: 'absolute',
    backgroundColor: Colors.coinGold,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    ...Theme.shadows.medium,
  },
  coin1: {
    top: 32,
    left: 32,
    width: 32,
    height: 32,
  },
  coin2: {
    top: 64,
    right: 32,
    width: 40,
    height: 40,
  },
  coinInner: {
    position: 'absolute',
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
  securityShield: {
    position: 'absolute',
    top: 48,
    left: 16,
    width: 64,
    height: 80,
    backgroundColor: '#3B82F6',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: Theme.borderRadius.lg,
    borderBottomRightRadius: Theme.borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    ...Theme.shadows.large,
  },
  shieldCheckmark: {
    position: 'absolute',
    top: 12,
    width: 32,
    height: 32,
    backgroundColor: Colors.white,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shieldCoin1: {
    position: 'absolute',
    top: 48,
    left: 4,
    width: 16,
    height: 16,
    backgroundColor: Colors.coinGold,
    borderRadius: 8,
  },
  shieldCoin2: {
    position: 'absolute',
    top: 56,
    right: 4,
    width: 12,
    height: 12,
    backgroundColor: Colors.coinGold,
    borderRadius: 6,
  },
  document: {
    position: 'absolute',
    top: 32,
    right: 16,
    width: 48,
    height: 64,
    backgroundColor: Colors.white,
    borderRadius: Theme.borderRadius.lg,
    borderWidth: 2,
    borderColor: Colors.gray200,
    padding: Theme.spacing.xs,
    ...Theme.shadows.medium,
  },
  documentHeader: {
    width: '100%',
    height: 4,
    backgroundColor: '#FB923C',
    borderRadius: 2,
    marginBottom: Theme.spacing.xs,
  },
  documentLine1: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.gray300,
    borderRadius: 1,
    marginBottom: 2,
  },
  documentLine2: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.gray300,
    borderRadius: 1,
    marginBottom: 2,
  },
  documentLine3: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.gray300,
    borderRadius: 1,
    marginBottom: Theme.spacing.xs,
  },
  documentSignature: {
    position: 'absolute',
    bottom: 8,
    right: 4,
    width: 12,
    height: 12,
    backgroundColor: Colors.coinGold,
    borderRadius: 6,
  },
  lockContainer: {
    position: 'absolute',
    bottom: 64,
    left: '50%',
    marginLeft: -40,
    alignItems: 'center',
  },
  lockShackle: {
    width: 48,
    height: 48,
    borderWidth: 16,
    borderColor: '#7C3AED',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomWidth: 0,
    marginBottom: -8,
  },
  lockBody: {
    width: 80,
    height: 64,
    backgroundColor: '#7C3AED',
    borderRadius: Theme.borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    ...Theme.shadows.large,
  },
  keyhole: {
    width: 16,
    height: 16,
    backgroundColor: '#5B21B6',
    borderRadius: 8,
    marginBottom: 4,
  },
  keyholeSlot: {
    width: 8,
    height: 16,
    backgroundColor: '#5B21B6',
  },
  lockCoin: {
    position: 'absolute',
    top: -12,
    right: -8,
    width: 32,
    height: 32,
    backgroundColor: Colors.coinGold,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    ...Theme.shadows.medium,
  },
  lockCoinInner: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    backgroundColor: Colors.coinGoldInner,
    borderRadius: 12,
  },
  lockCoinText: {
    color: Colors.coinText,
    fontWeight: Theme.fontWeight.bold,
    fontSize: 10,
  },
  floatingElement1: {
    position: 'absolute',
    bottom: 32,
    left: 32,
    width: 24,
    height: 24,
    backgroundColor: Colors.coinGold,
    borderRadius: 12,
    ...Theme.shadows.small,
  },
  floatingElement2: {
    position: 'absolute',
    bottom: 16,
    right: 32,
    width: 32,
    height: 32,
    backgroundColor: Colors.coinGold,
    borderRadius: 16,
    ...Theme.shadows.small,
  },
  bottomSection: {
    paddingHorizontal: Theme.spacing.lg,
    paddingBottom: Theme.spacing.xl,
  },
  progressDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Theme.spacing.sm,
    marginBottom: Theme.spacing.lg,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  dotActive: {
    width: 24,
    backgroundColor: Colors.textPrimary,
  },
  nextButtonContainer: {
    alignItems: 'flex-end',
  },
  nextButton: {
    width: 56,
    height: 56,
    backgroundColor: Colors.buttonDark,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressIndicator: {
    alignItems: 'center',
    paddingTop: Theme.spacing.md,
  },
  progressBar: {
    width: 32,
    height: 4,
    backgroundColor: Colors.textPrimary,
    borderRadius: 2,
  },
});

export default OnboardingWalkthrough4;

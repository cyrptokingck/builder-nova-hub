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
import { ArrowRight } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

const OnboardingWalkthrough1 = () => {
  const navigation = useNavigation();
  
  // Animation values for bouncing coins
  const bounceAnim1 = new Animated.Value(0);
  const bounceAnim2 = new Animated.Value(0);
  const bounceAnim3 = new Animated.Value(0);

  useEffect(() => {
    const createBounceAnimation = (animValue: Animated.Value, delay: number) => {
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
    createBounceAnimation(bounceAnim3, 600).start();
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
            Juega y gana con criptomonedas, cada semana
          </Text>
          <Text style={styles.description}>
            LottoCoin es una plataforma de lotería en USDT (TRC-20) donde los premios se reparten siempre de forma garantizada y transparente.
          </Text>
        </View>

        {/* 3D Money Bag Illustration */}
        <View style={styles.illustrationContainer}>
          {/* Main money bag */}
          <View style={styles.moneyBag}>
            <View style={styles.bagTie} />
            <Text style={styles.dollarSign}>$</Text>
          </View>

          {/* Floating coins with animations */}
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

          <Animated.View 
            style={[
              styles.coin,
              styles.coin3,
              { transform: [{ translateY: bounceAnim3 }] }
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
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Next Button */}
        <View style={styles.nextButtonContainer}>
          <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => navigation.navigate('OnboardingWalkthrough2')}
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
    backgroundColor: '#CAF206',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  timeText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  signalBars: {
    flexDirection: 'row',
    gap: 2,
  },
  signalBar: {
    width: 4,
    height: 12,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
  wifiIcon: {
    width: 16,
    height: 12,
    backgroundColor: '#000000',
    borderRadius: 2,
    marginLeft: 4,
  },
  battery: {
    width: 24,
    height: 12,
    backgroundColor: '#000000',
    borderRadius: 2,
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryLevel: {
    width: 16,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  skipContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  skipText: {
    color: '#6C6C6C',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  textContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 16,
    maxWidth: 280,
    lineHeight: 34,
  },
  description: {
    fontSize: 16,
    color: '#6C6C6C',
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 22,
  },
  illustrationContainer: {
    width: 280,
    height: 280,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moneyBag: {
    width: 80,
    height: 100,
    backgroundColor: '#E5E7EB',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    position: 'relative',
  },
  bagTie: {
    position: 'absolute',
    top: -12,
    width: 24,
    height: 24,
    backgroundColor: '#EF4444',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  dollarSign: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#16A34A',
  },
  coin: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: '#FBBF24',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  coin1: {
    top: 40,
    left: 40,
    width: 40,
    height: 40,
  },
  coin2: {
    top: 20,
    right: 50,
    width: 32,
    height: 32,
  },
  coin3: {
    bottom: 60,
    left: 20,
    width: 36,
    height: 36,
  },
  coinInner: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    backgroundColor: '#FDE047',
    borderRadius: 50,
  },
  coinDollar: {
    color: '#92400E',
    fontWeight: 'bold',
    fontSize: 12,
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  progressDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  dotActive: {
    width: 24,
    backgroundColor: '#000000',
  },
  nextButtonContainer: {
    alignItems: 'flex-end',
  },
  nextButton: {
    width: 56,
    height: 56,
    backgroundColor: '#000000',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressIndicator: {
    alignItems: 'center',
    paddingTop: 16,
  },
  progressBar: {
    width: 32,
    height: 4,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
});

export default OnboardingWalkthrough1;

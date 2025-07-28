import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowRight } from 'lucide-react-native';

const OnboardingWalkthrough2 = () => {
  const navigation = useNavigation();

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
            Participa con solo unos céntimos
          </Text>
          <Text style={styles.description}>
            Compra boletos con pequeñas cantidades y entra en sorteos semanales. Cuantos más boletos, más oportunidades.
          </Text>
        </View>

        {/* Leprechaun Illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.leprechaun}>
            <Text style={styles.leprechaunText}>🍀</Text>
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
            onPress={() => navigation.navigate('OnboardingWalkthrough3')}
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
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leprechaun: {
    width: 120,
    height: 120,
    backgroundColor: '#16A34A',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  leprechaunText: {
    fontSize: 48,
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

export default OnboardingWalkthrough2;

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../navigation/AppNavigator';

const COLORS = {
  primary: '#10B981',
  primaryDark: '#059669',
  primaryLight: '#A7F3D0',
  white: '#FFFFFF',
  gray: '#F3F4F6',
  darkGray: '#4B5563',
  text: '#1F2937',
};

export default function GetStartedScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.primary} />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.heroCircle} />

          <Image
            source={require('../assets/getstarted.png')}
            style={styles.headerImage}
            resizeMode="contain"
          />

          <Text style={styles.mainTitle}>Welcome to</Text>
          <Text style={styles.appName}>Resumio</Text>
          <Text style={styles.subtitle}>
            Create a professional resume in minutes
          </Text>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <FeatureCard
            icon="✓"
            title="Easy to Use"
            description="Simple interface to create and edit your resume"
          />
          <FeatureCard
            icon="✓"
            title="Multiple Templates"
            description="Choose from professionally designed resume templates"
          />
          <FeatureCard
            icon="✓"
            title="Export Anywhere"
            description="Download as PDF or share directly with employers"
          />
          <FeatureCard
            icon="✓"
            title="Real-time Preview"
            description="See your resume changes instantly as you type"
          />
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Register')}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Build your dream resume today</Text>
        </View>
      </ScrollView>
    </View>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <View style={styles.featureCard}>
    <View style={styles.iconContainer}>
      <Text style={styles.icon}>{icon}</Text>
    </View>
    <View style={styles.featureContent}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  headerSection: {
    backgroundColor: COLORS.primary,
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.primaryLight,
    opacity: 0.3,
    position: 'absolute',
    top: -50,
    right: -50,
  },
  headerImage: {
    width: 400,
    height: 400,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: '400',
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  appName: {
    fontSize: 45,
    fontWeight: '900',
    color: COLORS.white,
    marginBottom: 15,
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.primaryLight,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
  featuresSection: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  featureCard: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 18,
    backgroundColor: COLORS.gray,
    borderRadius: 12,
    alignItems: 'flex-start',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 2,
  },
  icon: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: '700',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: COLORS.darkGray,
    lineHeight: 20,
  },
  ctaSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.white,
    letterSpacing: 0.5,
  },
  secondaryButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
    letterSpacing: 0.5,
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.darkGray,
    fontStyle: 'italic',
    letterSpacing: 0.3,
  },
});

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../navigation/AppNavigator';

const COLORS = {
  primary: '#10B981',
  white: '#FFFFFF',
  lightGray: '#F9FAFB',
  gray: '#F3F4F6',
  borderGray: '#E5E7EB',
  darkGray: '#6B7280',
  text: '#111827',
  textSecondary: '#6B7280',
  google: '#DB4437',
  facebook: '#1877F2',
  twitter: '#1DA1F2',
};

const RegisterScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleRegister = () => {
    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      Alert.alert('Validation', 'Please fill all required fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Validation', "Passwords don't match");
      return;
    }
    if (!agreeToTerms) {
      Alert.alert('Validation', 'Please agree to the terms and conditions');
      return;
    }

    // TODO: implement actual registration logic
    Alert.alert('Success', `Welcome, ${fullName}!`);
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <Image
          source={require('../assets/logo-new.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Create your account</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
            placeholderTextColor={COLORS.darkGray}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            placeholderTextColor={COLORS.darkGray}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            placeholderTextColor={COLORS.darkGray}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm password</Text>
          <TextInput
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
            placeholderTextColor={COLORS.darkGray}
          />
        </View>

        {/* Terms Checkbox */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setAgreeToTerms(!agreeToTerms)}
          activeOpacity={0.7}
        >
          <View
            style={[styles.checkbox, agreeToTerms && styles.checkboxChecked]}
          >
            {agreeToTerms && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxLabel}>
            I agree to the <Text style={styles.link}>Terms & Conditions</Text>
          </Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleRegister}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryButtonText}>Register</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.orRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Alert.alert('Google', 'Continue with Google')}
            activeOpacity={0.85}
          >
            <View style={[styles.socialIcon, { backgroundColor: '#FEE2E2' }]}>
              <Text style={styles.socialIconText}>G</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Alert.alert('Facebook', 'Continue with Facebook')}
            activeOpacity={0.85}
          >
            <View style={[styles.socialIcon, { backgroundColor: '#DBEAFE' }]}>
              <Text style={styles.socialIconText}>f</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => Alert.alert('Twitter', 'Continue with Twitter')}
            activeOpacity={0.85}
          >
            <View style={[styles.socialIcon, { backgroundColor: '#DBEAFE' }]}>
              <Text style={styles.socialIconText}>𝕏</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Bottom Text */}
        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.7}
          >
            <Text style={styles.linkTextBold}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    padding: 24,
    paddingTop: 20,
    backgroundColor: COLORS.white,
  },
  headerImage: {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.text,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
    paddingHorizontal: 16,
    fontSize: 15,
    color: COLORS.text,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.borderGray,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  checkmark: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '700',
  },
  checkboxLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    flex: 1,
  },
  link: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 16,
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.borderGray,
  },
  orText: {
    marginHorizontal: 16,
    color: COLORS.darkGray,
    fontSize: 14,
    fontWeight: '500',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 24,
  },
  socialButton: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderGray,
  },
  socialIconText: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  bottomText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  linkTextBold: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 14,
  },
});

export default RegisterScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const COLORS = {
  white: '#FFFFFF',
  text: '#111827',
  textSecondary: '#6B7280',
};

const MyResume = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Resumes</Text>
      <Text style={styles.placeholder}>Your resumes will appear here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 12,
  },
  placeholder: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});

export default MyResume;

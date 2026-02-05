import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const COLORS = {
  white: '#FFFFFF',
  text: '#111827',
  textSecondary: '#6B7280',
  cardBg: '#F9FAFB',
};

const MyProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topCard}>
        <View style={styles.avatarWrap}>
          <Image
            source={require('../assets/getstarted.png')}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Lucas Bennett</Text>
          <Text style={styles.email}>lucasbennett@gmail.com</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>51</Text>
          <Text style={styles.statLabel}>Balance</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>1</Text>
          <Text style={styles.statLabel}>Level</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>1.5K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weekly XP</Text>
        <View style={styles.chartPlaceholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
  },
  topCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBg,
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  avatarWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    overflow: 'hidden',
    marginRight: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  email: {
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    width: '48%',
    backgroundColor: COLORS.cardBg,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },
  statLabel: {
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  chartPlaceholder: {
    height: 140,
    backgroundColor: COLORS.cardBg,
    borderRadius: 12,
  },
});

export default MyProfile;

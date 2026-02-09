import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

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

const { width } = Dimensions.get('window');

interface Template {
  id: string;
  name: string;
  accent1: string;
  accent2: string;
  thumbnail?: React.ReactNode;
}

const TEMPLATES: Template[] = [
  {
    id: '1',
    name: 'Albany',
    accent1: '#E0E7FF',
    accent2: '#4F46E5',
  },
  {
    id: '2',
    name: 'Amsterdam',
    accent1: '#FEE2E2',
    accent2: '#DC2626',
  },
  {
    id: '3',
    name: 'Barcelona',
    accent1: '#DBEAFE',
    accent2: '#0284C7',
  },
  {
    id: '4',
    name: 'Berlin',
    accent1: '#FECACA',
    accent2: '#F97316',
  },
  {
    id: '5',
    name: 'Dubai',
    accent1: '#E0E7FF',
    accent2: '#1E40AF',
  },
  {
    id: '6',
    name: 'Paris',
    accent1: '#F5D0A9',
    accent2: '#D97706',
  },
];

const TemplateCard: React.FC<{ template: Template }> = ({ template }) => {
  const cardWidth = (width - 48) / 2;

  return (
    <TouchableOpacity style={[styles.templateCard, { width: cardWidth }]}>
      {/* Template Visual Preview */}
      

      {/* Template Name */}
      <Text style={styles.templateName}>{template.name}</Text>
    </TouchableOpacity>
  );
};

const Home = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Title */}
      <Text style={styles.pageTitle}>Resume templates</Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 20,
  },
  templatesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  templateCard: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderGray,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  templatePreview: {
    height: 200,
    justifyContent: 'flex-start',
  },
  accentBar: {
    height: 40,
    width: '100%',
  },
  previewContent: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  previewCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  previewLines: {
    flex: 1,
    justifyContent: 'center',
    gap: 6,
  },
  previewLine: {
    height: 6,
    borderRadius: 3,
  },
  templateName: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    padding: 12,
    textAlign: 'center',
  },
});

export default Home;

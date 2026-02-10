import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, styles } from './styles';

const TEMPLATES = [
  {
    id: 'classic_1',
    name: 'Classic',
    img: require('../../assets/classic.png'),
  },
  {
    id: 'modern_1',
    name: 'Modern',
    img: require('../../assets/modern.jpeg'),
  },
];

export default function TemplateSelect({ setStep }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Choose Template</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {TEMPLATES.map(t => (
          <TouchableOpacity
            key={t.id}
            onPress={() => {
              setStep((prev: any) => ({
                ...prev,
                resume: { ...prev.resume, templateKey: t.id },
              }));
              setStep(2);
            }}
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 12,
              marginBottom: 20,
              overflow: 'hidden',
            }}
          >
            <Image source={t.img} style={{ height: 350, width: '100%' }} />
            <Text style={{ padding: 12, fontWeight: '700' }}>{t.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

import React, { useEffect } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export default function CertificationsScreen({
  resume,
  setResume,
  setStep,
}: any) {
  const certifications = resume.certifications;

  // Ensure at least one certification exists
  useEffect(() => {
    if (certifications.length === 0) {
      addCertification();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateField = (
    index: number,
    key: string,
    value: string,
  ) => {
    const updated = [...certifications];

    updated[index] = {
      ...updated[index],
      [key]:
        key === 'grade'
          ? value === ''
            ? undefined
            : Number(value)
          : value,
    };

    setResume({
      ...resume,
      certifications: updated,
    });
  };

  const addCertification = () => {
    setResume({
      ...resume,
      certifications: [
        ...certifications,
        {
          name: '',
          grade: undefined,
          date: '',
          link: '',
          description: '',
        },
      ],
    });
  };

  const removeCertification = (index: number) => {
    if (certifications.length === 1) return;

    setResume({
      ...resume,
      certifications: certifications.filter(
        (_: any, i: number) => i !== index,
      ),
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Certifications</Text>

      {certifications.map((cert: any, index: number) => (
        <View key={index} style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Certification Name *"
            placeholderTextColor="#9CA3AF"
            value={cert.name}
            onChangeText={t =>
              updateField(index, 'name', t)
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Date (e.g. Aug 2024) *"
            placeholderTextColor="#9CA3AF"
            value={cert.date}
            onChangeText={t =>
              updateField(index, 'date', t)
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Grade / Score (optional)"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={
              cert.grade !== undefined
                ? cert.grade.toString()
                : ''
            }
            onChangeText={t =>
              updateField(index, 'grade', t)
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Certificate Link (optional)"
            placeholderTextColor="#9CA3AF"
            value={cert.link}
            onChangeText={t =>
              updateField(index, 'link', t)
            }
          />

          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Description (optional)"
            placeholderTextColor="#9CA3AF"
            multiline
            value={cert.description}
            onChangeText={t =>
              updateField(index, 'description', t)
            }
          />

          {/* ACTION BUTTONS */}
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[
                styles.removeBtn,
                certifications.length === 1 && styles.disabledBtn,
              ]}
              onPress={() => removeCertification(index)}
              disabled={certifications.length === 1}
            >
              <MaterialCommunityIcons
                name="delete"
                size={18}
                color={
                  certifications.length === 1
                    ? '#9CA3AF'
                    : '#EF4444'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.addBtn}
              onPress={addCertification}
            >
              <MaterialCommunityIcons
                name="plus"
                size={18}
                color="#10B981"
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={[styles.addBtns, { marginTop: 16 }]}
        onPress={() => setStep(8)}
      >
        <Text style={styles.btnText}>Preview</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

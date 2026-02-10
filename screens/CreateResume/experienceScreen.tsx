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

export default function ExperienceScreen({
  resume,
  setResume,
  setStep,
}: any) {
  const experience = resume.experience;

  useEffect(() => {
    if (experience.length === 0) {
      addExperience();
    }
  }, []);

  const updateField = (
    index: number,
    key: string,
    value: string,
  ) => {
    const updated = [...experience];

    updated[index] = {
      ...updated[index],
      [key]: value || undefined,
    };

    setResume({
      ...resume,
      experience: updated,
    });
  };

  const addExperience = () => {
    setResume({
      ...resume,
      experience: [
        ...experience,
        {
          company: '',
          jobTitle: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    });
  };

  const removeExperience = (index: number) => {
    if (experience.length === 1) return;

    setResume({
      ...resume,
      experience: experience.filter((_: any, i: number) => i !== index),
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Experience</Text>

      {experience.map((exp: any, index: number) => (
        <View key={index} style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Company Name *"
            placeholderTextColor="#9CA3AF"
            value={exp.company}
            onChangeText={t =>
              updateField(index, 'company', t)
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Job Title *"
            placeholderTextColor="#9CA3AF"
            value={exp.jobTitle}
            onChangeText={t =>
              updateField(index, 'jobTitle', t)
            }
          />

          <TextInput
            style={styles.input}
            placeholder="Start Date (e.g. Jan 2023) *"
            placeholderTextColor="#9CA3AF"
            value={exp.startDate}
            onChangeText={t =>
              updateField(index, 'startDate', t)
            }
          />

          <TextInput
            style={styles.input}
            placeholder="End Date (optional)"
            placeholderTextColor="#9CA3AF"
            value={exp.endDate}
            onChangeText={t =>
              updateField(index, 'endDate', t)
            }
          />

          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Job Description"
            placeholderTextColor="#9CA3AF"
            multiline
            value={exp.description}
            onChangeText={t =>
              updateField(index, 'description', t)
            }
          />

          {/* ACTION BUTTONS */}
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[
                styles.removeBtn,
                experience.length === 1 && styles.disabledBtn,
              ]}
              onPress={() => removeExperience(index)}
              disabled={experience.length === 1}
            >
              <MaterialCommunityIcons
                name="delete"
                size={18}
                color={
                  experience.length === 1 ? '#9CA3AF' : '#EF4444'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.addBtn}
              onPress={addExperience}
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
        onPress={() => setStep(6)}
      >
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

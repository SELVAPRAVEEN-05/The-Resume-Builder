import React, { useEffect } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Resume } from '../../types/resume.type';
import { styles } from './styles';

interface Props {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

type EducationItem = Resume['education'][number];

const EducationScreen: React.FC<Props> = ({ resume, setResume, setStep }) => {
  const education = resume.education;

  // Ensure at least one education entry exists
  useEffect(() => {
    if (education.length === 0) {
      addEducation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateField = (
    index: number,
    key: keyof EducationItem,
    value: string,
  ) => {
    const updated = [...education];

    updated[index] = {
      ...updated[index],
      [key]:
        key === 'graduationYear' || key === 'grade'
          ? value === ''
            ? undefined
            : Number(value)
          : value,
    };

    setResume({
      ...resume,
      education: updated,
    });
  };

  const addEducation = () => {
    setResume({
      ...resume,
      education: [
        ...education,
        {
          college: '',
          degree: '',
          specialization: '',
          graduationYear: new Date().getFullYear(),
          grade: undefined,
        },
      ],
    });
  };

  const removeEducation = (index: number) => {
    if (education.length === 1) return;

    setResume({
      ...resume,
      education: education.filter((_, i) => i !== index),
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Education</Text>

      {education.map((edu, index) => (
        <View key={index} style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="College / University Name"
            placeholderTextColor="#9CA3AF"
            value={edu.college}
            onChangeText={t => updateField(index, 'college', t)}
          />

          <TextInput
            style={styles.input}
            placeholder="Degree (e.g., B.Tech, MBA)"
            placeholderTextColor="#9CA3AF"
            value={edu.degree}
            onChangeText={t => updateField(index, 'degree', t)}
          />

          <TextInput
            style={styles.input}
            placeholder="Specialization / Field"
            placeholderTextColor="#9CA3AF"
            value={edu.specialization}
            onChangeText={t => updateField(index, 'specialization', t)}
          />

          <TextInput
            style={styles.input}
            placeholder="Graduation Year"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={edu.graduationYear ? edu.graduationYear.toString() : ''}
            onChangeText={t => updateField(index, 'graduationYear', t)}
          />

          <TextInput
            style={styles.input}
            placeholder="CGPA / Percentage (optional)"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={edu.grade ? edu.grade.toString() : ''}
            onChangeText={t => updateField(index, 'grade', t)}
          />

          {/* ACTION BUTTONS */}
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[
                styles.removeBtn,
                education.length === 1 && styles.disabledBtn,
              ]}
              onPress={() => removeEducation(index)}
              disabled={education.length === 1}
            >
              <MaterialCommunityIcons
                name="delete"
                size={18}
                color={education.length === 1 ? '#9CA3AF' : '#EF4444'}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.addBtn} onPress={addEducation}>
              <MaterialCommunityIcons name="plus" size={18} color="#10B981" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={[styles.addBtns, { marginTop: 16 }]}
        onPress={() => setStep(4)}
      >
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EducationScreen;

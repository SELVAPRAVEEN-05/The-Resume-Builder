import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AutocompleteDropdown,
  AutocompleteDropdownContextProvider,
} from 'react-native-autocomplete-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  getColleges,
  getDegrees,
  getSpecializations,
} from '../../api/data.api';
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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [colleges, setColleges] = useState<{ id: string; title: string }[]>([]);
  const [degrees, setDegrees] = useState<{ id: string; title: string }[]>([]);
  const [specializations, setSpecializations] = useState<
    { id: string; title: string }[]
  >([]);

  useEffect(() => {
    if (education.length === 0) {
      addEducation();
    }

    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [collegesRes, degreesRes, specsRes] = await Promise.all([
        getColleges(),
        getDegrees(),
        getSpecializations(),
      ]);

      // Colleges
      const collegesData = Array.isArray(collegesRes)
        ? collegesRes
        : collegesRes?.colleges || [];

      const formattedColleges = collegesData.map(
        (item: any, index: number) => ({
          id: String(item?._id ?? index),
          title: String(item?.collegeName ?? ''),
        }),
      );

      // Degrees
      const degreesData = Array.isArray(degreesRes)
        ? degreesRes
        : degreesRes?.degrees || [];

      const formattedDegrees = degreesData.map((item: any, index: number) => ({
        id: String(item?._id ?? index),
        title: String(item?.degreeName ?? ''),
      }));

      // Specializations
      const specsData = Array.isArray(specsRes)
        ? specsRes
        : specsRes?.specializations || [];

      const formattedSpecs = specsData.map((item: any, index: number) => ({
        id: String(item?._id ?? index),
        title: String(item?.specializationName ?? ''),
      }));

      setColleges(formattedColleges);
      setDegrees(formattedDegrees);
      setSpecializations(formattedSpecs);
    } catch (err) {
      console.log('Error fetching education data:', err);
      setError('Failed to load education data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Update Field
  const updateField = (
    index: number,
    key: keyof EducationItem,
    value: string,
  ) => {
    setResume(prev => {
      const updated = [...prev.education];

      updated[index] = {
        ...updated[index],
        [key]:
          key === 'graduationYear' || key === 'grade'
            ? value === ''
              ? undefined
              : Number(value)
            : value,
      };

      return {
        ...prev,
        education: updated,
      };
    });
  };

  // Add Education
  const addEducation = () => {
    setResume(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          collegeId: '',
          degreeId: '',
          specializationId: '',
          college: '',
          degree: '',
          specialization: '',
          graduationYear: new Date().getFullYear(),
          grade: undefined,
        },
      ],
    }));
  };

  // Remove Education
  const removeEducation = (index: number) => {
    if (education.length === 1) return;

    setResume(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  return (
    <AutocompleteDropdownContextProvider>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#10B981" />
        </View>
      ) : error ? (
        <View style={styles.loaderContainer}>
          <Text style={{ marginBottom: 10 }}>{error}</Text>
          <TouchableOpacity onPress={fetchInitialData}>
            <Text style={{ color: '#10B981' }}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.container}
        >
          <Text style={styles.title}>Education</Text>

          {education.map((edu, index) => (
            <View key={index} style={styles.card}>
              {/* College */}
              <AutocompleteDropdown
                dataSet={colleges}
                useFilter
                closeOnBlur={false}
                clearOnFocus={false}
                suggestionsListMaxHeight={200}
                containerStyle={{ zIndex: 1000 }}
                initialValue={
                  colleges.find(c => c.title === edu.college)?.id ?? ''
                }
                onChangeText={text => updateField(index, 'college', text)}
                onSelectItem={item => {
                  if (item?.title) {
                    updateField(index, 'college', item.title);
                    updateField(index, 'collegeId', item.id);
                  }
                }}
                inputContainerStyle={styles.dropinput}
                textInputProps={{
                  placeholder: 'College / University Name',
                  placeholderTextColor: '#9CA3AF',
                  style: { color: '#111' },
                }}
                suggestionsListContainerStyle={{ backgroundColor: '#fff' }}
                renderItem={(item, text) => (
                  <Text style={{ color: '#111', padding: 10 }}>
                    {item.title}
                  </Text>
                )}
              />

              {/* Degree */}
              <AutocompleteDropdown
                dataSet={degrees}
                useFilter
                closeOnBlur={false}
                clearOnFocus={false}
                suggestionsListMaxHeight={200}
                onSelectItem={item => {
                  if (item?.title) {
                    updateField(index, 'degree', item.title);
                    updateField(index, 'degreeId', item.id);
                  }
                }}
                inputContainerStyle={styles.dropinput}
                textInputProps={{
                  placeholder: 'Degree (e.g., B.Tech, MBA)',
                  placeholderTextColor: '#9CA3AF',
                  style: { color: '#111' },
                }}
                suggestionsListContainerStyle={{ backgroundColor: '#fff' }}
                renderItem={(item, text) => (
                  <Text style={{ color: '#111', padding: 10 }}>
                    {item.title}
                  </Text>
                )}
              />

              {/* Specialization */}
              <AutocompleteDropdown
                dataSet={specializations}
                useFilter
                closeOnBlur={false}
                clearOnFocus={false}
                suggestionsListMaxHeight={200}
                onSelectItem={item => {
                  if (item?.title) {
                    updateField(index, 'specialization', item.title);
                    updateField(index, 'specializationId', item.id);
                  }
                }}
                inputContainerStyle={styles.dropinput}
                textInputProps={{
                  placeholder: 'Specialization / Field',
                  placeholderTextColor: '#9CA3AF',
                  style: { color: '#111' },
                }}
                suggestionsListContainerStyle={{ backgroundColor: '#fff' }}
                renderItem={(item, text) => (
                  <Text style={{ color: '#111', padding: 10 }}>
                    {item.title}
                  </Text>
                )}
              />

              {/* Graduation Year */}
              <TextInput
                style={styles.input}
                placeholder="Graduation Year"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                value={edu.graduationYear?.toString() || ''}
                onChangeText={t => updateField(index, 'graduationYear', t)}
              />

              {/* Grade */}
              <TextInput
                style={styles.input}
                placeholder="CGPA / Percentage (optional)"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                value={edu.grade?.toString() || ''}
                onChangeText={t => updateField(index, 'grade', t)}
              />

              {/* Action Buttons */}
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
                  <MaterialCommunityIcons
                    name="plus"
                    size={18}
                    color="#10B981"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <View style={styles.navigationRow}>
            <TouchableOpacity style={styles.addBtns} onPress={() => setStep(4)}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addBtns} onPress={() => setStep(2)}>
              <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </AutocompleteDropdownContextProvider>
  );
};

export default EducationScreen;

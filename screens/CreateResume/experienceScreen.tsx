import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  AutocompleteDropdown,
  AutocompleteDropdownContextProvider,
} from 'react-native-autocomplete-dropdown';
import { getCompanies } from '../../api/data.api'; // make sure you have this
import { styles } from './styles';

export default function ExperienceScreen({ resume, setResume, setStep }: any) {
  const experience = resume.experience;

  const [companies, setCompanies] = useState<{ id: string; title: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (experience.length === 0) addExperience();
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getCompanies();
      const companiesData = Array.isArray(res) ? res : res?.companies || [];

      const formatted = companiesData.map((c: any, idx: number) => ({
        id: String(c._id ?? idx),
        title: String(c.companyName ?? ''),
      }));

      setCompanies(formatted);
    } catch (err) {
      console.log('Error fetching companies:', err);
      setError('Failed to load companies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const updateField = (index: number, key: string, value: string) => {
    const updated = [...experience];
    updated[index] = { ...updated[index], [key]: value };
    setResume({ ...resume, experience: updated });
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

  const handleNext = () => setStep(6);
  const handleBack = () => setStep(4);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#10B981" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={{ marginBottom: 10 }}>{error}</Text>
        <TouchableOpacity onPress={fetchCompanies}>
          <Text style={{ color: '#10B981' }}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <AutocompleteDropdownContextProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Experience</Text>

        {experience.map((exp: any, index: number) => (
          <View key={index} style={styles.card}>
            {/* Company Name Autocomplete */}
            <AutocompleteDropdown
              dataSet={companies}
              useFilter
              closeOnBlur={false}
              clearOnFocus={false}
              suggestionsListMaxHeight={200}
              containerStyle={{ zIndex: 1000 }}
              initialValue={companies.find(c => c.title === exp.company)?.id ?? ''}
              onChangeText={text => updateField(index, 'company', text)}
              onSelectItem={item => {
                if (item?.title) updateField(index, 'company', item.title);
              }}
              inputContainerStyle={styles.dropinput}
              textInputProps={{
                placeholder: 'Company Name *',
                style: { color: '#111' },
                placeholderTextColor: '#9CA3AF',
              }}
              suggestionsListContainerStyle={{ backgroundColor: '#fff' }}
              renderItem={(item, text) => (
                <Text style={{ color: '#111', padding: 10 }}>{item.title}</Text>
              )}
            />

            {/* Job Title */}
            <TextInput
              style={styles.input}
              placeholder="Job Title *"
              placeholderTextColor="#9CA3AF"
              value={exp.jobTitle}
              onChangeText={t => updateField(index, 'jobTitle', t)}
            />

            {/* Start Date */}
            <TextInput
              style={styles.input}
              placeholder="Start Date (YYYY-MM-DD) *"
              placeholderTextColor="#9CA3AF"
              value={exp.startDate || ''}
              onChangeText={t => updateField(index, 'startDate', t)}
            />

            {/* End Date */}
            <TextInput
              style={styles.input}
              placeholder="End Date (YYYY-MM-DD)"
              placeholderTextColor="#9CA3AF"
              value={exp.endDate || ''}
              onChangeText={t => updateField(index, 'endDate', t)}
            />

            {/* Description */}
            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="Job Description"
              placeholderTextColor="#9CA3AF"
              multiline
              value={exp.description}
              onChangeText={t => updateField(index, 'description', t)}
            />

            {/* Action Buttons */}
            <View style={styles.actionRow}>
              <TouchableOpacity
                style={[styles.removeBtn, experience.length === 1 && styles.disabledBtn]}
                onPress={() => removeExperience(index)}
                disabled={experience.length === 1}
              >
                <MaterialCommunityIcons
                  name="delete"
                  size={18}
                  color={experience.length === 1 ? '#9CA3AF' : '#EF4444'}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.addBtn} onPress={addExperience}>
                <MaterialCommunityIcons name="plus" size={18} color="#10B981" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={styles.navigationRow}>
          <TouchableOpacity style={[styles.addBtns]} onPress={handleNext}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.addBtns]} onPress={handleBack}>
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AutocompleteDropdownContextProvider>
  );
}

import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export default function SkillsLanguagesScreen({
  resume,
  setResume,
  setStep,
}: any) {
  const [skill, setSkill] = useState('');
  const [lang, setLang] = useState('');

  const addSkill = () => {
    if (!skill.trim()) return;
    if (resume.skills.includes(skill.trim())) return;

    setResume({
      ...resume,
      skills: [...resume.skills, skill.trim()],
    });
    setSkill('');
  };

  const addLanguage = () => {
    if (!lang.trim()) return;
    if (resume.languages.includes(lang.trim())) return;

    setResume({
      ...resume,
      languages: [...resume.languages, lang.trim()],
    });
    setLang('');
  };

  const removeSkill = (item: string) => {
    setResume({
      ...resume,
      skills: resume.skills.filter((s: string) => s !== item),
    });
  };

  const removeLanguage = (item: string) => {
    setResume({
      ...resume,
      languages: resume.languages.filter((l: string) => l !== item),
    });
  };

  return (
    <View style={{ padding: 16 }}>
      {/* ===== SKILLS ===== */}
      <Text style={styles.sectionTitle}>Skills</Text>

      <View style={styles.row}>
        <TextInput
          placeholder="Add Skill"
          placeholderTextColor="#9CA3AF"
          style={[styles.input, { flex: 1 }]}
          value={skill}
          onChangeText={setSkill}
        />

        <TouchableOpacity style={styles.addBtn} onPress={addSkill}>
          <MaterialCommunityIcons name="plus" size={18} color="#10B981" />
        </TouchableOpacity>
      </View>

      <View style={styles.listWrap}>
        {resume.skills.map((item: string, index: number) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.chipText}>{item}</Text>
            <TouchableOpacity onPress={() => removeSkill(item)}>
              <MaterialCommunityIcons
                name="close"
                size={14}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* ===== LANGUAGES ===== */}
      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
        Languages
      </Text>

      <View style={styles.row}>
        <TextInput
          placeholder="Add Language"
          placeholderTextColor="#9CA3AF"
          style={[styles.input, { flex: 1 }]}
          value={lang}
          onChangeText={setLang}
        />

        <TouchableOpacity style={styles.addBtn} onPress={addLanguage}>
          <MaterialCommunityIcons name="plus" size={18} color="#10B981" />
        </TouchableOpacity>
      </View>

      <View style={styles.listWrap}>
        {resume.languages.map((item: string, index: number) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.chipText}>{item}</Text>
            <TouchableOpacity onPress={() => removeLanguage(item)}>
              <MaterialCommunityIcons
                name="close"
                size={14}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* ===== NEXT ===== */}
      <TouchableOpacity
        style={[styles.button, { marginTop: 24 }]}
        onPress={() => setStep(5)}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

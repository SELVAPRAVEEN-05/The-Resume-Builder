import React, { useEffect, useState } from 'react';
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

type ProjectItem = Resume['projects'][number];

export default function ProjectScreen({
  resume,
  setResume,
  setStep,
}: any) {
  const projects = resume.projects;
  const [techInput, setTechInput] = useState('');

  useEffect(() => {
    if (projects.length === 0) addProject();
  }, []);

  const updateField = (
    index: number,
    key: keyof ProjectItem,
    value: any,
  ) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [key]: value };

    setResume({ ...resume, projects: updated });
  };

  const addProject = () => {
    setResume({
      ...resume,
      projects: [
        ...projects,
        {
          title: '',
          description: '',
          techStack: [],
        },
      ],
    });
  };

  const removeProject = (index: number) => {
    if (projects.length === 1) return;
    setResume({
      ...resume,
      projects: projects.filter((_: ProjectItem, i: number) => i !== index),
    });
  };

  const addTech = (pIndex: number) => {
    if (!techInput.trim()) return;
    if (projects[pIndex].techStack.includes(techInput.trim())) return;

    const updated = [...projects];
    updated[pIndex].techStack.push(techInput.trim());

    setResume({ ...resume, projects: updated });
    setTechInput('');
  };

  const removeTech = (pIndex: number, tech: string) => {
    const updated = [...projects];
    updated[pIndex].techStack = updated[pIndex].techStack.filter((t: string) => t !== tech)

    setResume({ ...resume, projects: updated });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Projects</Text>

      {projects.map((proj : any, index : any) => (
        <View key={index} style={styles.card}>
          <TextInput
            style={styles.input}
          placeholderTextColor="#9CA3AF"
            placeholder="Project Title"
            value={proj.title}
            onChangeText={t => updateField(index, 'title', t)}
          />

          <TextInput
            style={[styles.input, styles.textarea]}
          placeholderTextColor="#9CA3AF"
            placeholder="Project Description"
            multiline
            value={proj.description}
            onChangeText={t =>
              updateField(index, 'description', t)
            }
          />

          {/* TECH STACK */}
          <Text style={styles.sectionTitle}>Tech Stack</Text>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
          placeholderTextColor="#9CA3AF"
              placeholder="Add technology"
              value={techInput}
              onChangeText={setTechInput}
            />
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => addTech(index)}
            >
              <MaterialCommunityIcons
                name="plus"
                size={18}
                color="#10B981"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.listWrap}>
            {proj.techStack.map((tech : any, tIndex : any) => (
              <View key={tIndex} style={styles.chip}>
                <Text style={styles.chipText}>{tech}</Text>
                <TouchableOpacity
                  onPress={() => removeTech(index, tech)}
                >
                  <MaterialCommunityIcons
                    name="close"
                    size={14}
                    color="#6B7280"
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* ACTION BUTTONS */}
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[
                styles.removeBtn,
                projects.length === 1 && styles.disabledBtn,
              ]}
              onPress={() => removeProject(index)}
              disabled={projects.length === 1}
            >
              <MaterialCommunityIcons
                name="delete"
                size={18}
                color={
                  projects.length === 1 ? '#9CA3AF' : '#EF4444'
                }
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.addBtn}
              onPress={addProject}
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
        onPress={() => setStep(7)}
      >
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

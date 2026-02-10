import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { createResume } from '../../api/resume.api';
import { styles } from './styles';

export default function PreviewScreen({ resume, navigation }: any) {
  const save = async () => {
    try {
      await createResume(resume);
      Alert.alert('Success', 'Resume Created');
      navigation.navigate('MyResume');
    } catch {
      Alert.alert('Error', 'Save failed');
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>{resume.personal.fullName}</Text>

      <TouchableOpacity style={styles.button} onPress={save}>
        <Text style={styles.buttonText}>Save Resume</Text>
      </TouchableOpacity>
    </View>
  );
}

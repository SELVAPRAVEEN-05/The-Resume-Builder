import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { createResume } from '../../api/resume.api';
import { styles } from './styles';

export default function PreviewScreen({ resume, setStep }: any) {
  const save = async () => {
    try {
      console.log(resume, ' ... resume in preview ...');
      await createResume(resume);
      Alert.alert('Success', 'Resume Created');
      setStep(1);
    } catch (error: any) {
      console.log(resume);
      console.log(error);
      Alert.alert('Error', error.message || 'Save failed');
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>{resume.personal.fullName}</Text>
      {/* here i want the template resume preview */}

      <View style={styles.navigationRow}>
        <TouchableOpacity style={styles.addBtns} onPress={save}>
          <Text style={styles.btnText}>Save Resume</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addBtns} onPress={() => setStep(7)}>
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

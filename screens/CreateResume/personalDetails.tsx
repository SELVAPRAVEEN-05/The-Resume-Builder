import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';

export default function PersonalScreen({ resume, setResume, setStep }: any) {
  const p = resume.personal;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Personal Details</Text>

      <ScrollView style={{ padding: 16 }}>
        <TextInput
          placeholder="Full Name *"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          value={p.fullName}
          onChangeText={v =>
            setResume({ ...resume, personal: { ...p, fullName: v } })
          }
        />
        <TextInput
          placeholder="Rple *"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          value={p.role}
          onChangeText={v =>
            setResume({ ...resume, personal: { ...p, role: v } })
          }
        />

        <TextInput
          placeholder="Email *"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          value={p.email}
          onChangeText={v =>
            setResume({ ...resume, personal: { ...p, email: v } })
          }
        />

        <TextInput
          placeholder="Phone Number*"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          value={p.phoneNumber}
          onChangeText={v =>
            setResume({ ...resume, personal: { ...p, phoneNumber: v } })
          }
        />

        <TextInput
          placeholder="Address"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          value={p.address}
          onChangeText={v =>
            setResume({ ...resume, personal: { ...p, address: v } })
          }
        />

        <TextInput
          placeholder="LinkedIn*"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          value={p.linkedIn}
          onChangeText={v =>
            setResume({ ...resume, personal: { ...p, linkedIn: v } })
          }
        />

        <TextInput
          placeholder="GitHub"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          value={p.github}
          onChangeText={v =>
            setResume({ ...resume, personal: { ...p, github: v } })
          }
        />

        <TextInput
          placeholder="Web-sites Link (optional)"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          value={p.portfolio}
          onChangeText={v =>
            setResume({ ...resume, personal: { ...p, portfolio: v } })
          }
        />

        <TextInput
          placeholder="Objective"
          placeholderTextColor="#9CA3AF"
          style={[styles.input, { height: 100 }]}
          multiline
          value={resume.objective}
          onChangeText={v => setResume({ ...resume, objective: v })}
        />

        <TouchableOpacity style={styles.button} onPress={() => setStep(3)}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

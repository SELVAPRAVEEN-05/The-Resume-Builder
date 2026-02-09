import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const MordenResume = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>

        {/* LEFT SIDEBAR */}
        <View style={styles.left}>

          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.avatar}
          />

          {/* CONTACT */}
          <Text style={styles.sideTitle}>CONTACT</Text>
          <Text style={styles.sideText}>📞 9342654277</Text>
          <Text style={styles.sideText}>✉️ integradethiruselvan4@gmail.com</Text>
          <Text style={styles.sideText}>📍 Kallakurichi, Tamil Nadu</Text>

          {/* REFERENCES */}
          <Text style={styles.sideTitle}>REFERENCES</Text>
          <Text style={styles.sideText}>LinkedIn</Text>
          <Text style={styles.sideText}>GitHub</Text>
          <Text style={styles.sideText}>LeetCode</Text>

          {/* EDUCATION */}
          <Text style={styles.sideTitle}>EDUCATION</Text>
          <Text style={styles.sideText}>
            B.E Computer Science – Bannari Amman Institute of Technology (2025)
          </Text>
          <Text style={styles.sideText}>
            Higher Secondary – AKT Academy Matric Hr. Sec. School
          </Text>

          {/* SKILLS */}
          <Text style={styles.sideTitle}>SKILLS</Text>
          <Text style={styles.sideText}>
            C, Java, Python, React, Next.js, Node.js, Express, MySQL, Git, GitHub
          </Text>

          {/* LANGUAGES */}
          <Text style={styles.sideTitle}>LANGUAGES</Text>
          <Text style={styles.sideText}>Tamil, English</Text>

        </View>

        {/* RIGHT CONTENT */}
        <View style={styles.right}>

          <Text style={styles.name}>THIRUSELVAN V</Text>
          <Text style={styles.role}>FULL STACK DEVELOPER</Text>

          {/* OBJECTIVE */}
          <Section title="OBJECTIVE">
            <Text style={styles.paragraph}>
              Full Stack Developer pursuing B.E in Computer Science and Engineering,
              with hands-on experience in building scalable web applications using
              React, Node.js, and MySQL, and a strong interest in solving real-world
              problems through clean and efficient code.
            </Text>
          </Section>

          {/* PROJECTS */}
          <Section title="PROJECTS">
            <Text style={styles.projectTitle}>
              Student and Project Management Application
            </Text>
            <Text style={styles.paragraph}>
              A role-based management system to handle student allocation,
              project tracking, and performance monitoring with admin control.
            </Text>
            <Text style={styles.tech}>Tech: React, Node.js, Express, MySQL</Text>

            <Text style={styles.projectTitle}>Survey Application</Text>
            <Text style={styles.paragraph}>
              A dynamic survey platform allowing form creation, response
              collection, and result analysis with real-time updates.
            </Text>
            <Text style={styles.tech}>Tech: React, Zustand, Axios</Text>
          </Section>

          {/* EXPERIENCE */}
          <Section title="EXPERIENCE">
            <Text style={styles.bold}>
              Full Stack Developer Intern – Crayon’d
            </Text>
            <Text style={styles.date}>Sep 2024 – Apr 2025</Text>
            <Bullet text="Developed end-to-end web applications using modern technologies." />
            <Bullet text="Worked closely with backend and frontend teams." />
            <Bullet text="Improved debugging, Git workflows, and API integration." />
          </Section>

          {/* CERTIFICATIONS */}
          <Section title="CERTIFICATIONS">
            <Bullet text="Internship Certificate – Crayon’d" />
            <Bullet text="NPTEL – The Joy of Computing using Python" />
            <Bullet text="Responsive Web Design – freeCodeCamp" />
          </Section>

        </View>
      </View>
    </ScrollView>
  );
};

/* ---------- Reusable Components ---------- */

const Section = ({ title, children }: any) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const Bullet = ({ text }: any) => (
  <Text style={styles.bullet}>• {text}</Text>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  wrapper: {
    flexDirection: 'row',
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },

  left: {
    width: '35%',
    backgroundColor: '#14344f',
    padding: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 16,
  },
  sideTitle: {
    color: '#fff',
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
  },
  sideText: {
    color: '#dbe7f1',
    fontSize: 13,
    marginBottom: 6,
  },

  right: {
    width: '65%',
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
  },
  role: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },

  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: '700',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 6,
  },
  projectTitle: {
    fontWeight: '600',
    marginTop: 8,
  },
  tech: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 6,
  },
  bullet: {
    fontSize: 13,
    marginBottom: 4,
  },
  bold: {
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
});

export default MordenResume;

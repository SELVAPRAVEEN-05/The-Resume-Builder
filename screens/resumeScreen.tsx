import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const ResumeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>

        {/* LEFT SIDEBAR */}
        <View style={styles.left}>

          {/* Profile Image */}
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.avatar}
          />

          {/* CONTACT */}
          <Text style={styles.sideTitle}>CONTACT</Text>
          <Text style={styles.sideText}>📞 9342654277</Text>
          <Text style={styles.sideText}>✉️ integradethiruselvan4@gmail.com</Text>
          <Text style={styles.sideText}>📍 Kallakurichi, Tamil Nadu</Text>

          {/* EDUCATION */}
          <Text style={styles.sideTitle}>EDUCATION</Text>
          <Text style={styles.sideBold}>Bannari Amman Institute of Technology</Text>
          <Text style={styles.sideText}>B.E. Computer Science and Engineering</Text>

          <Text style={styles.sideBold}>AKT Academy Matric Hr. Sec. School</Text>
          <Text style={styles.sideText}>Higher Secondary Education</Text>

          {/* SKILLS */}
          <Text style={styles.sideTitle}>SKILLS</Text>
          <Text style={styles.sideText}>Languages: C, Java, Python, C++</Text>
          <Text style={styles.sideText}>Frontend: HTML, React, Next.js, Tailwind</Text>
          <Text style={styles.sideText}>Backend: Node.js, Express</Text>
          <Text style={styles.sideText}>Database: MySQL</Text>
          <Text style={styles.sideText}>Tools: Git, GitHub, Postman</Text>

          {/* LANGUAGES */}
          <Text style={styles.sideTitle}>LANGUAGES</Text>
          <Text style={styles.sideText}>Tamil</Text>
          <Text style={styles.sideText}>English</Text>

          {/* CERTIFICATIONS */}
          <Text style={styles.sideTitle}>CERTIFICATIONS</Text>
          <Text style={styles.sideText}>• Internship Certificate – Crayon’d</Text>
          <Text style={styles.sideText}>• NPTEL – Joy of Computing</Text>
          <Text style={styles.sideText}>• Responsive Web Design – freeCodeCamp</Text>

        </View>

        {/* RIGHT CONTENT */}
        <View style={styles.right}>

          <Text style={styles.name}>THIRUSELVAN V</Text>
          <Text style={styles.role}>FULL STACK DEVELOPER</Text>

          {/* PROFILE */}
          <Section title="PROFILE">
            <Bullet text="Full Stack Developer pursuing B.E in Computer Science and Engineering." />
            <Bullet text="Experience in building scalable web applications using React, Next.js, Node.js, and MySQL." />
            <Bullet text="Strong problem-solving and analytical skills." />
          </Section>

          {/* PROJECTS */}
          <Section title="PROJECTS">
            <Text style={styles.projectTitle}>
              Student and Project Management Application
            </Text>
            <Bullet text="Role-based dashboards for students and admins." />
            <Bullet text="Tracks project status and performance." />
            <Bullet text="Built with React, Node.js, Express, MySQL." />

            <Text style={styles.projectTitle}>Survey Application</Text>
            <Bullet text="Dynamic form creation and response tracking." />
            <Bullet text="State management using Zustand." />
            <Bullet text="REST API integration with backend." />
          </Section>

          {/* INTERNSHIP */}
          <Section title="INTERNSHIP">
            <Text style={styles.bold}>
              Full Stack Developer Intern – Crayon’d (Sep 2024 – Apr 2025)
            </Text>
            <Bullet text="Developed end-to-end web applications." />
            <Bullet text="Worked with React, Node.js, MySQL." />
            <Bullet text="Improved debugging and collaboration skills." />
          </Section>

          {/* REFERENCES */}
          <Section title="REFERENCE">
            <Text style={styles.link}>LinkedIn</Text>
            <Text style={styles.link}>GitHub</Text>
            <Text style={styles.link}>LeetCode</Text>
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

const Bullet = ({ text }:any) => (
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

  /* LEFT */
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
    marginBottom: 4,
  },
  sideBold: {
    color: '#fff',
    fontWeight: '600',
    marginTop: 8,
  },

  /* RIGHT */
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
  bullet: {
    fontSize: 13,
    marginBottom: 4,
  },
  projectTitle: {
    fontWeight: '600',
    marginTop: 8,
  },
  bold: {
    fontWeight: '600',
    marginBottom: 4,
  },
  link: {
    color: '#1e90ff',
    marginBottom: 4,
  },
});

export default ResumeScreen;

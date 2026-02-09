import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const ClassicResume = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.page}>

        {/* HEADER */}
        <Text style={styles.name}>SELVAPRAVEEN S</Text>
        <Text style={styles.role}>FULL-STACK DEVELOPER</Text>

        <Text style={styles.contact}>
          selvaraveen2005@gmail.com  |  +91 9025174530  |  LinkedIn  |  GitHub  |  Kangayam, Tirupur, Tamil Nadu
        </Text>

        {/* SUMMARY */}
        <Section title="SUMMARY">
          <Text style={styles.paragraph}>
            Dedicated Computer Engineering student with hands-on full-stack
            development experience. Passionate about building clean, scalable,
            and user-friendly web applications while continuously learning new
            technologies and solving real-world problems through software.
          </Text>
        </Section>

        {/* EXPERIENCE */}
        <Section title="EXPERIENCE">
          <Text style={styles.bold}>
            Full Stack Developer Intern – Crayon’d Digital Pvt. Ltd
          </Text>
          <Text style={styles.subText}>
            Sep 2024 – Apr 2025 | Chennai
          </Text>

          <Bullet text="Developed responsive UI components and integrated backend APIs using Next.js, Zustand, Redux, and Sequelize." />
          <Bullet text="Worked on real-world products including Fyno and Revature platforms." />
          <Bullet text="Collaborated with a 20+ member Agile team and actively participated in Scrum ceremonies." />
        </Section>

        {/* SKILLS (NOT SPLIT) */}
        <Section title="SKILLS">
          <Text style={styles.paragraph}>
            C, C++, Java, Python, JavaScript, TypeScript, HTML, CSS, React.js,
            Next.js, Node.js, Express.js, MySQL, MongoDB, Git, GitHub, Postman,
            Tailwind CSS, Vite, Prisma
          </Text>
        </Section>

        {/* PROJECTS */}
        <Section title="PROJECTS">
          <Project
            title="Code Meet – Real-Time Coding Interview Platform"
            description="Built a real-time interview platform with role-based access for Admin, Interviewer, and Candidate. Includes live coding, automated assessments, and feedback dashboards."
            tech="Next.js, React, TypeScript, Node.js, PostgreSQL, Prisma, REST APIs"
          />

          <Project
            title="Food Web – Food Discovery & Delivery"
            description="Developed a full-stack food platform supporting restaurant browsing, ordering, and event-based catering services with an intuitive UI."
            tech="Next.js, Tailwind CSS, Node.js, PostgreSQL"
          />

          <Project
            title="Telemedicine Platform for Rural Healthcare"
            description="Created a healthcare platform enabling remote consultations with secure authentication and video call features."
            tech="React Native, Node.js, Express, MongoDB"
          />
        </Section>

        {/* EDUCATION */}
        <Section title="EDUCATION">
          <Text style={styles.bold}>
            Bachelor of Engineering (B.E) – Computer Science and Engineering
          </Text>
          <Text style={styles.subText}>
            Bannari Amman Institute of Technology | Graduation: 2027 | CGPA: 8.8
          </Text>

          <Text style={[styles.bold, { marginTop: 6 }]}>
            Higher Secondary (HSC)
          </Text>
          <Text style={styles.subText}>
            Jaycees Matriculation Higher Secondary School | 2023 | 95%
          </Text>
        </Section>

        {/* ACHIEVEMENTS */}
        <Section title="ACHIEVEMENTS">
          <Bullet text="Java Certificate – Completed NPTEL Programming in Java with Elite score of 92%." />
          <Bullet text="Solved 300+ coding problems on LeetCode." />
          <Bullet text="Delivered training sessions on web development for junior students." />
          <Bullet text="NSS Volunteer – Contributed 100+ hours in social service activities." />
        </Section>

      </View>
    </ScrollView>
  );
};

/* ---------- Components ---------- */

const Section = ({ title, children }: any) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const Bullet = ({ text }: any) => (
  <Text style={styles.bullet}>• {text}</Text>
);

const Project = ({ title, description, tech }: any) => (
  <View style={{ marginBottom: 10 }}>
    <Text style={styles.bold}>{title}</Text>
    <Text style={styles.paragraph}>{description}</Text>
    <Text style={styles.tech}>Tech: {tech}</Text>
  </View>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  page: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 6,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  role: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 6,
  },
  contact: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 12,
    color: '#333',
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontWeight: '700',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 18,
  },
  bullet: {
    fontSize: 13,
    marginBottom: 4,
  },
  bold: {
    fontWeight: '600',
  },
  subText: {
    fontSize: 12,
    color: '#444',
  },
  tech: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default ClassicResume;

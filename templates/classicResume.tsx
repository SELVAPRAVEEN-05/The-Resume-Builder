import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ClassicResume = ({ data }: any) => {
  const {
    resume,
    personalDetails,
    education = [],
    skills = [],
    experience = [],
    projects = [],
    certifications = [],
    languages = [],
  } = data;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.page}>
        {/* ================= HEADER ================= */}
        <Text style={styles.name}>{personalDetails?.fullName}</Text>

        <Text style={styles.contact}>
          {personalDetails?.phone} | {personalDetails?.email} |{' '}
          {personalDetails?.linkedin ? 'LinkedIn' : ''}{' '}
          {personalDetails?.github ? '| GitHub' : ''}
        </Text>

        {personalDetails?.address && (
          <Text style={styles.contact}>{personalDetails.address}</Text>
        )}

        <View style={styles.divider} />

        {/* ================= OBJECTIVE ================= */}
        {resume?.objective && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>OBJECTIVE</Text>
            <Text style={styles.paragraph}>{resume.objective}</Text>
          </View>
        )}

        {/* ================= EDUCATION ================= */}
        {education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>

            {education.map((edu: any, i: number) => (
              <View key={i} style={styles.block}>
                <Text style={styles.bold}>
                  {edu.degreeId?.degreeName} –{' '}
                  {edu.specializationId?.specializationName}
                </Text>
                <Text style={styles.subText}>
                  {edu.collegeId?.collegeName} | {edu.graduationYear}
                </Text>
                <Text style={styles.paragraph}>CGPA: {edu.grade}</Text>
              </View>
            ))}
          </View>
        )}

        {/* ================= SKILLS ================= */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SKILLS</Text>

          <View style={styles.skillsContainer}>
            {skills?.map((item: any, index: number) => (
              <View key={index} style={styles.skillChip}>
                <Text style={styles.skillText}>
                  • {item.skillId?.skillName}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* ================= EXPERIENCE ================= */}
        {experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>

            {experience.map((exp: any, i: number) => (
              <View key={i} style={styles.block}>
                <Text style={styles.bold}>{exp.jobTitle}</Text>
                <Text style={styles.subText}>
                  {exp.companyId?.companyName} | {exp.startDate} –{' '}
                  {exp.endDate || 'Present'}
                </Text>
                <Text style={styles.paragraph}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* ================= PROJECTS ================= */}
        {projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROJECTS</Text>

            {projects.map((p: any, i: number) => (
              <View key={i} style={styles.block}>
                <Text style={styles.bold}>{p.title}</Text>
                <Text style={styles.paragraph}>{p.description}</Text>
                {p.techStack && (
                  <Text style={styles.tech}>Tech: {p.techStack}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* ================= CERTIFICATIONS ================= */}
        {certifications?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>

            {certifications.map((c: any, i: number) => (
              <Text key={i} style={styles.bullet}>
                • {c.name}
              </Text>
            ))}
          </View>
        )}

        {/* ================= LANGUAGES ================= */}
        {languages?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>LANGUAGES</Text>

            {languages.map((l: any, i: number) => (
              <Text key={i} style={styles.bullet}>
                • {l.languageId?.languageName}
              </Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ClassicResume;

/* ================= STYLES ================= */

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
  contact: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
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
  block: {
    marginBottom: 8,
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
    marginTop: 2,
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  skillChip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 2,
    marginBottom: 2,
  },

  skillText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

type Props = {
  data: any;
};

const ModernResume = ({ data }: Props) => {
  const {
    resume,
    personalDetails,
    education = [],
    skills = [],
    languages = [],
    experience = [],
    projects = [],
    certifications = [],
  } = data || {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>

        {/* LEFT SIDEBAR */}
        <View style={styles.left}>

          {personalDetails?.imageUrl ? (
            <Image
              source={{ uri: personalDetails.imageUrl }}
              style={styles.avatar}
            />
          ) : 
          <Image
              source={{ uri:"https://static.vecteezy.com/system/resources/previews/043/117/097/non_2x/illustration-of-boy-profile-anime-style-black-silhouette-isolated-on-white-background-free-vector.jpg" }}
              style={styles.avatar}
            />}

          {/* CONTACT */}
          <SideSection title="CONTACT">
            {personalDetails?.phone && <SideText text={personalDetails.phone} />}
            {personalDetails?.email && <SideText text={personalDetails.email} />}
            {personalDetails?.address && <SideText text={personalDetails.address} />}
          </SideSection>

          {/* LINKS */}
          <SideSection title="LINKS">
            {personalDetails?.linkedin && <SideText text="LinkedIn" />}
            {personalDetails?.github && <SideText text="GitHub" />}
            {personalDetails?.website && <SideText text="Portfolio" />}
          </SideSection>

          {/* SKILLS */}
          {skills.length > 0 && (
            <SideSection title="SKILLS">
              {skills.map((s: any, i: number) => (
                <SideText key={i} text={s.skillId?.skillName || s.skillName} />
              ))}
            </SideSection>
          )}

          {/* LANGUAGES */}
          {languages.length > 0 && (
            <SideSection title="LANGUAGES">
              {languages.map((l: any, i: number) => (
                <SideText key={i} text={l.languageId?.languageName || l.languageName} />
              ))}
            </SideSection>
          )}
        </View>

        {/* RIGHT CONTENT */}
        <View style={styles.right}>

          {/* HEADER */}
          <Text style={styles.name}>{personalDetails?.fullName}</Text>
          <Text style={styles.role}>{resume?.jobTitle || 'FULL STACK DEVELOPER'}</Text>

          {/* OBJECTIVE */}
          {resume?.objective && (
            <MainSection title="OBJECTIVE">
              <Text style={styles.paragraph}>{resume.objective}</Text>
            </MainSection>
          )}

          {/* EXPERIENCE */}
          {experience.length > 0 && (
            <MainSection title="EXPERIENCE">
              {experience.map((exp: any, i: number) => (
                <View key={i} style={styles.block}>
                  <Text style={styles.bold}>
                    {exp.jobTitle} – {exp.companyId?.companyName}
                  </Text>
                  <Text style={styles.date}>
                    {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
                  </Text>
                  <Text style={styles.paragraph}>{exp.description}</Text>
                </View>
              ))}
            </MainSection>
          )}

          {/* PROJECTS */}
          {projects.length > 0 && (
            <MainSection title="PROJECTS">
              {projects.map((p: any, i: number) => (
                <View key={i} style={styles.block}>
                  <Text style={styles.bold}>{p.title}</Text>
                  <Text style={styles.paragraph}>{p.description}</Text>
                  {p.techStack && (
                    <Text style={styles.tech}>Tech: {p.techStack}</Text>
                  )}
                </View>
              ))}
            </MainSection>
          )}

          {/* EDUCATION */}
          {education.length > 0 && (
            <MainSection title="EDUCATION">
              {education.map((edu: any, i: number) => (
                <View key={i} style={styles.block}>
                  <Text style={styles.bold}>
                    {edu.degreeId?.degreeName} – {edu.specializationId?.specializationName}
                  </Text>
                  <Text style={styles.paragraph}>
                    {edu.collegeId?.collegeName} | {edu.graduationYear}
                  </Text>
                  {edu.grade && (
                    <Text style={styles.paragraph}>CGPA: {edu.grade}</Text>
                  )}
                </View>
              ))}
            </MainSection>
          )}

          {/* CERTIFICATIONS */}
          {certifications.length > 0 && (
            <MainSection title="CERTIFICATIONS">
              {certifications.map((c: any, i: number) => (
                <Text key={i} style={styles.bullet}>
                  • {c.name}
                </Text>
              ))}
            </MainSection>
          )}

        </View>
      </View>
    </ScrollView>
  );
};

/* ------------------ SMALL COMPONENTS ------------------ */

const SideSection = ({ title, children }: any) => (
  <>
    <Text style={styles.sideTitle}>{title}</Text>
    {children}
  </>
);

const SideText = ({ text }: any) => (
  <Text style={styles.sideText}>{text}</Text>
);

const MainSection = ({ title, children }: any) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

/* ------------------ HELPERS ------------------ */

const formatDate = (date?: string) => {
  if (!date) return 'Present';
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

/* ------------------ STYLES ------------------ */

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
    marginBottom: 6,
  },
  sideText: {
    color: '#dbe7f1',
    fontSize: 13,
    marginBottom: 4,
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
    marginBottom: 12,
  },

  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontWeight: '700',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 18,
  },
  block: {
    marginBottom: 8,
  },
  bold: {
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  tech: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  bullet: {
    fontSize: 13,
    marginBottom: 4,
  },
});

export default ModernResume;

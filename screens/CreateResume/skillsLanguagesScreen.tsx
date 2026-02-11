import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  AutocompleteDropdown,
  AutocompleteDropdownContextProvider,
} from "react-native-autocomplete-dropdown";
import { getSkills, getLanguages } from "../../api/data.api";
import { styles } from "./styles";

interface Item {
  id: string; 
  title: string;
}

interface Props {
  resume: any;
  setResume: React.Dispatch<React.SetStateAction<any>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SkillsLanguagesScreen: React.FC<Props> = ({ resume, setResume, setStep }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [skillsData, setSkillsData] = useState<Item[]>([]);
  const [langsData, setLangsData] = useState<Item[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [skillsRes, langsRes] = await Promise.all([getSkills(), getLanguages()]);

      // Map DB data to {id, title} format
      const formattedSkills: Item[] = (Array.isArray(skillsRes) ? skillsRes : skillsRes?.skills || []).map(
        (s: any) => ({
          id: s._id?.toString() ?? "",
          title: s.skillName,
        })
      );

      const formattedLangs: Item[] = (Array.isArray(langsRes) ? langsRes : langsRes?.languages || []).map(
        (l: any) => ({
          id: l._id?.toString() ?? "",
          title: l.languageName,
        })
      );

      setSkillsData(formattedSkills);
      setLangsData(formattedLangs);
    } catch (err) {
      console.log("Error fetching skills/languages:", err);
      setError("Failed to load suggestions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Add item only if not already selected
  const addItem = (listKey: "skills" | "languages", item: Item) => {
    if (!item?.id) return;
    if (resume[listKey]?.some((v: Item) => v.id === item.id)) return;

    setResume({
      ...resume,
      [listKey]: [...(resume[listKey] || []), item],
    });
  };

  const removeItem = (listKey: "skills" | "languages", itemId: string) => {
    setResume({
      ...resume,
      [listKey]: resume[listKey].filter((v: Item) => v.id !== itemId),
    });
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#10B981" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={{ marginBottom: 10 }}>{error}</Text>
        <TouchableOpacity onPress={fetchData}>
          <Text style={{ color: "#10B981" }}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <AutocompleteDropdownContextProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* ===== SKILLS ===== */}
        <Text style={styles.sectionTitle}>Skills</Text>
        <AutocompleteDropdown
          dataSet={skillsData}
          useFilter
          closeOnBlur={false}
          clearOnFocus={false}
          suggestionsListMaxHeight={150}
          containerStyle={{ zIndex: 1000 }}
          onSelectItem={(item) => {
            if (item?.title && item?.id) addItem("skills", { id: item.id, title: item.title });
          }}
          inputContainerStyle={styles.dropinput}
          textInputProps={{
            placeholder: "Select Skill",
            placeholderTextColor: "#9CA3AF",
            style: { color: "#111", fontSize: 14, paddingVertical: 8, paddingHorizontal: 12 },
          }}
          suggestionsListContainerStyle={{ backgroundColor: "#fff" }}
          renderItem={(item) => <Text style={{ color: "#111", padding: 10 }}>{item.title}</Text>}
        />

        <View style={styles.listWrap}>
          {resume.skills?.map((item: Item) => (
            <View key={item.id} style={styles.chip}>
              <Text style={styles.chipText}>{item.title}</Text>
              <TouchableOpacity onPress={() => removeItem("skills", item.id)}>
                <MaterialCommunityIcons name="close" size={14} color="#6B7280" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* ===== LANGUAGES ===== */}
        <Text style={[styles.sectionTitle, { marginTop: 25 }]}>Languages</Text>
        <AutocompleteDropdown
          dataSet={langsData}
          useFilter
          closeOnBlur={false}
          clearOnFocus={false}
          suggestionsListMaxHeight={150}
          containerStyle={{ zIndex: 999 }}
          onSelectItem={(item) => {
            if (item?.title && item?.id) addItem("languages", { id: item.id, title: item.title });
          }}
          inputContainerStyle={styles.dropinput}
          textInputProps={{
            placeholder: "Select Language",
            placeholderTextColor: "#9CA3AF",
            style: { color: "#111", fontSize: 14, paddingVertical: 8, paddingHorizontal: 12 },
          }}
          suggestionsListContainerStyle={{ backgroundColor: "#fff" }}
          renderItem={(item) => <Text style={{ color: "#111", padding: 10 }}>{item.title}</Text>}
        />

        <View style={styles.listWrap}>
          {resume.languages?.map((item: Item) => (
            <View key={item.id} style={styles.chip}>
              <Text style={styles.chipText}>{item.title}</Text>
              <TouchableOpacity onPress={() => removeItem("languages", item.id)}>
                <MaterialCommunityIcons name="close" size={14} color="#6B7280" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* ===== NAVIGATION ===== */}
        <View style={styles.navigationRow}>
          <TouchableOpacity style={styles.addBtns} onPress={() => setStep(5)}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtns} onPress={() => setStep(3)}>
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AutocompleteDropdownContextProvider>
  );
};

export default SkillsLanguagesScreen;

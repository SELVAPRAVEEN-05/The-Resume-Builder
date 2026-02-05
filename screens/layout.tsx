import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import {
  BackHandler,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './home';
import MyProfile from './myProfile';
import MyResume from './myResume';

const COLORS = {
  primary: '#10B981',
  white: '#FFFFFF',
  lightGray: '#F9FAFB',
  gray: '#F3F4F6',
  borderGray: '#E5E7EB',
  darkGray: '#6B7280',
  text: '#111827',
  textSecondary: '#6B7280',
};

export type LayoutTabParamList = {
  MyResumeScreen: undefined;
  CreateResumeScreen: undefined;
  MyProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<LayoutTabParamList>();

/* ======================
   Header
====================== */
const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuIcon}>
        <MaterialCommunityIcons name="menu" size={24} color={COLORS.text} />
      </TouchableOpacity>

      <Image
        source={require('../assets/logo-new.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.searchIcon}>
        <MaterialCommunityIcons name="magnify" size={24} color={COLORS.text} />
      </TouchableOpacity>
    </View>
  );
};

/* ======================
   Center + Button
====================== */
const CreateResumeButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.fabWrapper}
    >
      <View style={styles.fabButton}>
        <MaterialCommunityIcons name="plus" size={34} color={COLORS.white} />
      </View>
    </TouchableOpacity>
  );
};

const Layout = () => {
  const tabRef = useRef<any>(null);
  const historyRef = useRef<string[]>([]);
  const stackNav = useNavigation();

  /* ======================
     Android Back Handling
  ====================== */
  useEffect(() => {
    const onBackPress = () => {
      const prev = historyRef.current.pop();
      if (prev && tabRef.current) {
        tabRef.current.navigate(prev);
        return true;
      }
      return false;
    };

    const sub = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => sub.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.textSecondary,
          tabBarLabelStyle: styles.tabLabel,
        }}
      >
        {/* My Resume */}
        <Tab.Screen
          name="MyResumeScreen"
          component={MyResume}
          options={{
            tabBarLabel: 'My Resume',
            tabBarIcon: ({ color, size = 22 }) => (
              <MaterialCommunityIcons
                name="file-document-outline"
                size={size}
                color={color}
              />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: () => {
              tabRef.current = navigation;
              const state = navigation.getState();
              const current = state.routes[state.index]?.name;
              if (current) historyRef.current.push(current);
            },
          })}
        />

        {/* Create Resume (CENTER +) */}
        <Tab.Screen
          name="CreateResumeScreen"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarButton: props => <CreateResumeButton {...props} />,
          }}
        />

        {/* My Profile */}
        <Tab.Screen
          name="MyProfileScreen"
          component={MyProfile}
          options={{
            tabBarLabel: 'My Profile',
            tabBarIcon: ({ color, size = 22 }) => (
              <MaterialCommunityIcons
                name="account-outline"
                size={size}
                color={color}
              />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: () => {
              tabRef.current = navigation;
              const state = navigation.getState();
              const current = state.routes[state.index]?.name;
              if (current) historyRef.current.push(current);
            },
          })}
        />
      </Tab.Navigator>
    </View>
  );
};

/* ======================
   Styles (THEME UNCHANGED)
====================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGray,
  },
  menuIcon: {
    width: 24,
    height: 24,
    justifyContent: 'space-between',
  },
  menuLine: {
    height: 2,
    backgroundColor: COLORS.text,
    width: 24,
  },
  logo: {
    width: 120,
    height: 40,
  },
  searchIcon: {
    padding: 8,
  },
  searchText: {
    fontSize: 20,
  },

  /* Tab Bar */
  tabBar: {
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderGray,
    height: 70,
  },
  tabLabel: {
    fontSize: 12,
    marginBottom: 6,
  },

  /* Floating + Button */
  fabWrapper: {
    top: -35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabButton: {
    width: 70,
    height: 70,
    borderRadius: 64,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
});

export default Layout;

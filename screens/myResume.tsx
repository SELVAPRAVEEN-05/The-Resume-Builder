import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { getColleges } from '../api/data.api';

const MyResume = () => {
  return (
    <ScrollView>
      <View>
        <TouchableOpacity onPress={() => getColleges()}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MyResume;

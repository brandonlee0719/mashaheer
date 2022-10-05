import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface PlatformsTextCardProps {
  name: string;
}

export const PlatformsTextCard = ({name}: PlatformsTextCardProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>• {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 6,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 14,
  },
});

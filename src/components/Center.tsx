import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import colors from '../styles/colors';

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({children}) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white03,
  },
});

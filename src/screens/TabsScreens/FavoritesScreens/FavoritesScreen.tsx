import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Center} from '../../../components/Center';
import colors from '../../../styles/colors';

export const FavoritesScreen = ({}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.mainTitle}>FavoritesScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white03,
  },
  listWrapper: {
    alignContent: 'flex-start',
  },
  mainTitle: {
    paddingTop: 20,
    left: 30,
    marginBottom: 30,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Galvji',
  },
  prosTitleText: {
    left: 30,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Galvji',
  },
});

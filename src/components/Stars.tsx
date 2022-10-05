import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StarIcon} from '../img/Icons';
import colors from '../styles/colors';

interface StarsProps {}

export const Stars = ({}: StarsProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <StarIcon color={colors.blue04} />
      <StarIcon color={colors.blue04} />
      <StarIcon color={colors.blue04} />
      <StarIcon color={colors.gray01} />
      <StarIcon color={colors.gray01} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

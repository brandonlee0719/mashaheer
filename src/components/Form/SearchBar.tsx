import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {InputField} from './InputField';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SearchBarProps {
  onPress: () => void;
}
Icon.loadFont();
const windowWidth = Dimensions.get('window').width;

export const SearchBar = ({onPress}: SearchBarProps) => {
  return (
    <View style={styles.wrapper}>
      <InputField
        keyboardType={'default'}
        placeholder={'Try "Specialty Coffee"'}
        selectionColor={colors.black01}
        placeholderTextColor={colors.gray02}
      />
      <TouchableWithoutFeedback onPress={onPress}>
        <Icon name={'search'} size={20} style={styles.searchIcon} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    paddingHorizontal: 20,
    borderColor: colors.gray03,
    backgroundColor: colors.white01,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 10,
    borderRadius: 10,
    width: '85%',
    height: windowWidth / 8,
  },
  searchIcon: {
    color: colors.blue04,
  },
});

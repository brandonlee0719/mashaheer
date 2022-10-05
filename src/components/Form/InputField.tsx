import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import colors from '../../styles/colors';

interface InputFieldProps {
  keyboardType: string;
  placeholder: string;
  selectionColor: string;
  placeholderTextColor: string;
  value?: string;
  onChangeText?: (value: string) => void;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}

export const InputField = ({
  placeholder,
  selectionColor,
  placeholderTextColor,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
}: InputFieldProps) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.inputField}
        keyboardType={'default'}
        placeholder={placeholder}
        selectionColor={selectionColor}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'stretch',
  },
  inputField: {
    color: colors.black01,
  },
});

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

interface RoundedButtonProps {
  variant: 'default' | 'primary';
  label: string;
  onPress?: () => void;
  style?: RectButtonProperties['style'];
}

export const RoundedButton = ({ variant, label, onPress, style }: RoundedButtonProps) => {
  const backgroundColor = variant === 'primary' ? colors.gray01 : colors.mashaheerBrown;
  const borderColor = backgroundColor;
  const color = variant === 'primary' ? colors.black01 : colors.white03;
  const fontFamily = 'Galvji';
  const fontSize = 16;
  const fontWeight = '400';

  return (
    <RectButton style={[styles.wrapper, style, { backgroundColor, borderColor }]} {...{ onPress }}>
      <Text
        style={{
          color,
          fontFamily,
          fontSize,
          fontWeight,
        }}
      >
        {label}
      </Text>
    </RectButton>
  );
};

RoundedButton.defaultProps = {
  variant: 'default',
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface QuantsIconProps {
  color: string;
}

export const QuantsIcon = ({color}: QuantsIconProps) => {
  return (
    <Svg width={14} height={18} viewBox="0 0 14 18">
      <G
        stroke={color}
        strokeWidth={2}
        fill={color}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M13 17V7M7 17V1M1 17v-6" />
      </G>
    </Svg>
  );
};

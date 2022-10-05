import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface HomeIconProps {
  color: string;
}

export const HomeIcon = ({color}: HomeIconProps) => {
  return (
    <Svg width={20} height={22} viewBox="0 0 20 22">
      <G
        stroke={color}
        fill="none"
        strokeWidth={2}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M1 8l9-7 9 7v11a2 2 0 01-2 2H3a2 2 0 01-2-2V8z" />
        <Path d="M7 21V11h6v10" />
      </G>
    </Svg>
  );
};

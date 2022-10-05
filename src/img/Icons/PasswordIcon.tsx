import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';

interface PasswordIconProps {
  color: string;
}

export const PasswordIcon = ({color}: PasswordIconProps) => {
  return (
    <Svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      xmlns="http://www.w3.org/2000/svg">
      <G
        transform="translate(1 1)"
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Rect y={9} width={18} height={11} rx={2} />
        <Path d="M4 9V5a5 5 0 1110 0v4" />
      </G>
    </Svg>
  );
};

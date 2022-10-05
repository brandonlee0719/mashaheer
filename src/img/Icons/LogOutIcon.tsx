import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface LogOutIconProps {
  color: string;
}

export const LogOutIcon = ({color}: LogOutIconProps) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <G
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M7 19H3a2 2 0 01-2-2V3a2 2 0 012-2h4M14 15l5-5-5-5M19 10H7" />
      </G>
    </Svg>
  );
};

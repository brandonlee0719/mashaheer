import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface EmailIconProps {
  color: string;
}

export const EmailIcon = ({color}: EmailIconProps) => {
  return (
    <Svg
      width={22}
      height={18}
      viewBox="0 0 22 18"
      xmlns="http://www.w3.org/2000/svg">
      <G
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M3 1h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z" />
        <Path d="M21 3l-10 7L1 3" />
      </G>
    </Svg>
  );
};

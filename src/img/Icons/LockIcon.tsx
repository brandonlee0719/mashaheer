import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';

interface LockIconProps {
  color: string;
}

export const LockIcon = ({color}: LockIconProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <G
        transform="translate(1 1)"
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Rect y={9.9} width={22} height={12.1} rx={2} />
        <Path d="M4.889 9.9V5.5C4.889 2.462 7.625 0 11 0c3.375 0 6.111 2.462 6.111 5.5v4.4" />
      </G>
    </Svg>
  );
};

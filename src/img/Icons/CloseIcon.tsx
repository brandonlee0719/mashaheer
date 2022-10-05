import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface CloseIconProps {
  color: string;
}

export const CloseIcon = ({color}: CloseIconProps) => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg">
      <G
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M13 1L1 13M1 1l12 12" />
      </G>
    </Svg>
  );
};

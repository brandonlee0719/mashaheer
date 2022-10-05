import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface MapIconProps {
  color: string;
}

export const MapIcon = ({color}: MapIconProps) => {
  return (
    <Svg
      width={24}
      height={22}
      viewBox="0 0 24 22"
      xmlns="http://www.w3.org/2000/svg">
      <G
        strokeWidth={2}
        stroke={color}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M1 5v16l7-4 8 4 7-4V1l-7 4-8-4zM8 1v16M16 5v16" />
      </G>
    </Svg>
  );
};

import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface ListIconProps {
  color: string;
}

export const ListIcon = ({color}: ListIconProps) => {
  return (
    <Svg
      width={20}
      height={14}
      viewBox="0 0 20 14"
      xmlns="http://www.w3.org/2000/svg">
      <G
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M6 1h13M6 7h13M6 13h13M1 1h.01M1 7h.01M1 13h.01" />
      </G>
    </Svg>
  );
};

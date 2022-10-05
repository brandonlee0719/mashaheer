import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

interface ShowOnIconProps {
  color: string;
}

export const ShowOnIcon = ({color}: ShowOnIconProps) => {
  return (
    <Svg
      width={24}
      height={18}
      viewBox="0 0 24 18"
      xmlns="http://www.w3.org/2000/svg">
      <G
        transform="translate(1 1)"
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M0 8s4-8 11-8 11 8 11 8-4 8-11 8S0 8 0 8z" />
        <Circle cx={11} cy={8} r={3} />
      </G>
    </Svg>
  );
};

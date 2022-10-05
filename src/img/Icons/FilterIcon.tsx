import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface FilterIconProps {
  color: string;
}

export const FilterIcon = ({color}: FilterIconProps) => {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21 1H1l8 9.46V17l4 2v-8.54z"
        strokeWidth={2}
        stroke={color}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

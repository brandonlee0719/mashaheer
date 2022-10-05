import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ChevronRightIconProps {
  color: string;
}

export const ChevronRightIcon = ({color}: ChevronRightIconProps) => {
  return (
    <Svg
      width={12}
      height={18}
      viewBox="0 0 8 14"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1 13l6-6-6-6"
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

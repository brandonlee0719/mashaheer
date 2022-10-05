import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface StarIconProps {
  color: string;
}

export const StarIcon = ({color}: StarIconProps) => {
  return (
    <Svg
      width={16}
      height={15}
      viewBox="0 0 22 21"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
        strokeWidth={2}
        stroke="none"
        fill={color}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

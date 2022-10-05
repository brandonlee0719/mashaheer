import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface FavoritesIconProps {
  color: string;
}

export const FavoritesIcon = ({color}: FavoritesIconProps) => {
  return (
    <Svg width={24} height={21} viewBox="0 0 24 21">
      <Path
        d="M20.84 2.61a5.5 5.5 0 00-7.78 0L12 3.67l-1.06-1.06a5.501 5.501 0 00-7.78 7.78l1.06 1.06L12 19.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78h0z"
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

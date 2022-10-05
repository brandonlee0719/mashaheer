import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface TwitterIconProps {
  width: number;
  height: number;
}

export const TwitterIcon = ({width, height}: TwitterIconProps) => {
  return (
    <Svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M24.19 61.24c28.09 0 43.45-23.27 43.45-43.45v-2a31.14 31.14 0 007.62-7.91 30.13 30.13 0 01-8.78 2.4 15.3 15.3 0 006.72-8.44 30.49 30.49 0 01-9.7 3.7A15.29 15.29 0 0037 16.05a14.85 14.85 0 00.4 3.45A43.41 43.41 0 016 3.55c-4.02 6.981-1.953 15.882 4.73 20.38A15.2 15.2 0 013.76 22v.19A15.31 15.31 0 0016 37.18a15.13 15.13 0 01-6.89.27 15.31 15.31 0 0014.26 10.6 30.59 30.59 0 01-19 6.55 31.61 31.61 0 01-3.64-.22 43.28 43.28 0 0023.41 6.85"
        fillRule="nonzero"
        fill="#1DA1F2"
      />
    </Svg>
  );
};

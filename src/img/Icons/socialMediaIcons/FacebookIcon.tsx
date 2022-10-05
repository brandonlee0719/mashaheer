import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface FacebookIconProps {
  size: number;
}

export const FacebookIcon = ({size}: FacebookIconProps) => {
  return (
    <Svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M66.12.78a9.11 9.11 0 019.1 9.1v56.24a9.11 9.11 0 01-9.1 9.1H50.64v-28h9.69l1.84-12H50.64v-7.85c0-3.29 1.61-6.49 6.78-6.49h5.24V10.65a64.14 64.14 0 00-9.31-.81c-9.49 0-15.69 5.75-15.69 16.17v9.15H27.11v12h10.55v28.06H9.88a9.11 9.11 0 01-9.1-9.1V9.88a9.11 9.11 0 019.1-9.1h56.24z"
        fill="#1777F2"
        fillRule="evenodd"
      />
    </Svg>
  );
};

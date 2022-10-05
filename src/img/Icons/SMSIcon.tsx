import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SMSIconProps {
  color: string;
}

export const SMSIcon = ({color}: SMSIconProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M23 15.667a2.444 2.444 0 01-2.444 2.444H5.889L1 23V3.444A2.444 2.444 0 013.444 1h17.112A2.444 2.444 0 0123 3.444v12.223z"
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

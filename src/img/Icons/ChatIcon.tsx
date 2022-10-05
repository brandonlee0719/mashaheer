import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ChatIconProps {
  color: string;
}

export const ChatIcon = ({color}: ChatIconProps) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20">
      <Path
        d="M19 9.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L1 19l1.9-5.7A8.38 8.38 0 012 9.5a8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5h0z"
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

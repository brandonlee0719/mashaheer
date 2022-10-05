import * as React from 'react';
import Svg, {Defs, LinearGradient, G, Stop, Path} from 'react-native-svg';

interface InstagramIconProps {
  size: number;
}

export const InstagramIcon = ({size}: InstagramIconProps) => {
  return (
    <Svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <Defs>
        <LinearGradient
          x1="66.694%"
          y1="-3.866%"
          x2="37.254%"
          y2="93.401%"
          id="prefix__a">
          <Stop stopColor="#515BD4" offset="0%" />
          <Stop stopColor="#9510B8" offset="26%" />
          <Stop stopColor="#E51804" offset="66%" />
          <Stop stopColor="#FEDA77" offset="100%" />
        </LinearGradient>
        <LinearGradient
          x1="82.514%"
          y1="-54.913%"
          x2="25.175%"
          y2="134.53%"
          id="prefix__b">
          <Stop stopColor="#515BD4" offset="0%" />
          <Stop stopColor="#9510B8" offset="26%" />
          <Stop stopColor="#E51804" offset="66%" />
          <Stop stopColor="#FFBF00" offset="100%" />
        </LinearGradient>
        <LinearGradient
          x1="6244%"
          y1="-1903%"
          x2="6319%"
          y2="-1903%"
          id="prefix__c">
          <Stop stopColor="#515BD4" offset="0%" />
          <Stop stopColor="#9510B8" offset="26%" />
          <Stop stopColor="#E51804" offset="66%" />
          <Stop stopColor="#FFBF00" offset="100%" />
        </LinearGradient>
      </Defs>
      <G fillRule="nonzero" fill="none">
        <Path
          d="M38 .78c-10.11 0-11.37.05-15.34.23a27.3 27.3 0 00-9 1.73A19 19 0 002.74 13.62a27.3 27.3 0 00-1.73 9c-.18 4-.23 5.23-.23 15.34s.05 11.37.23 15.34a27.3 27.3 0 001.73 9 19 19 0 0010.88 10.96 27.3 27.3 0 009 1.73c4 .18 5.23.23 15.34.23s11.37 0 15.34-.23a27.3 27.3 0 009-1.73 19 19 0 0010.96-10.88 27.3 27.3 0 001.73-9c.18-4 .23-5.23.23-15.34s0-11.37-.23-15.34a27.3 27.3 0 00-1.73-9A19 19 0 0062.38 2.74a27.3 27.3 0 00-9-1.73C49.37.83 48.11.78 38 .78zm0 6.71c9.94 0 11.11 0 15 .22 2.39.017 4.76.454 7 1.29a12.28 12.28 0 017 7.05A20.43 20.43 0 0168.29 23c.18 3.93.22 5.1.22 15s0 11.11-.22 15A20.43 20.43 0 0167 60a12.28 12.28 0 01-7 7 20.43 20.43 0 01-7 1.29c-3.93.18-5.1.22-15 .22s-11.11 0-15-.22A20.43 20.43 0 0116.05 67 12.28 12.28 0 019 60a20.43 20.43 0 01-1.29-7c-.18-3.93-.22-5.1-.22-15s0-11.11.22-15A20.43 20.43 0 019 16.05 12.28 12.28 0 0116.05 9 20.43 20.43 0 0123 7.71c3.89-.18 5.06-.22 15-.22z"
          fill="url(#prefix__a)"
        />
        <Path
          d="M38 50.41c-6.854 0-12.41-5.556-12.41-12.41S31.146 25.59 38 25.59 50.41 31.146 50.41 38 44.854 50.41 38 50.41zm0-31.52c-10.554 0-19.11 8.556-19.11 19.11S27.446 57.11 38 57.11 57.11 48.554 57.11 38C57.104 27.448 48.552 18.896 38 18.89z"
          fill="url(#prefix__b)"
        />
        <Path
          d="M62.33 18.13a4.47 4.47 0 11-8.94.02 4.47 4.47 0 018.94-.02z"
          fill="url(#prefix__c)"
        />
      </G>
    </Svg>
  );
};

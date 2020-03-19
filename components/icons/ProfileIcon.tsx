import React from 'react';
import Svg, { Path } from 'react-native-svg';

import Props from './Icon';

const HomeIcon: React.FunctionComponent<Props> = ({ width, height, color }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 21 23" fill="none">
    <Path
      d="M20 22V19.6667C20 18.429 19.4996 17.242 18.6088 16.3668C17.718 15.4917 16.5098 15 15.25 15H5.75C4.49022 15 3.28204 15.4917 2.39124 16.3668C1.50044 17.242 1 18.429 1 19.6667V22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 10C12.7614 10 15 7.98528 15 5.5C15 3.01472 12.7614 1 10 1C7.23858 1 5 3.01472 5 5.5C5 7.98528 7.23858 10 10 10Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeIcon;

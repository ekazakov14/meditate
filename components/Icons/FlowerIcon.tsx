import React from 'react';
import Svg, { Path } from 'react-native-svg';

import Props from './Icon';

const HomeIcon = ({ width, height, color }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 30 28" fill="none">
    <Path
      d="M15.5 24.5055C27 24.0056 28.2917 15.7956 29 9.56016C24.2778 8.31308 15.5 8.32944 15.5 18.5056"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M15.5 24.5055C4 24.0056 2.70835 15.7956 2.00002 9.56016C6.72224 8.31308 15.5 8.32944 15.5 18.5056"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M22 8.54683C20.7174 4.81543 15.5623 2 15.5623 2C15.5623 2 9.99617 5.03719 9 9"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default HomeIcon;

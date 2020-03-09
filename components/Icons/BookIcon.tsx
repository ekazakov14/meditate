import React from 'react';
import Svg, { Path } from 'react-native-svg';

import Props from './Icon';

const HomeIcon = ({ width, height, color }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
    <Path
      d="M2.33331 3.5H9.33331C10.571 3.5 11.758 3.99167 12.6331 4.86683C13.5083 5.742 14 6.92899 14 8.16667V24.5C14 23.5717 13.6312 22.6815 12.9749 22.0251C12.3185 21.3687 11.4282 21 10.5 21H2.33331V3.5Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M25.6667 3.5H18.6667C17.429 3.5 16.242 3.99167 15.3668 4.86683C14.4917 5.742 14 6.92899 14 8.16667V24.5C14 23.5717 14.3687 22.6815 15.0251 22.0251C15.6815 21.3687 16.5717 21 17.5 21H25.6667V3.5Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default HomeIcon;

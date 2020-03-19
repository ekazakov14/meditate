import React from 'react';
import Svg, { Path } from 'react-native-svg';

import Props from './Icon';

const HomeIcon: React.FunctionComponent<Props> = ({ width, height, color }: Props) => (
  <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
    <Path
      d="M3.5 10.5L14 2.33334L24.5 10.5V23.3333C24.5 23.9522 24.2542 24.5457 23.8166 24.9833C23.379 25.4208 22.7855 25.6667 22.1667 25.6667H5.83333C5.21449 25.6667 4.621 25.4208 4.18342 24.9833C3.74583 24.5457 3.5 23.9522 3.5 23.3333V10.5Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 25.6667V14H17.5V25.6667"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeIcon;

import React from 'react';
import Svg, { Path } from 'react-native-svg';

import defaultProps from './Icon';

type Props = {
  readonly direction: 'top' | 'right' | 'bottom' | 'left';
} & defaultProps;

const rotateHash = {
  top: 90,
  right: 180,
  bottom: 270,
  left: 0,
} as const;

const AngleIcon: React.FunctionComponent<Props> = ({
  width,
  height,
  color,
  direction,
}: Props) => {
  const transform = `rotate(${rotateHash[direction]}deg)`;

  return (
    <Svg width={width} height={height} viewBox="0 0 8 14" fill="none" transform={transform}>
      <Path d="M7 1L1 7L7 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default AngleIcon;

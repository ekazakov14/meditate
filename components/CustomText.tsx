import React, { ReactNode } from 'react';
import { Text } from 'react-native';

type Props = {
  readonly center?: true;
  readonly children: ReactNode;
  readonly style?: Record<string, string | number>;
  readonly medium?: true;
  readonly semibold?: true;
};

const styles = {
  default: {
    fontFamily: 'sf-regular',
  },
  center: {
    textAlign: 'center',
  },
  medium: {
    fontFamily: 'sf-semibold',
  },
  semibold: {
    fontFamily: 'sf-semibold',
  },
};

const CustomText: React.FunctionComponent<Props> = ({ children, style = {}, ...props }: Props) => {
  let resultStyles = {
    ...style,
    ...styles.default,
  };

  Object.keys(props).forEach((prop) => {
    resultStyles = {
      ...resultStyles,
      ...styles[prop],
    };
  });

  return (
    <Text style={resultStyles}>{children}</Text>
  );
};


export default CustomText;

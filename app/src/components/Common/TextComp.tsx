import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export type Props = {
  type: 'regular' | 'medium' | 'semibold' | 'bold';
  size: number;
  textAlign?: string;
  color: string;
  value: string;
  numberOfLines?: number;
};

const TextComp = ({
  type,
  size,
  textAlign,
  color,
  value,
  numberOfLines,
}: Props) => {
  let textStyle: any;

  switch (type) {
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'medium':
      textStyle = styles.medium;
      break;
    case 'semibold':
      textStyle = styles.semibold;
      break;
    case 'bold':
      textStyle = styles.bold;
      break;
    default:
      break;
  }
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        textStyle,
        {color: color, fontSize: RFValue(size), textAlign: textAlign},
      ]}>
      {value}
    </Text>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Inter-Regular',
  },
  medium: {
    fontFamily: 'Inter-Medium',
  },
  semibold: {
    fontFamily: 'Inter-SemiBold',
  },
  bold: {
    fontFamily: 'Inter-Bold',
  },
});

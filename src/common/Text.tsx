import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {White, Black} from './Colors';

interface TextProps extends TextStyle {
  text: string;
  size?: number;
  style?: object;
  color?: string;
}

export const HeaderText = ({text, size, color, style}: TextProps) => (
  <Text
    style={
      [
        styles.headerText,
        size && {fontSize: size},
        color && {color: color},
        style,
      ] as TextStyle
    }>
    {text}
  </Text>
);

// export const ManropeMedium = () => (
//   <Text style={[styles.smallText, style, color && { color: color }]}>
//     {text}
//   </Text>
// )
export const RegularText = ({text, size, color, style}: TextProps) => (
  <Text
    style={
      [
        styles.regularText,
        size && {fontSize: size},
        color && {color: color},
        style,
      ] as TextStyle
    }>
    {text}
  </Text>
);

export const SmallText = ({text, size, color, style}: TextProps) => (
  <Text
    style={
      [
        styles.smallText,
        color && {color: color},
        size && {fontSize: size},
        style,
      ] as TextStyle
    }>
    {text}
  </Text>
);

export const SemiBoldText = ({text, style}: TextProps) => (
  <Text style={[styles.semiboldText, style]}>{text}</Text>
);

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 30,
    lineHeight: 38,
    color: Black,
  },
  regularText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: Black,
  },
  smallText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    // fontWeight:'400',
    color: White,
  },
  semiboldText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
});

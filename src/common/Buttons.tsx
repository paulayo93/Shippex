import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Black, White} from './Colors';
import {ms} from './utils';

interface ButtonProps {
  text: string;
  transparent?: boolean;
  disabled?: boolean;
  onPress: () => void;
  style?: object;
  isLoading?: boolean;
  textStyle?: object;
  bgColor?: string;
}

export const Button = ({
  text,
  transparent,
  onPress,
  style,
  textStyle,
  disabled,
  isLoading,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.8}
      onPress={disabled ? null : onPress}
      style={[
        styles.button,
        transparent && styles.transparentBtn,
        disabled && styles.disabled,
        style,
      ]}>
      {isLoading ? (
        <ActivityIndicator size="small" color={White} />
      ) : (
        <Text
          style={[
            styles.buttonText,
            transparent && styles.transparentBtnText,
            disabled && styles.disabled,
            textStyle,
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export const TextButton = ({text, onPress, style, textStyle}: ButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[styles.textBtn, style]}>
    <Text style={[styles.textBtnText, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: ms(308),
    height: ms(46),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: Blue,
  },
  transparentBtn: {
    backgroundColor: 'transparent',
    borderColor: White,
    borderWidth: 2,
    borderStyle: 'solid',
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    lineHeight: 19,
    color: White,
  },
  transparentBtnText: {
    color: White,
  },
  textBtn: {
    // paddingVertical: ms(6),
  },
  textBtnText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: Black,
  },
  disabled: {
    // backgroundColor: Mischka,
    // color: Grey900,
  },
});

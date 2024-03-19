import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  Black,
  Grey400,
  RitualCyan600,
  RoyalBlue600,
  bgInputBox,
} from './Colors';
import {ms} from './utils';

const Input = ({
  containerStyle,
  placeholder,
  onChangeText,
  handleBlur,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);
  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    animatedLabel(1);
  };

  const onhandleBlur = () => {
    setIsFocused(false);
    if (!text) {
      animatedLabel(0);
    }
  };

  const handleTextChange = text => {
    setText(text);
    if (onChangeText) {
      onChangeText(text);
    }
    if (text) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  };

  const animatedLabel = toValue => {
    Animated.timing(labelPosition, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle = {
    left: 10,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [17, 10],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 11],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [Grey400, RitualCyan600],
    }),
  };

  return (
    <View style={containerStyle}>
      <View style={[styles.innerContainer, error && {borderColor: 'red'}]}>
        <Animated.Text style={[styles.label, labelStyle]}>
          {placeholder}
        </Animated.Text>
        <View style={styles.inputContainer}>
          <TextInput
            {...props}
            style={styles.input}
            onFocus={handleFocus}
            onBlur={() => {
              onhandleBlur();
              handleBlur();
            }}
            onChangeText={handleTextChange}
            value={text}
            textAlignVertical="center"
            textContentType={
              props.secureTextEntry ? 'newPassword' : props.secureTextEntry
            }
            secureTextEntry={showPassword}
            cursorColor={Black}
          />
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    borderWidth: 0,
    height: 60,
    justifyContent: 'center',
    borderRadius: ms(8),
    borderColor: bgInputBox,
  },
  label: {
    position: 'absolute',
    color: Grey400,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: bgInputBox,
    borderRadius: ms(8),
    borderColor: bgInputBox,
    borderWidth: 0,
    color: RoyalBlue600,
    width: '100%',
    height: ms(50),
    paddingLeft: ms(10),
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 19,
    // marginTop: 10,
    paddingTop: 20,
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: 'red',
  },
});

export default Input;

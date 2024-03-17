import React from 'react';
import {ScrollViewProps, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface ContentProps extends ScrollViewProps {
  padder?: boolean;
}

const Content: React.FC<ContentProps> = ({
  style,
  contentContainerStyle,
  children,
  padder,
  ...props
}) => {
  return (
    <KeyboardAwareScrollView
      {...props}
      bounces={true}
      style={[padder && {...styles.padHor32}, {...styles.bgWhite}, style]}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}>
      {children}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  padHor32: {
    paddingHorizontal: 32,
  },
  bgWhite: {
    backgroundColor: 'White',
  },
});

export default Content;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ms, SemiBoldText, SmallText} from '@common';

const styles = StyleSheet.create({
  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchWrapper: {
    paddingVertical: ms(24),
  },
  titleWrapper: {
    marginTop: ms(25),
  },
  smallText: {
    opacity: 0.6,
  },
  semiBoldText: {
    fontSize: ms(28),
  },
});
const Title = () => (
  <View style={styles.titleWrapper}>
    <SmallText text="Hello," style={styles.smallText} />
    <SemiBoldText text="Ibrahim Shaker" style={styles.semiBoldText} />
  </View>
);

export default Title;

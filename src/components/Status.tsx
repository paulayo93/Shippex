import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ms, SmallText, RoyalBlue600, White, RoyalBlue100} from '@common';

const statusStyles = StyleSheet.create({
  container: {
    borderRadius: ms(6),
    borderColor: White,
    borderWidth: 1,
    backgroundColor: RoyalBlue100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  statusText: {
    fontSize: ms(13),
    color: RoyalBlue600,
    fontFamily: 'Inter-Medium',
  },
});
const Status = () => {
  return (
    <View>
      <View style={statusStyles.container}>
        <SmallText style={statusStyles.statusText} text="RECEIVED" />
      </View>
    </View>
  );
};

export default Status;

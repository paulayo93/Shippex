import React, {useState} from 'react';
import {useAppSelector} from '@store';

import {View} from 'react-native';

import AuthStack from './AuthStack';
import BottomTab from './BottomTab';

const AppNavigator = () => {
  const {isAuthenticated} = useAppSelector(state => state.user);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      {isAuthenticated ? <BottomTab /> : <AuthStack />}
    </View>
  );
};

export default AppNavigator;

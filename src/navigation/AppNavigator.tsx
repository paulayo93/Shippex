import React, {useState} from 'react';

import {View} from 'react-native';

import AuthStack from './AuthStack';
import BottomTab from './BottomTab';

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthicated] = useState(true);
  return (
    <View style={{flex: 1}}>
      {isAuthenticated ? <BottomTab /> : <AuthStack />}
    </View>
  );
};

export default AppNavigator;

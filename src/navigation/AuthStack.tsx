import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Landing from '../screens/authentication/Landing';
import {AuthStackList} from '../types/navigation.types';
import Login from '../screens/authentication/Login';

// import { useAppSelector } from '@store';

const Stack = createNativeStackNavigator<AuthStackList>();

const AuthStack = () => {
  // const {onboarded} = useAppSelector(state => state.user);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      /*initialRouteName={onboarded ? 'login' : 'onboarding'}*/
    >
      {/* <Stack.Screen name="landing" component={Landing} /> */}
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};
export default AuthStack;

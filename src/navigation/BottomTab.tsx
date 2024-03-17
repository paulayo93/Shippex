import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ShipmentTabIconActive,
  ShipmentTabIconInActive,
  ScanTabIconInActive,
  ScanTabIconActive,
  WalletTabIconActive,
  WalletTabIconInActive,
  ProfileTabIconActive,
  ProfileTabIconInActive,
} from '../../assets/icons/icons';

import {iOS} from '@common';
import ShipmentScreen from '../screens/main/Shipment';

const Tab = createBottomTabNavigator();

interface TabIcon {
  tabName: string;
  focused: boolean;
}

const TabIcon = ({tabName, focused}: TabIcon) => {
  if (tabName === 'shipments') {
    if (focused) {
      return <ShipmentTabIconActive />;
    } else {
      return <ShipmentTabIconInActive />;
    }
  }
  if (tabName === 'scan') {
    if (focused) {
      return <ScanTabIconActive />;
    } else {
      return <ScanTabIconInActive />;
    }
  }
  if (tabName === 'wallet') {
    if (focused) {
      return <WalletTabIconActive />;
    } else {
      return <WalletTabIconInActive />;
    }
  }
  if (tabName === 'profile') {
    if (focused) {
      return <ProfileTabIconActive />;
    } else {
      return <ProfileTabIconInActive />;
    }
  }
};

const BottomTab = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#5B4CCC',
      tabBarInactiveTintColor: '#A7A3B3',
      tabBarLabelStyle: {
        textTransform: 'capitalize',
        fontFamily: 'Inter-Medium',
        fontSize: 10,
        lineHeight: 18,
        marginTop: 7,
      },
      tabBarStyle: {
        paddingTop: 13,
        minHeight: 60,
        paddingBottom: iOS ? 20 : 10,
        backgroundColor: '#FFFFFF',
      },
    }}>
    <Tab.Screen
      name="dashboard"
      component={ShipmentScreen}
      options={{
        title: 'Shipments',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => (
          <TabIcon tabName={'shipments'} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Bills"
      component={ShipmentScreen}
      options={{
        title: 'Scan',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => (
          <TabIcon tabName={'scan'} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={ShipmentScreen}
      options={{
        title: 'Wallet',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => (
          <TabIcon tabName={'wallet'} focused={focused} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ShipmentScreen}
      options={{
        title: 'Profile',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => (
          <TabIcon tabName={'profile'} focused={focused} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default BottomTab;

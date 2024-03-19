import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackList = {
  landing: undefined;
  login: undefined;
};

export type MainStackList = {
  shipments: undefined;
  scan: undefined;
  wallet: undefined;
  profile: undefined;
};
export type AuthNavProps = NativeStackScreenProps<AuthStackList>;

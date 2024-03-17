import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackList = {
  landing: undefined;
  login: undefined;
};

export type AuthNavProps = NativeStackScreenProps<AuthStackList>;

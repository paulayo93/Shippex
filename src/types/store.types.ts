import {IsUser} from './types';

export interface UserState {
  user: IsUser;
  isAuthenticated: boolean;
  fullname: string;
}

export interface ShipmentState {
  name: string;
}

import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type AppParamList = {
  Home: undefined;
  Favorites: undefined;
  Bookings: undefined;
  Chat: undefined;
  Profile: undefined;
};

export type AppNavProps<A extends keyof AppParamList> = {
  navigation: BottomTabNavigationProp<AppParamList, A>;
  route: RouteProp<AppParamList, A>;
};

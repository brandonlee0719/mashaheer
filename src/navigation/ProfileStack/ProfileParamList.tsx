import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type ProfileParamList = {
  Profile: {
    user: {
      username: string;
      isInfluencer: boolean;
    };
  };
  MyBookings: undefined;
};

export type ProfileStackNavProps<T extends keyof ProfileParamList> = {
  navigation: StackNavigationProp<ProfileParamList, T>;
  route: RouteProp<ProfileParamList, T>;
};

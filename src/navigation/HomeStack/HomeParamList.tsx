import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { InfParamList } from './InfParamList';

export type HomeParamList = {
  Explore: undefined;
  Profile: undefined;
  Search: undefined;
  Book: {
    name: string;
    photo: object;
  };
  BookDone: undefined;
  Category: {
    id: string;
    name: string;
    photo: object;
  };
  Product: {
    id: string;
    name: string;
    description: string;
    price: number;
    remote: boolean;
    platforms: any;
    infAbout: string;
    photo: object;
    category: string;
  };
} & InfParamList;

export type HomeStackNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};

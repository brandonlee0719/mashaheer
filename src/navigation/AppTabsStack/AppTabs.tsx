import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppParamList} from './AppParamList';
import {HomeIcon, FavoritesIcon, ChatIcon, ProfileIcon} from '../../img/Icons';
import colors from '../../styles/colors';
import {AddButton} from '../../components/buttons/AddButton';
import {
  HomeStack,
  FavoritesStack,
  BookingsStack,
  ChatStack,
  ProfileStack,
} from '../';

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const focusedColor = focused ? colors.orange01 : colors.gray03;

          //----//
          if (route.name === 'Home') {
            return <HomeIcon color={focusedColor} />;
          } else if (route.name === 'Favorites') {
            return <FavoritesIcon color={focusedColor} />;
          } else if (route.name === 'Bookings') {
            return <AddButton />;
          } else if (route.name === 'Chat') {
            return <ChatIcon color={focusedColor} />;
          } else if (route.name === 'Profile') {
            return <ProfileIcon color={focusedColor} />;
          }
          //----//
          return null;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: styles.bottomTabStyles,
      }}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Favorites" component={FavoritesStack} />
      <Tabs.Screen name="Bookings" component={BookingsStack} />
      <Tabs.Screen name="Chat" component={ChatStack} />
      <Tabs.Screen name="Profile" component={ProfileStack} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyles: {
    // backgroundColor: colors.green01,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    position: 'absolute',
    borderTopWidth: 0,
  },
});

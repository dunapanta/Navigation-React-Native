import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabChatScreen} from '../screens/TopTabChatScreen';
import {TopTabContactsScreen} from '../screens/TopTabContactsScreen';
import {TopTabAlbums} from '../screens/TopTabAlbums';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';
import { Text } from 'react-native';

/* import {LogBox} from 'react-native'
LogBox.ignoreLogs(['Sending']) */

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
        style: {
          //quitar linea
          shadowColor: 'transparent', //ios
          elevation: 0, // android
        },
      }}

      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'TopTabChatScreen':
              iconName = 'Chat';
              break;
            case 'TopTabContactsScreen':
              iconName = 'Contactos';
              break;

            case 'TopTabAlbums':
              iconName = 'Albums';
              break;
          }

          return <Text style={{color: colors.secondaryDark}}>{iconName}</Text>;
        },
      })}
      >
      <Tab.Screen name="TopTabChatScreen" component={TopTabChatScreen} />
      <Tab.Screen
        name="TopTabContactsScreen"
        component={TopTabContactsScreen}
      />
      <Tab.Screen name="TopTabAlbums" component={TopTabAlbums} />
    </Tab.Navigator>
  );
};

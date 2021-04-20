import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopTabChatScreen } from '../screens/TopTabChatScreen';
import { TopTabContactsScreen } from '../screens/TopTabContactsScreen';
import { TopTabAlbums } from '../screens/TopTabAlbums';

/* import {LogBox} from 'react-native'
LogBox.ignoreLogs(['Sending']) */

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TopTabChatScreen" component={TopTabChatScreen} />
      <Tab.Screen name="TopTabContactsScreen" component={TopTabContactsScreen} />
      <Tab.Screen name="TopTabAlbums" component={TopTabAlbums} />
    </Tab.Navigator>
  );
}
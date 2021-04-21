import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
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
          let iconName;

          switch (route.name) {
            case 'TopTabChatScreen':
              iconName = <Icon name="rocket-outline" size={25} color="#721" />
              break;
            case 'TopTabContactsScreen':
              iconName = <Icon name="rainy-outline" size={25} color="#721" />
              break;

            case 'TopTabAlbums':
              iconName = <Icon name="albums-outline" size={25} color="#721" />
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
